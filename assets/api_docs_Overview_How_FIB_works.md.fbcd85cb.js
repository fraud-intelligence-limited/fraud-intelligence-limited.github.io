import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"How FIB works","description":"","frontmatter":{},"headers":[],"relativePath":"api_docs/Overview/How_FIB_works.md"}'),n={name:"api_docs/Overview/How_FIB_works.md"},o=r('<h1 id="how-fib-works" tabindex="-1">How FIB works <a class="header-anchor" href="#how-fib-works" aria-label="Permalink to &quot;How FIB works&quot;">​</a></h1><p>FIB is a decentralized network that enables the secure sharing and analysis of data related to <a href="./Fraud_events.html"><em>fraud events</em></a>.</p><p>Authorized participants—<em><strong>peers</strong></em>—can submit information about suspected or confirmed fraudulent activities to the FIB network, where it is recorded on the blockchain. The submitted information can include details such as origin identifiers (e.g., IP addresses), the type of event, the exact time the event occurred, etc.</p><p>By sharing this information and collaborating with other peers in the network, contributors can help prevent future fraudulent activities. In return for their contributions, peers can earn rewards in the form of credit tokens.</p><h2 id="data-on-the-network" tabindex="-1">Data on the network <a class="header-anchor" href="#data-on-the-network" aria-label="Permalink to &quot;Data on the network&quot;">​</a></h2><p>The FIB network serves as a secure database of various <a href="./Fraud_events.html"><em>fraud events</em></a> that are stored on the blockchain as <a href="./Contributions.html"><em>contributions</em></a>.</p><p>Authorized peers can upload and download these contributions.</p><p>Contributions uploaded by peers allow for the continuous expansion and updating of the FIB network. This facilitates information sharing and enhances the overall accuracy of data stored on the network.</p><p>The contributions on the network can also be download by peers to update their own records and stay informed about the latest fraudulent activities. This process helps organizations remain vigilant and prevent fraudulent activities from occurring within their own systems.</p><p>For more information, see <a href="./Tokenomics.html#uploading-fraud-events"><em>Uploading contributions</em></a> and <a href="./Tokenomics.html#downloading-fraud-events"><em>Downloading contributions</em></a>.</p><h2 id="network-security" tabindex="-1">Network security <a class="header-anchor" href="#network-security" aria-label="Permalink to &quot;Network security&quot;">​</a></h2><p>The security of the FIB network is crucial to ensure the safety of its users and transactions. To achieve this, the network uses scalable backend services serving requests to create and send transactions to a blockchain node securely.</p><p>The network consists of multiple nodes, which increases its resilience and availability, potentially improving its ability to recover from disruptions.</p><p>The security of the FIB network also relies on the use of key pairs and digital signatures.</p><p>There are two types of key pairs that are required to interact with the FIB API backend:</p><ol><li><strong>Authentication key pair</strong> — a deterministic <a href="https://en.wikipedia.org/wiki/EdDSA" target="_blank" rel="noreferrer"><em>Ed25519</em></a> key pair generated from the user’s <strong>email</strong> and <strong>password</strong>.</li><li><strong>Iroha 2 key pair</strong> — a deterministic <a href="https://en.wikipedia.org/wiki/EdDSA" target="_blank" rel="noreferrer"><em>Ed25519</em></a> key pair generated from the user’s <strong>email</strong>, <strong>password</strong>, and a random <strong>salt</strong> value.</li></ol><p>When a user creates a transaction on the FIB network, they sign it with their private key, which can then be verified by anyone using their public key. This process ensures that only the intended user is authorized to sign their transactions.</p><p>Additionally, signing transactions with key pairs can enhance the privacy and confidentiality of the user&#39;s information on the network. Overall, the use of key pairs and digital signatures is a crucial aspect of the FIB network&#39;s security infrastructure.</p><p>For more information, see <em><a href="./../Tutorials/Generating_key_pairs.html">Generating key pairs</a></em> and <em><a href="./../Tutorials/Signing_transactions.html">Signing transactions</a></em>.</p>',19),i=[o];function s(h,c,d,l,u,p){return a(),t("div",null,i)}const w=e(n,[["render",s]]);export{m as __pageData,w as default};