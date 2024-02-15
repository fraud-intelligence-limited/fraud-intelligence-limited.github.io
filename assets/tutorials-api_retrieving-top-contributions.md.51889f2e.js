import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.c4d6cd72.js";const d=JSON.parse('{"title":"Retrieving top contributions","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials-api/retrieving-top-contributions.md","filePath":"tutorials-api/retrieving-top-contributions.md"}'),l={name:"tutorials-api/retrieving-top-contributions.md"},o=p(`<h1 id="retrieving-top-contributions" tabindex="-1">Retrieving top contributions <a class="header-anchor" href="#retrieving-top-contributions" aria-label="Permalink to &quot;Retrieving top contributions&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Note</p><p>A peer account must be authorized for this operation to succeed. <em>See <a href="./authorizing-an-account.html">Authorizing an account</a></em>.</p></div><p>When downloading fraud events—retrieving contributions—it is possible to filter the results generated in the response in various ways, using the request parameters.</p><p>Request parameters can be used in any combination to tailor response results to your specific needs.</p><p>Since request parameters are optional, specifying no parameters when sending a request will result in a response containing top contributions from the entire ledger.</p><p>For more information, see <a href="/api-specification/contribution-controller/retrieving-top-contributions.html">Retrieving top contributions &gt; Parameters</a>.</p><p>To retrieve top contributions, send the following request:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Y0Ze9" id="tab-EcVlpsE" checked="checked"><label for="tab-EcVlpsE">Input structure</label><input type="radio" name="group-Y0Ze9" id="tab-8xBygz3"><label for="tab-8xBygz3">Input examples</label></div><div class="blocks"><div class="language-http vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /api/v1/contribution-management/contribution?size=&#39;&#39;&amp;from=&#39;&#39;&amp;to=&#39;&#39;&amp;ft=&#39;&#39;&amp;org=&#39;&#39;&amp;self-only=&#39;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /api/v1/contribution-management/contribution?size=&#39;&#39;&amp;from=&#39;&#39;&amp;to=&#39;&#39;&amp;ft=&#39;&#39;&amp;org=&#39;&#39;&amp;self-only=&#39;&#39;</span></span></code></pre></div><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// size</span></span>
<span class="line"><span style="color:#E1E4E8;">/api/v1/contribution-management/contribution?size=10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// from &amp; to</span></span>
<span class="line"><span style="color:#E1E4E8;">/api/v1/contribution-management/contribution?from=0&amp;to=1680089219</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ft</span></span>
<span class="line"><span style="color:#E1E4E8;">/api/v1/contribution-management/contribution?ft=wangiri</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// org</span></span>
<span class="line"><span style="color:#E1E4E8;">/api/v1/contribution-management/contribution?org=US</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// self-only</span></span>
<span class="line"><span style="color:#E1E4E8;">/api/v1/contribution-management/contribution?self-only=true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fetch-mode</span></span>
<span class="line"><span style="color:#E1E4E8;">/api/v1/contribution-management/contribution?fetch-mode=new</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// combination</span></span>
<span class="line"><span style="color:#E1E4E8;">/api/v1/contribution-management/contribution?size=2&amp;ft=StolenDevice&amp;org=US&amp;self-only=true&amp;fetch-mode=new</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// size</span></span>
<span class="line"><span style="color:#24292E;">/api/v1/contribution-management/contribution?size=10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// from &amp; to</span></span>
<span class="line"><span style="color:#24292E;">/api/v1/contribution-management/contribution?from=0&amp;to=1680089219</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ft</span></span>
<span class="line"><span style="color:#24292E;">/api/v1/contribution-management/contribution?ft=wangiri</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// org</span></span>
<span class="line"><span style="color:#24292E;">/api/v1/contribution-management/contribution?org=US</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// self-only</span></span>
<span class="line"><span style="color:#24292E;">/api/v1/contribution-management/contribution?self-only=true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fetch-mode</span></span>
<span class="line"><span style="color:#24292E;">/api/v1/contribution-management/contribution?fetch-mode=new</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// combination</span></span>
<span class="line"><span style="color:#24292E;">/api/v1/contribution-management/contribution?size=2&amp;ft=StolenDevice&amp;org=US&amp;self-only=true&amp;fetch-mode=new</span></span></code></pre></div></div></div><h3 id="expected-result" tabindex="-1">Expected result <a class="header-anchor" href="#expected-result" aria-label="Permalink to &quot;Expected result&quot;">​</a></h3><p>The response to the <code>GET</code> request contains a list of the top contributions, filtered according to the parameters set in the request, if any.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-90NhM" id="tab-_heYQ8J" checked="checked"><label for="tab-_heYQ8J">Output structure</label><input type="radio" name="group-90NhM" id="tab-zDh_J_u"><label for="tab-zDh_J_u">Output example</label></div><div class="blocks"><div class="language-json5 vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//integer($int32)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">message</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">data</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">fraudType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Wangiri&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//Could be one of the following: Wangiri, IRSF, StolenDevice, IPFraud, SMSA2P</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">origination</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">destination</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">expiryDate</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//integer($int32)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">fraudStatus</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string(enum)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//Could be one of the following: Active, Expired, Flagged</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">confidenceIndex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//number($double)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">isPremium</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">peerId</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">premium</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">//boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">code</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//integer($int32)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">message</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">data</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">fraudType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Wangiri&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//Could be one of the following: Wangiri, IRSF, StolenDevice, IPFraud, SMSA2P</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">origination</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">destination</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">expiryDate</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//integer($int32)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">fraudStatus</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string(enum)&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//Could be one of the following: Active, Expired, Flagged</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">confidenceIndex</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//number($double)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">isPremium</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//boolean</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">peerId</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">premium</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">//boolean</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Ok&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">data</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;+14155552671-+14155552981&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">fraudType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;StolenDevice&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">origination</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;US&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">destination</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;FI&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">expiryDate</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1666195955</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">fraudStatus</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Expired&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">confidenceIndex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">isPremium</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">peerId</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">premium</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;127.0.0.1-127.0.0.2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">fraudType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;StolenDevice&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">origination</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;US&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">destination</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;SE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">expiryDate</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1694775553</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">fraudStatus</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Flagged&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">confidenceIndex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">isPremium</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">peerId</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">premium</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">code</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Ok&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">data</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;+14155552671-+14155552981&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">fraudType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;StolenDevice&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">origination</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;US&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">destination</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;FI&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">expiryDate</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1666195955</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">fraudStatus</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Expired&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">confidenceIndex</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">isPremium</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">peerId</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">premium</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;127.0.0.1-127.0.0.2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">fraudType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;StolenDevice&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">origination</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;US&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">destination</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;SE&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">expiryDate</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1694775553</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">fraudStatus</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Flagged&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">confidenceIndex</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">isPremium</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">peerId</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">premium</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,11),e=[o];function t(c,r,E,i,y,F){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{d as __pageData,m as default};
