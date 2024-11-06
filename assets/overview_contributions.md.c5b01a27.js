import{_ as t,o as e,c as o,Q as d}from"./chunks/framework.c4d6cd72.js";const g=JSON.parse('{"title":"Contributions","description":"","frontmatter":{},"headers":[],"relativePath":"overview/contributions.md","filePath":"overview/contributions.md"}'),i={name:"overview/contributions.md"},r=d('<h1 id="contributions" tabindex="-1">Contributions <a class="header-anchor" href="#contributions" aria-label="Permalink to &quot;Contributions&quot;">​</a></h1><blockquote><p><strong>Contribution</strong> — a piece of data that describes a fraud event on the blockchain.</p></blockquote><p>Contributions can be submitted by authorized peers, and are stored on the blockchain.</p><p>A peer or its user that has contributed at least a single fraud event is considered a <strong><em>contributor</em></strong>.</p><h2 id="operations" tabindex="-1">Operations <a class="header-anchor" href="#operations" aria-label="Permalink to &quot;Operations&quot;">​</a></h2><h3 id="submitting-contributions" tabindex="-1">Submitting contributions <a class="header-anchor" href="#submitting-contributions" aria-label="Permalink to &quot;Submitting contributions&quot;">​</a></h3><p>Once a contribution has been submitted, the peer’s list of contributions is updated, and their <a href="./tokenomics.html#token-balance">token balance</a> is increased by an amount equal to the number of contributions submitted based on the current reward rate active in the network.</p><p>When preparing a contribution for upload, the contributor must specify, whether they are the original source of the fraud event data. To do so, they must leave the <code>sourcePeerId</code> value empty. However, if the original source differs from the uploader, the <code>sourcePeerId</code> value must be the <code>peerId</code> of that specific user on the network. In such cases, the reward is split between the contributor and the original source according the <a href="./tokenomics.html#reward-split">reward split</a> rules.</p><p>For complete instructions on how to submit a contribution, see <a href="./../tutorials-api/submitting-a-contribution.html">Submitting a contribution</a>.</p><p>For information on the token balance and rewards, see <a href="./tokenomics.html">Tokenomics</a>.</p><h3 id="rc1" tabindex="-1">Retrieving contributions <a class="header-anchor" href="#rc1" aria-label="Permalink to &quot;Retrieving contributions {#rc1}&quot;">​</a></h3><p>In order for peers to keep their own records updated with the latest fraud event data, they can <a href="./../tutorials-api/retrieving-contributions.html">retrieve contributions in a number of ways</a>.</p><h3 id="flagging-contributions" tabindex="-1">Flagging contributions <a class="header-anchor" href="#flagging-contributions" aria-label="Permalink to &quot;Flagging contributions&quot;">​</a></h3><p>If a peer deems a certain contribution to no longer be relevant (e.g., it is a &quot;false positive&quot;), they can <a href="./../tutorials-api/flagging-a-contribution.html">flag that contribution</a>. Once a contribution is flagged, the ID of the peer that flagged it is saved with the contribution as <code>flagger</code> value.</p><h2 id="api-data-structures" tabindex="-1">API data structures <a class="header-anchor" href="#api-data-structures" aria-label="Permalink to &quot;API data structures&quot;">​</a></h2><h3 id="rc2" tabindex="-1">Retrieving contributions <a class="header-anchor" href="#rc2" aria-label="Permalink to &quot;Retrieving contributions {#rc2}&quot;">​</a></h3><p>When <a href="./../api-specification/contribution-controller/retrieving-contributions.html">retrieving contributions</a>, the following data is returned in the body of the response:</p><details class="details custom-block"><summary>Response body</summary><table><thead><tr><th>Field</th><th>Value Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>string</code></td><td>The unique identifier of a fraud event.</td></tr><tr><td><code>fraudType</code></td><td><code>string(enum)</code></td><td>The <a href="./fraud-events.html#types-of-fraud-events">type of the fraud event</a>. <br> Can be one of the following: <ol><li><code>Wangiri</code></li><li><code>IRSF</code></li><li><code>StolenDevice</code></li><li><code>IPFraud</code></li><li><code>SMSA2P</code></li></ol></td></tr><tr><td><code>origination</code></td><td><code>string</code></td><td>The two-letter code of the country the fraud event originated from (Alpha-2, <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" rel="noreferrer">ISO 3166</a>).</td></tr><tr><td><code>destination</code></td><td><code>string</code></td><td>The two-letter code of the country the fraud event was identified as such (Alpha-2, <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" rel="noreferrer">ISO 3166</a>).</td></tr><tr><td><code>expiryDate</code></td><td><code>integer($int64)</code></td><td>The exact time and date until which the event is considered relevant (ISO 8601: <code>YYYY-MM-DDTHH:MM:SSZ</code>). <br> By default, the <code>expiryDate</code> is set 30 days away from the <code>timestamp</code> value for all fraud types, except for <code>IRSF</code>, which has it set 90 days away.</td></tr><tr><td><code>fraudStatus</code></td><td><code>string(enum)</code></td><td>The status of the fraud event in relation to its <code>expiryDate</code>. <br> Can be one of the following: <ol><li><code>ACTIVE</code></li><li><code>EXPIRED</code></li><li><code>FLAGGED</code></li></ol></td></tr><tr><td><code>confidenceIndex</code></td><td><code>number($double)</code></td><td>The predicted fraud likelihood score in the range from 1 to 100.</td></tr><tr><td><code>isPrivileged</code></td><td><code>boolean</code></td><td>The definition of whether a contribution is privileged.</td></tr><tr><td><code>peerId</code></td><td><code>string</code></td><td>The unique identifier of the peer that contributed the data.</td></tr><tr><td><code>flagger</code></td><td><code>string</code></td><td>The unique identifier of the peer that flagged the data. If a contribution hasn&#39;t been flagged at the time of observing, the field returns <code>null</code>.</td></tr><tr><td><code>timestamp</code></td><td><code>integer($int32)</code></td><td>The exact time and date of when a contribution has been submitted (ISO 8601: <code>YYYY-MM-DDTHH:MM:SSZ</code>).</td></tr><tr><td><code>flagTimestamp</code></td><td><code>integer($int32)</code></td><td>The exact time and date of when a contribution has been flagged. If a contribution hasn&#39;t been flagged at the time of observing, the field returns <code>null</code>.</td></tr><tr><td><code>self</code></td><td><code>integer($int32)</code></td><td>Out of all the retrieved contributions, the number of contributions that have been submitted by the requesting user.</td></tr><tr><td><code>old</code></td><td><code>integer($int32)</code></td><td>Out of all the retrieved contributions, the number of contributions that have already been seen by the requesting user.</td></tr><tr><td><code>new</code></td><td><code>integer($int32)</code></td><td>Out of all the retrieved contributions, the number of contributions that have <em>not</em> yet been seen by the requesting user.</td></tr><tr><td><code>newWithConfidenceIndex</code></td><td><code>integer($int32)</code></td><td>Out of all the retrieved <code>new</code> contributions, the number of contributions that had their price potentially affected by the <a href="./tokenomics.html#confidence-index">confidence index</a>.</td></tr><tr><td><code>creditsSpent</code></td><td><code>integer($int32)</code></td><td>The total amount of tokens spent on the retrieved contributions.</td></tr><tr><td><code>balanceLeft</code></td><td><code>integer($int32)</code></td><td>The remaining token balance after retrieving contributions.</td></tr><tr><td><code>contributionsNotReturned</code></td><td><code>integer($int32)</code></td><td>The number of contributions that have not been returned.</td></tr><tr><td><code>contributionsNotReturnedCost</code></td><td><code>integer($int64)</code></td><td>The total cost of all the contributions that have not been returned but met the filter requirements, i.e., the amount of tokens that were not available on the user&#39;s balance at the time of the retrieval.</td></tr><tr><td><code>assetDefinitionId</code></td><td><code>string</code></td><td>The unique identifier of a contribution record on the blockchain network.</td></tr><tr><td><code>sourcePeerId</code></td><td><code>string</code></td><td>The unique identifier of the original source that contributed the data. May be different from the <code>peerID</code>. <br> For details, see <a href="./tokenomics.html#reward-split">Tokenomics: Reward split</a>.</td></tr></tbody></table></details><h3 id="assembling-contributions" tabindex="-1">Assembling contributions <a class="header-anchor" href="#assembling-contributions" aria-label="Permalink to &quot;Assembling contributions&quot;">​</a></h3><p>When <a href="./../api-specification/contribution-controller/assembling-a-contribution.html">assembling a contribution</a> to then <a href="./../api-specification/contribution-controller/submitting-a-contribution.html">submit it</a>, the following data must be specified in the body of the request:</p><details class="details custom-block"><summary>Request body</summary><table><thead><tr><th>Field</th><th>Value Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>string</code></td><td>Unique identifier of a fraud event. Or a range of fraud identifiers. <br> Example: <code>127.0.0.1</code> OR <code>127.0.0.1-127.0.0.2</code> OR <code>+14155552671</code> OR <code>+14155552671-+14155552672</code> OR <code>107615702016566</code></td></tr><tr><td><code>fraudType</code></td><td><code>string(enum)</code></td><td>The <a href="./fraud-events.html#types-of-fraud-events">type of the fraud event</a>. <br> Can be one of the following: <ol><li><code>Wangiri</code></li><li><code>IRSF</code></li><li><code>StolenDevice</code></li><li><code>IPFraud</code></li><li><code>SMSA2P</code></li></ol></td></tr><tr><td><code>origination</code></td><td><code>string</code></td><td>The two-letter code of the country the fraud event originated from (Alpha-2, <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" rel="noreferrer">ISO 3166</a>).</td></tr><tr><td><code>destination</code></td><td><code>string</code></td><td>The two-letter code of the country the fraud event was identified as such (Alpha-2, <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" rel="noreferrer">ISO 3166</a>).</td></tr><tr><td><code>sourcePeerId</code></td><td><code>string</code></td><td>The unique identifier of the original source that contributed the data. May be different from the <code>peerID</code> and is an optional field. <br> For details, see <a href="./tokenomics.html#reward-split">Tokenomics: Reward split</a>.</td></tr></tbody></table></details>',21),n=[r];function a(c,s,h,u,l,b){return e(),o("div",null,n)}const m=t(i,[["render",a]]);export{g as __pageData,m as default};
