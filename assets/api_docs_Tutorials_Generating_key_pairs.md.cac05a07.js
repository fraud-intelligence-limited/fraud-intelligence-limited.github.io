import{_ as e,c as a,o as r,N as t}from"./chunks/framework.0799945b.js";const k=JSON.parse('{"title":"Generating key pairs","description":"","frontmatter":{},"headers":[],"relativePath":"api_docs/Tutorials/Generating_key_pairs.md"}'),n={name:"api_docs/Tutorials/Generating_key_pairs.md"},i=t('<h1 id="generating-key-pairs" tabindex="-1">Generating key pairs <a class="header-anchor" href="#generating-key-pairs" aria-label="Permalink to &quot;Generating key pairs&quot;">​</a></h1><h3 id="generating-authentication-key-pair" tabindex="-1">Generating authentication key pair <a class="header-anchor" href="#generating-authentication-key-pair" aria-label="Permalink to &quot;Generating authentication key pair&quot;">​</a></h3><p>To generate an <strong>authentication key pair</strong>, perform the following steps:</p><ol><li>Create a <a href="https://en.wikipedia.org/wiki/BLAKE_(hash_function)" target="_blank" rel="noreferrer">Blake2b-256 hash</a> from a user <strong>email</strong> and <strong>password</strong>.</li><li>Use symmetric encryption to generate a random <strong>seed</strong> based on the <strong>generated hash</strong> and user <strong>password</strong>. We recommend using <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard" target="_blank" rel="noreferrer">AES-256</a> with GCM or CCM secure mode.</li><li>Generate an authentication key-pair from the <strong>generated seed</strong>.</li></ol><h3 id="generating-iroha-2-key-pair" tabindex="-1">Generating Iroha 2 key pair <a class="header-anchor" href="#generating-iroha-2-key-pair" aria-label="Permalink to &quot;Generating Iroha 2 key pair&quot;">​</a></h3><p>To generate an <strong>Iroha 2 key pair</strong>, perform the following steps:</p><ol><li><a href="./../API_Specification/auth-controller/Retrieving_salt_values.html">Request a salt value</a>, which is a random piece of bytes only known to the network owners.</li><li>Create a <a href="https://en.wikipedia.org/wiki/BLAKE_(hash_function)" target="_blank" rel="noreferrer">Blake2b-256 hash</a> from a user email and password.</li><li>Generate a <strong>blockchain seed</strong> from the <strong>generated hash</strong> and <strong>salt</strong>.</li><li>Generate an Iroha2 key-pair from the <strong>blockchain seed</strong>.</li></ol>',7),o=[i];function s(h,l,g,p,c,d){return r(),a("div",null,o)}const f=e(n,[["render",s]]);export{k as __pageData,f as default};
