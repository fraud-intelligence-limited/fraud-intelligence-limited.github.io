import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.c4d6cd72.js";const F=JSON.parse('{"title":"Signing user email addresses","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials-api/signing-user-email-addresses.md","filePath":"tutorials-api/signing-user-email-addresses.md"}'),l={name:"tutorials-api/signing-user-email-addresses.md"},o=p(`<h1 id="signing-user-email-addresses" tabindex="-1">Signing user email addresses <a class="header-anchor" href="#signing-user-email-addresses" aria-label="Permalink to &quot;Signing user email addresses&quot;">​</a></h1><p>Every API request to <a href="./../api-specification/auth-controller/authorizing-a-user-in-the-system.html">authorize a user in the system</a> requires a signature of the user&#39;s email address.</p><p>The exact implementation to your system may vary depending on the specific SDK or programming language being used. However, the overall sequence of events to sign a user email address should be the following:</p><ol><li>Create a <code>keyPair</code> object from the public and private keys of the user&#39;s <a href="./../overview/web-interface.html#authorization-key-pair"><strong>Authorization</strong> key pair</a>.</li><li>Obtain a <code>signature</code> of the user&#39;s email address.</li><li>Encode the <code>signature</code> as a Hex string.</li></ol><p>The resulting encoded <code>signature</code> Hex string can be used as a part of the body for requests to the following endpoint:</p><blockquote><p><a href="./../api-specification/auth-controller/authorizing-a-user-in-the-system.html">Authorizing a user in the system</a></p></blockquote><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> /auth/api/v1/authentication-management/session</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> /auth/api/v1/authentication-management/session</span></span></code></pre></div><h2 id="iroha-sdk-references" tabindex="-1">Iroha SDK references <a class="header-anchor" href="#iroha-sdk-references" aria-label="Permalink to &quot;Iroha SDK references&quot;">​</a></h2><p>You can use <a href="./../#what-is-iroha-2">any Iroha SDK available</a> to sign a user&#39;s email address. Below are references on how to sign a transaction using the following Iroha SDKs:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-mx9RF" id="tab-f_nNx_U" checked="checked"><label for="tab-f_nNx_U">Iroha Java/Kotlin SDK</label><input type="radio" name="group-mx9RF" id="tab-4SqmXV3"><label for="tab-4SqmXV3">Iroha JavaScript SDK</label><input type="radio" name="group-mx9RF" id="tab-SClJXsT"><label for="tab-SClJXsT">Iroha Python SDK</label></div><div class="blocks"><div class="language-kotlin vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Your package value</span></span>
<span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">something</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Import dependencies</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jp.co.soramitsu.iroha2.keyPairFromHex</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jp.co.soramitsu.iroha2.sign</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jp.co.soramitsu.iroha2.toHex</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SimpleSigner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">fun</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(args: </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">&gt;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (args.size </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Specify public_key, private_key and text to sign&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// The public key of the user&#39;s &#39;Authorization&#39; key pair</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">val</span><span style="color:#E1E4E8;"> publicKey </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> args[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// The private key of the user&#39;s &#39;Authorization&#39; key pair</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">val</span><span style="color:#E1E4E8;"> privateKey </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> args[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// The user&#39;s email address</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">val</span><span style="color:#E1E4E8;"> toSign </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> args[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Create a \`keyPair\` object from the Hex string of the public and private keys of the user&#39;s &#39;Authorization&#39; key pair</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">val</span><span style="color:#E1E4E8;"> keyPair </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">keyPairFromHex</span><span style="color:#E1E4E8;">(publicKey, privateKey)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Obtain a \`signature\` of the user&#39;s email address</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">val</span><span style="color:#E1E4E8;"> signature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keyPair.</span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sign</span><span style="color:#E1E4E8;">(toSign.</span><span style="color:#B392F0;">toByteArray</span><span style="color:#E1E4E8;">(Charsets.UTF_8)).</span><span style="color:#B392F0;">toHex</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Encode the \`signature\` as a Hex string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Signed message (Hex): </span><span style="color:#79B8FF;">$signature</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Your package value</span></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">something</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Import dependencies</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jp.co.soramitsu.iroha2.keyPairFromHex</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jp.co.soramitsu.iroha2.sign</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jp.co.soramitsu.iroha2.toHex</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SimpleSigner</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">fun</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(args: </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">String</span><span style="color:#24292E;">&gt;) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (args.size </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Specify public_key, private_key and text to sign&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// The public key of the user&#39;s &#39;Authorization&#39; key pair</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">val</span><span style="color:#24292E;"> publicKey </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// The private key of the user&#39;s &#39;Authorization&#39; key pair</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">val</span><span style="color:#24292E;"> privateKey </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// The user&#39;s email address</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">val</span><span style="color:#24292E;"> toSign </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// Create a \`keyPair\` object from the Hex string of the public and private keys of the user&#39;s &#39;Authorization&#39; key pair</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">val</span><span style="color:#24292E;"> keyPair </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">keyPairFromHex</span><span style="color:#24292E;">(publicKey, privateKey)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// Obtain a \`signature\` of the user&#39;s email address</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">val</span><span style="color:#24292E;"> signature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> keyPair.</span><span style="color:#D73A49;">private</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">sign</span><span style="color:#24292E;">(toSign.</span><span style="color:#6F42C1;">toByteArray</span><span style="color:#24292E;">(Charsets.UTF_8)).</span><span style="color:#6F42C1;">toHex</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// Encode the \`signature\` as a Hex string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Signed message (Hex): </span><span style="color:#005CC5;">$signature</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// @ts-check</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { crypto } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@iroha2/crypto-target-node&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// version: 1.1.1</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { freeScope } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@iroha2/crypto-core&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// version: 1.1.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">publicKeyHex</span><span style="color:#6A737D;"> - ed25519 pub key hex</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">privateKeyHex</span><span style="color:#6A737D;"> - ed25519 private key hex</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">email</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> - email signature hex</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createEmailSignature</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">publicKeyHex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateKeyHex</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">email</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">freeScope</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keyPair</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> crypto.KeyPair.</span><span style="color:#B392F0;">fromJSON</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      public_key: </span><span style="color:#9ECBFF;">&#39;ed0120&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> publicKeyHex,</span></span>
<span class="line"><span style="color:#E1E4E8;">      private_key: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        digest_function: </span><span style="color:#9ECBFF;">&#39;ed25519&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        payload: privateKeyHex</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hashedEmail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> crypto.Hash.</span><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TextEncoder</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(email)</span></span>
<span class="line"><span style="color:#E1E4E8;">    ).</span><span style="color:#B392F0;">bytes</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> keyPair.</span><span style="color:#B392F0;">sign</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;">, hashedEmail).</span><span style="color:#B392F0;">payload</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// example signature</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createEmailSignature</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;7fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc37fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;alice@wonderland.space&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(signature)</span></span>
<span class="line"><span style="color:#6A737D;">// =&gt; 9729e8fbcd425bfe48809cc996c9e6d3cecddf0848a51d8758582b3c84bb2caca8e41a8290018aa7064f0b9ec61d2b1a155d5e4c772bc992d918528cf6cb6308</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @ts-check</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { crypto } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@iroha2/crypto-target-node&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// version: 1.1.1</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { freeScope } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@iroha2/crypto-core&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// version: 1.1.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">publicKeyHex</span><span style="color:#6A737D;"> - ed25519 pub key hex</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">privateKeyHex</span><span style="color:#6A737D;"> - ed25519 private key hex</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">email</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> - email signature hex</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createEmailSignature</span><span style="color:#24292E;">(</span><span style="color:#E36209;">publicKeyHex</span><span style="color:#24292E;">, </span><span style="color:#E36209;">privateKeyHex</span><span style="color:#24292E;">, </span><span style="color:#E36209;">email</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">freeScope</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keyPair</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> crypto.KeyPair.</span><span style="color:#6F42C1;">fromJSON</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      public_key: </span><span style="color:#032F62;">&#39;ed0120&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> publicKeyHex,</span></span>
<span class="line"><span style="color:#24292E;">      private_key: {</span></span>
<span class="line"><span style="color:#24292E;">        digest_function: </span><span style="color:#032F62;">&#39;ed25519&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        payload: privateKeyHex</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hashedEmail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> crypto.Hash.</span><span style="color:#6F42C1;">hash</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;array&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TextEncoder</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">encode</span><span style="color:#24292E;">(email)</span></span>
<span class="line"><span style="color:#24292E;">    ).</span><span style="color:#6F42C1;">bytes</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> keyPair.</span><span style="color:#6F42C1;">sign</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;array&#39;</span><span style="color:#24292E;">, hashedEmail).</span><span style="color:#6F42C1;">payload</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hex&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// example signature</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createEmailSignature</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;7fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc37fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;alice@wonderland.space&#39;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(signature)</span></span>
<span class="line"><span style="color:#6A737D;">// =&gt; 9729e8fbcd425bfe48809cc996c9e6d3cecddf0848a51d8758582b3c84bb2caca8e41a8290018aa7064f0b9ec61d2b1a155d5e4c772bc992d918528cf6cb6308</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Import dependency</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> iroha</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Example ed25519 key pair</span></span>
<span class="line"><span style="color:#E1E4E8;">key_pair </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> iroha.KeyPair.from_json(</span><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;public_key&quot;: &quot;ed01207233BFC89DCBD68C19FDE6CE6158225298EC1131B6A130D1AEB454C1AB5183C0&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;private_key&quot;: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;digest_function&quot;: &quot;ed25519&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;payload&quot;: &quot;9ac47abf59b356e0bd7dcbbbb4dec080e302156a48ca907e47cb6aea1d32719e7233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c0&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;&quot;&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Hash the user&#39;s email address:</span></span>
<span class="line"><span style="color:#E1E4E8;">hashed_email </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> iroha.hash(</span><span style="color:#F97583;">b</span><span style="color:#9ECBFF;">&quot;email@address&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sign the user&#39;s email address:</span></span>
<span class="line"><span style="color:#E1E4E8;">signature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> key_pair.sign(</span><span style="color:#79B8FF;">bytes</span><span style="color:#E1E4E8;">(hashed_email))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Retrieve the encoded Hex string of the user&#39;s \`signature\`</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">f</span><span style="color:#9ECBFF;">&quot;Encoded signature:</span><span style="color:#79B8FF;">\\n{bytes</span><span style="color:#E1E4E8;">(signature).hex()</span><span style="color:#79B8FF;">}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Import dependency</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> iroha</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Example ed25519 key pair</span></span>
<span class="line"><span style="color:#24292E;">key_pair </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> iroha.KeyPair.from_json(</span><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;public_key&quot;: &quot;ed01207233BFC89DCBD68C19FDE6CE6158225298EC1131B6A130D1AEB454C1AB5183C0&quot;,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;private_key&quot;: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;digest_function&quot;: &quot;ed25519&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;payload&quot;: &quot;9ac47abf59b356e0bd7dcbbbb4dec080e302156a48ca907e47cb6aea1d32719e7233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c0&quot;</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">&quot;&quot;&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Hash the user&#39;s email address:</span></span>
<span class="line"><span style="color:#24292E;">hashed_email </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> iroha.hash(</span><span style="color:#D73A49;">b</span><span style="color:#032F62;">&quot;email@address&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sign the user&#39;s email address:</span></span>
<span class="line"><span style="color:#24292E;">signature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key_pair.sign(</span><span style="color:#005CC5;">bytes</span><span style="color:#24292E;">(hashed_email))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Retrieve the encoded Hex string of the user&#39;s \`signature\`</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">f</span><span style="color:#032F62;">&quot;Encoded signature:</span><span style="color:#005CC5;">\\n{bytes</span><span style="color:#24292E;">(signature).hex()</span><span style="color:#005CC5;">}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div></div></div>`,10),e=[o];function c(t,r,y,i,E,d){return a(),n("div",null,e)}const h=s(l,[["render",c]]);export{F as __pageData,h as default};
