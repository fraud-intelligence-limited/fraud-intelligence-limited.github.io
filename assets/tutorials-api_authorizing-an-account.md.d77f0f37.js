import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.c4d6cd72.js";const h=JSON.parse('{"title":"Authorizing an account","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials-api/authorizing-an-account.md","filePath":"tutorials-api/authorizing-an-account.md"}'),e={name:"tutorials-api/authorizing-an-account.md"},p=l(`<h1 id="authorizing-an-account" tabindex="-1">Authorizing an account <a class="header-anchor" href="#authorizing-an-account" aria-label="Permalink to &quot;Authorizing an account&quot;">​</a></h1><p>To authorize an account, send the following request:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wAJSd" id="tab-atq78n7" checked="checked"><label for="tab-atq78n7">Request</label><input type="radio" name="group-wAJSd" id="tab-GZYILu0"><label for="tab-GZYILu0">Input structure</label><input type="radio" name="group-wAJSd" id="tab-2QVBlOn"><label for="tab-2QVBlOn">Input example</label></div><div class="blocks"><div class="language-http vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> /auth/api/v1/authentication-management/session</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> /auth/api/v1/authentication-management/session</span></span></code></pre></div><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">email</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//The user’s email address</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">signature</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//The signature of the user’s email address encoded as Hex</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">authPublicKeyHex</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">//The</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Authorization&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">pair</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">encoded</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">Hex</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">email</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//The user’s email address</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">signature</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//The signature of the user’s email address encoded as Hex</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">authPublicKeyHex</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">//The</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">public</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">key</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">of</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Authorization&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">key</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">pair</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">encoded</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">as</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">Hex</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">email</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;alice@mail.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">signature</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0b458f758eeca3d7a2a64de0648c9b7dccaee146202257cd8ebaeb4690aa48b464108111d8cf0e7f3b0ace1b51dcda89e76d372233514f324e00d64c6b899c0e&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">authPublicKeyHex</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;8a53d297bc406c63396967388ecc2ebc8abd701d195a43bbb4751ac5a86eac1b&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">email</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;alice@mail.com&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">signature</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0b458f758eeca3d7a2a64de0648c9b7dccaee146202257cd8ebaeb4690aa48b464108111d8cf0e7f3b0ace1b51dcda89e76d372233514f324e00d64c6b899c0e&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">authPublicKeyHex</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;8a53d297bc406c63396967388ecc2ebc8abd701d195a43bbb4751ac5a86eac1b&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>For instructions on how to generate the <code>signature</code> string, see <a href="/tutorials-api/signing-user-email-addresses.html">Signing user email addresses</a>.</p><p>The <code>authPublicKeyHex</code> string is taken from the user&#39;s <strong>Authorization</strong> key pair on the FIB Web App <strong>Profile</strong> screen. For details, see <a href="./../overview/web-interface.html#akp">Web App UI: &#39;Authorization&#39; key pair</a>.</p></div><h3 id="expected-result" tabindex="-1">Expected result <a class="header-anchor" href="#expected-result" aria-label="Permalink to &quot;Expected result&quot;">​</a></h3><p>If authorization is successful, a response with the following JSON web tokens is generated:</p><table><thead><tr><th>Field</th><th>Value Type</th><th>Description</th></tr></thead><tbody><tr><td><code>accessToken</code></td><td><code>string</code></td><td>The access token, which is later used in headers of other requests as a bearer token.</td></tr><tr><td><code>refreshToken</code></td><td><code>string</code></td><td>The refresh token.</td></tr><tr><td><code>expirationTime</code></td><td><code>integer($int64)</code></td><td>The exact time until which the event is considered relevant (ISO 8601: <code>YYYY-MM-DDTHH:MM:SSZ</code>) in seconds).</td></tr></tbody></table><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Jtpsz" id="tab-wiav6aL" checked="checked"><label for="tab-wiav6aL">Output structure</label><input type="radio" name="group-Jtpsz" id="tab-O3sFlG6"><label for="tab-O3sFlG6">Output example</label></div><div class="blocks"><div class="language-json5 vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">integer($int</span><span style="color:#79B8FF;">32</span><span style="color:#FDAEB7;font-style:italic;">)</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">message</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">accessToken</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">refreshToken</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">expirationTime</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">integer($int</span><span style="color:#79B8FF;">64</span><span style="color:#FDAEB7;font-style:italic;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">code</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">integer($int</span><span style="color:#005CC5;">32</span><span style="color:#B31D28;font-style:italic;">)</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">message</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">accessToken</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">refreshToken</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">expirationTime</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">integer($int</span><span style="color:#005CC5;">64</span><span style="color:#B31D28;font-style:italic;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;OK&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">message</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;User authorization has been successful.&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">accessToken</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJhY2MiOiJhbGljZUB3b25kZXJsYW5kIiwic3ViIjoiYWxpY2VAbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9QRUVSIiwiZXhwIjoxNzAzMTg3NDEyLCJqdGkiOiIwNjgzM2FlZi03ZDljLTQ2MTUtYTU4YS02YjYxZWZkM2FhNjEifQ.HvrukWtcA7nz5rbxWiklJOjnv4X7jaAQ7piJaxqlW5rvUv52rClqYYHSn9F-P4u6pKNlJSpiiiH0GnynXsL7CQ&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">refreshToken</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJzdWIiOiJhbGljZUBtYWlsLmNvbSIsImFjanRpIjoiMDY4MzNhZWYtN2Q5Yy00NjE1LWE1OGEtNmI2MWVmZDNhYTYxIiwiZXhwIjoxNzAzMjczNTEyLCJqdGkiOiJhY2NkYWUzNS00ODA1LTQ5NmQtYTBiZC02Y2Y4OGI3OTBkYjkifQ.rCrbFnF5axwixq4wwURZdu_DFwFlOil9RFYkmqlLYVPoU1UpN8PlWC8Kg7QBvA-eJYVzb8yKgQ0GiIAITe3ADA&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">expirationTime</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">code</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;OK&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">message</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;User authorization has been successful.&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">accessToken</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJhY2MiOiJhbGljZUB3b25kZXJsYW5kIiwic3ViIjoiYWxpY2VAbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9QRUVSIiwiZXhwIjoxNzAzMTg3NDEyLCJqdGkiOiIwNjgzM2FlZi03ZDljLTQ2MTUtYTU4YS02YjYxZWZkM2FhNjEifQ.HvrukWtcA7nz5rbxWiklJOjnv4X7jaAQ7piJaxqlW5rvUv52rClqYYHSn9F-P4u6pKNlJSpiiiH0GnynXsL7CQ&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">refreshToken</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJzdWIiOiJhbGljZUBtYWlsLmNvbSIsImFjanRpIjoiMDY4MzNhZWYtN2Q5Yy00NjE1LWE1OGEtNmI2MWVmZDNhYTYxIiwiZXhwIjoxNzAzMjczNTEyLCJqdGkiOiJhY2NkYWUzNS00ODA1LTQ5NmQtYTBiZC02Y2Y4OGI3OTBkYjkifQ.rCrbFnF5axwixq4wwURZdu_DFwFlOil9RFYkmqlLYVPoU1UpN8PlWC8Kg7QBvA-eJYVzb8yKgQ0GiIAITe3ADA&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">expirationTime</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">300</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>If authorization is unsuccessful, refer to <a href="./../api-specification/auth-controller/authorizing-a-user-in-the-system.html#responses">API Specification &gt; Authorizing a user in the system: Responses</a> for a list of possible reasons.</p>`,9),o=[p];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
