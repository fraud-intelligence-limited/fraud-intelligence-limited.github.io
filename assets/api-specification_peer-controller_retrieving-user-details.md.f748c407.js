import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.c4d6cd72.js";const u=JSON.parse('{"title":"Retrieving user details","description":"","frontmatter":{},"headers":[],"relativePath":"api-specification/peer-controller/retrieving-user-details.md","filePath":"api-specification/peer-controller/retrieving-user-details.md"}'),p={name:"api-specification/peer-controller/retrieving-user-details.md"},o=l(`<h1 id="retrieving-user-details" tabindex="-1">Retrieving user details <a class="header-anchor" href="#retrieving-user-details" aria-label="Permalink to &quot;Retrieving user details&quot;">​</a></h1><blockquote><p>Retrieves all of the details about the <a href="./../auth-controller/authorizing-a-user-in-the-system.html">authorized FIB user</a>.</p></blockquote><p><strong>Protocol</strong>: <code>HTTP</code></p><p><strong>Encoding</strong>: <code>JSON</code></p><p><strong>Endpoint</strong>: <code>/auth/api/v1/peer-management/account</code></p><p><strong>Method</strong>: <code>GET</code></p><p><strong>Header</strong>: <code>Authorization</code> — represented by a <code>string</code> that is the <code>accessToken</code> value that was returned either at the authorization, or the previous time the token <a href="./../auth-controller/refreshing-authentication-tokens.html">has been refreshed</a>.</p><h4 id="input-request-structure" tabindex="-1">Input/request structure <a class="header-anchor" href="#input-request-structure" aria-label="Permalink to &quot;Input/request structure&quot;">​</a></h4><p>A <code>GET</code> request to the endpoint with the <code>Authorization</code> header specified.</p><h4 id="output-response-structure" tabindex="-1">Output/response structure <a class="header-anchor" href="#output-response-structure" aria-label="Permalink to &quot;Output/response structure&quot;">​</a></h4><details class="details custom-block"><summary>Show</summary><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-TTECg" id="tab-N-xgFL8" checked="checked"><label for="tab-N-xgFL8">Structure</label><input type="radio" name="group-TTECg" id="tab-Z1AdQzq"><label for="tab-Z1AdQzq">Example</label></div><div class="blocks"><div class="language-json5 vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">integer($int</span><span style="color:#79B8FF;">32</span><span style="color:#FDAEB7;font-style:italic;">)</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">email</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">accountId</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">authPubKeyHex</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">irohaPubKeyHex</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">salt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">role</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string(enum)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//&#39;ROLE_ADMIN&#39; OR &#39;ROLE_DOMAIN_ADMIN&#39; OR &#39;ROLE_PEER&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string(enum)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">phoneNumber</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">firstName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">lastName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">roleName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerCompanyName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerOperatingCountry</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string(enum)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//&#39;LARGE_TELCO&#39; OR &#39;MEDIUM_TELCO&#39; OR &#39;SMALL_TELCO&#39; OR &#39;VENDOR&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerConnectionType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string(enum)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerGroup</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerIsPrivileged</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">boolean</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">registrationDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//ISO 8601: YYYY-MM-DDTHH:MM:SSZ</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">subscriptionType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string(enum)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//&#39;TRIAL&#39; OR &#39;FREEMIUM&#39; OR &#39;PREMIUM&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">subscriptionExpiryDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">//ISO</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8601</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">YYYY-MM-DDTHH:MM:SSZ</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">code</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">integer($int</span><span style="color:#005CC5;">32</span><span style="color:#B31D28;font-style:italic;">)</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">email</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">accountId</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">authPubKeyHex</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">irohaPubKeyHex</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">salt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">role</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string(enum)&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//&#39;ROLE_ADMIN&#39; OR &#39;ROLE_DOMAIN_ADMIN&#39; OR &#39;ROLE_PEER&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string(enum)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">phoneNumber</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">firstName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">lastName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">roleName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerCompanyName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerOperatingCountry</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string(enum)&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//&#39;LARGE_TELCO&#39; OR &#39;MEDIUM_TELCO&#39; OR &#39;SMALL_TELCO&#39; OR &#39;VENDOR&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerConnectionType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string(enum)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerGroup</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerIsPrivileged</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">boolean</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">registrationDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//ISO 8601: YYYY-MM-DDTHH:MM:SSZ</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">subscriptionType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string(enum)&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//&#39;TRIAL&#39; OR &#39;FREEMIUM&#39; OR &#39;PREMIUM&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">subscriptionExpiryDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">//ISO</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8601</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">YYYY-MM-DDTHH:MM:SSZ</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Ok&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">email</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;alice@wonder.land&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">accountId</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;alice@sora&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">authPublicKeyHex</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;8a53d297bc406c63396967388ecc2ebc8abd701d195a43bbb4751ac5a86eac1b&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">irohaPublicKeyHex</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0b458f758eeca3d7a2a64de0648c9b7dccaee146202257cd8ebaeb4690aa48b464108111d8cf0e7f3b0ace1b51dcda89e76d372233514f324e00d64c6b899c0e&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">salt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;a2b4e1c8f0d3e9a7d5e6b0c8a7e4d2f9a2b4e1c8f0d3e9a7d5e6b0c8a7e4d2f9&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">role</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;ROLE_PEER&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;ACTIVE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">phoneNumber</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;+81123456789&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">firstName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Alice&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">lastName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Liddell&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">roleName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Field Technician&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerCompanyName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Sora&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerOperatingCountry</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Japan&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;MEDIUM_TELCO&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerConnectionType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Web&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">peerGroup</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Group1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">isPrivileged</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">registrationDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;2024-01-20T10:02:50.118297&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">subscriptionType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;PAID&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">subscriptionExpiryDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;2024-12-03T10:15:30.118297&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">code</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Ok&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">email</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;alice@wonder.land&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">accountId</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;alice@sora&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">authPublicKeyHex</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;8a53d297bc406c63396967388ecc2ebc8abd701d195a43bbb4751ac5a86eac1b&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">irohaPublicKeyHex</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0b458f758eeca3d7a2a64de0648c9b7dccaee146202257cd8ebaeb4690aa48b464108111d8cf0e7f3b0ace1b51dcda89e76d372233514f324e00d64c6b899c0e&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">salt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;a2b4e1c8f0d3e9a7d5e6b0c8a7e4d2f9a2b4e1c8f0d3e9a7d5e6b0c8a7e4d2f9&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">role</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;ROLE_PEER&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;ACTIVE&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">phoneNumber</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;+81123456789&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">firstName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Alice&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">lastName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Liddell&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">roleName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Field Technician&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerCompanyName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Sora&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerOperatingCountry</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Japan&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;MEDIUM_TELCO&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerConnectionType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Web&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">peerGroup</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Group1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">isPrivileged</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">registrationDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;2024-01-20T10:02:50.118297&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">subscriptionType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;PAID&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">subscriptionExpiryDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;2024-12-03T10:15:30.118297&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div></details><h3 id="responses" tabindex="-1">Responses <a class="header-anchor" href="#responses" aria-label="Permalink to &quot;Responses&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">Response Code</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>200</code></td><td>User details have been retrieved successfully.</td></tr><tr><td style="text-align:center;"><code>404</code></td><td>User/domain/account/asset not found.</td></tr><tr><td style="text-align:center;"><code>500</code></td><td>Internal server error.</td></tr></tbody></table>`,13),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{u as __pageData,C as default};