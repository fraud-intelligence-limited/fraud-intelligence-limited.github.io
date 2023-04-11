import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const d=JSON.parse('{"title":"Flagging a contribution","description":"","frontmatter":{},"headers":[],"relativePath":"api_docs/Tutorials/Flagging_a_contribution.md"}'),o={name:"api_docs/Tutorials/Flagging_a_contribution.md"},p=l(`<h1 id="flagging-a-contribution" tabindex="-1">Flagging a contribution <a class="header-anchor" href="#flagging-a-contribution" aria-label="Permalink to &quot;Flagging a contribution&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Note</p><p>A peer account must be authorized for this operation to succeed. <em>See <a href="./Authorizing_an_account.html">Authorizing an account</a>.</em></p></div><p>To flag a contribution, perform the following steps:</p><ol><li><p>Request to flag a contribution:</p><ul><li>Send a <code>POST</code> request to the <br><code>/data/api/v1/contribution-management/contribution/{contributionID}</code> endpoint, where <code>{contributionID}</code> is a range of <code>id</code> values (Fraud identifiers).</li></ul><details class="details custom-block"><summary>Ouput structure</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                  </span><span style="color:#676E95;font-style:italic;">//integer($int32)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">assetIds</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">definitionId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MPtVi@4\`V}YI~WtYc~BK(2!E_Z^pvG6ch{ycg^usDlMu&gt;UAhwI_:C/&gt;B:D#$=*]3{;-,</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">,%t</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">vB5EK:3hGa+Y7p&amp;mBS6xx2O&gt;@?V_Pg</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">B,{B!PC;\`&amp;N+&gt;Z3{edxQkY!##*RDF!%/w-Z2]_:tO</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">accountId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">V)60Rw</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">;qse6jLG|T+ij\`0D.sy91[eWW=vO6mYF@jI&lt;741{%FDj(&lt;s</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">[gh_\`XWz?jOu;(+kJ/(&#39;</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">\`b_him2G5N:@{T|db~)X@TJ6rYj&gt;Q_?&gt;,-9l&#39;M</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">{;Pi</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          ]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>Ouput example</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OK</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ok</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">assetDefinitionId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1-127.0.0.2_1666194511450#contribution</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">contribution</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1-127.0.0.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">fraudType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IPFraud</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">origination</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">destination</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">expiryDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1694775553</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">fraudStatus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">confidenceIndex</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">   </span></span>
<span class="line"><span style="color:#F07178;">      ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><div class="tip custom-block"><p class="custom-block-title">Note</p><p>If the <code>{contributionID}</code> corresponds to a phone number or an IP address, it can be represented as a single value.</p></div></li><li><p>Assemble a contribution flag:</p><ul><li>Send a <code>PATCH</code> request to the <br> <code>/data/api/v1/contribution-manager/contribution/flag/assemble</code> endpoint with the same values for the <code>definitionId</code> field that were used as <code>{contributionID}</code> in <em><strong>Step 1</strong></em>.</li></ul><details class="details custom-block"><summary>Input structure</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assetIds</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">definitionId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CTgO1z^skW@4eO}rujd|p#a~xL05I</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">IQlj/1.DMmRm#+CBw*t*s-krya74z@sDB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">accountId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RJ03f{&amp;m&#39;wUhZmJ,AA~ccwomw(Ger^cV^^Zw(0i2I:^yx@#AKb$Flp/U&lt;p1)X8kPOkQRtq4!2)VrbFM1}(=]f~=E7U_!</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">kn-/hCxGaL(!bfF)1#&#39;OSuV(D@xL&#39;ijOE[</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">)a*TjU51%4</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>Input example</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assetIds</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">definitionId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1-127.0.0.2_1666194511450#contribution</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">accountId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">qa@qa</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>Output structure</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                  </span><span style="color:#676E95;font-style:italic;">//integer($int32)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>Output example</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OK</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ok</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">someData</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details></li><li><p>Sign the <code>someData</code> string (see <em><a href="./Signing_transactions.html">Signing transactions</a></em>).</p></li><li><p>Submit the contribution flag you assembled and signed in <em><strong>steps 2 and 3:</strong></em></p><ul><li>Send a <code>PATCH</code> request to the <code>/data/api/v1/contribution-management/contribution/flag</code> endpoint with the signed <code>someData</code> string in the body of the request.</li></ul><details class="details custom-block"><summary>Input structure</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>Input example</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    someData</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>Output structure</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                  </span><span style="color:#676E95;font-style:italic;">//integer($int32)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>Output example</summary><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OK</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ok</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details></li></ol><h3 id="expected-result" tabindex="-1">Expected result <a class="header-anchor" href="#expected-result" aria-label="Permalink to &quot;Expected result&quot;">​</a></h3><p>The contribution’s <code>fraudStatus</code> value is set to <code>Flagged</code>.</p>`,6),t=[p];function e(c,r,F,D,y,i){return n(),a("div",null,t)}const q=s(o,[["render",e]]);export{d as __pageData,q as default};