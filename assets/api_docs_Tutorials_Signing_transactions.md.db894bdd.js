import{_ as e,c as t,o as a,N as n}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"Signing transactions","description":"","frontmatter":{},"headers":[],"relativePath":"api_docs/Tutorials/Signing_transactions.md"}'),i={name:"api_docs/Tutorials/Signing_transactions.md"},o=n('<h1 id="signing-transactions" tabindex="-1">Signing transactions <a class="header-anchor" href="#signing-transactions" aria-label="Permalink to &quot;Signing transactions&quot;">​</a></h1><p>Every operation that has an <code>…/assemble</code> mirroring endpoint operations, such as <a href="./Flagging_a_contribution.html"><em>flagging a contribution</em></a>, requires a transaction to be signed as a Hex using the Iroha 2 key-pair before sending it to the backend.</p><p>To sign a transaction, you need to provide the following input data: the public key and private key of the <a href="https://github.com/soramitsu/orillion-docs/blob/develop/manual/manual.rst#iroha2-key-pair" target="_blank" rel="noreferrer"><em>Iroha 2 key pair</em></a>, and an unsigned transaction.</p><p>When you sign a transaction, the expected output is a transaction content, and the signed result is a string in the Hex format. You can use <a href="./../../#what-is-iroha-2"><em>any Iroha SDK available</em></a> to sign a transaction.</p><p>The following example shows how to sign a transaction using the Kotlin/Java Iroha SDK:</p><ol><li>Read the hex strings of the public and private keys.</li><li>Use the <code>keyPairFromHex</code> method to obtain a <code>keyPair</code> object.</li><li>Decode the transaction using the <code>VersionedSignedTransaction.decode(&lt;your transaction&#39;s hex string&gt;)</code> method.</li><li>Sign the decoded transaction using the <code>.appendSignatures(keyPair)</code> method.</li><li>Encode the signed transaction using the <code>VersionedSignedTransaction.encode(&lt;transaction object&gt;)</code></li><li>Use the resulting encoded transaction object as the body for certain requests <br> (e.g., see <em><a href="./Submitting_a_contribution.html">Submitting a contribution</a>, steps 2 and 3</em>).</li></ol><div class="tip custom-block"><p class="custom-block-title">Note</p><p>The exact implementation may vary depending on the specific SDK or programming language being used.<br> However, the overall sequence of events should be the same: recover the <code>keyPair</code> object from the provided hex strings, get the transaction hex, decode it, sign it, and then encode it.</p></div>',7),s=[o];function r(c,d,h,l,g,p){return a(),t("div",null,s)}const _=e(i,[["render",r]]);export{m as __pageData,_ as default};