import{_ as s,c as n,o,N as a}from"./chunks/framework.0799945b.js";const d=JSON.parse('{"title":"Requesting a contribution by ID","description":"","frontmatter":{},"headers":[],"relativePath":"api_docs/API_Specification/contribution-controller/Requesting_a_contribution_by_ID.md"}'),t={name:"api_docs/API_Specification/contribution-controller/Requesting_a_contribution_by_ID.md"},p=a(`<h1 id="requesting-a-contribution-by-id" tabindex="-1">Requesting a contribution by ID <a class="header-anchor" href="#requesting-a-contribution-by-id" aria-label="Permalink to &quot;Requesting a contribution by ID&quot;">​</a></h1><p><strong>Protocol</strong>: <code>HTTP</code></p><p><strong>Encoding</strong>: <code>JSON</code></p><p><strong>Endpoint</strong>: <code>/data/api/v1/contribution-management/contribution/{contributionID}</code></p><p><strong>Method</strong>: <code>GET</code></p><p><strong>Parameters</strong>:</p><table><thead><tr><th>Field</th><th>Value Type</th><th>Description</th></tr></thead><tbody><tr><td><code>contributionID</code></td><td><code>string(path)</code></td><td>Range of <em><a href="./../../Overview/Fraud_events.html"><code>id</code> values</a></em> (Fraud Identifiers), or a single one.</td></tr></tbody></table><p><strong>Input/request structure</strong>:</p><p>A <code>GET</code> request to the endpoint, where <code>{contributionID}</code> is a required parameter.</p><p><strong>Output/response structure</strong>:</p><details class="details custom-block"><summary>Show</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                  </span><span style="color:#676E95;font-style:italic;">//integer($int32)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">assetIds</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">definitionId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Id_range#domain</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">//IP/telephone number/IMEI</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">accountId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user@peerId</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          ]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details>`,11),e=[p];function l(c,r,i,F,D,y){return o(),n("div",null,e)}const _=s(t,[["render",l]]);export{d as __pageData,_ as default};
