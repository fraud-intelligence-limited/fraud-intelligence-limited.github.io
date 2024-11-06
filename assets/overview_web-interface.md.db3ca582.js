import{_ as a,o as t,c as e,Q as i}from"./chunks/framework.c4d6cd72.js";const o="/assets/s-dashboard.f72359af.png",n="/assets/s-profile.73c24643.png",m=JSON.parse('{"title":"Web App UI","description":"","frontmatter":{},"headers":[],"relativePath":"overview/web-interface.md","filePath":"overview/web-interface.md"}'),r={name:"overview/web-interface.md"},l=i('<h1 id="web-app-ui" tabindex="-1">Web App UI <a class="header-anchor" href="#web-app-ui" aria-label="Permalink to &quot;Web App UI&quot;">​</a></h1><p>Registered FIB peers and users can log in to the <a href="https://app.fraudintelligencelimited.com" target="_blank" rel="noreferrer">FIB Web App</a> using their credentials.</p><h2 id="dashboard" tabindex="-1">Dashboard <a class="header-anchor" href="#dashboard" aria-label="Permalink to &quot;Dashboard&quot;">​</a></h2><p>The main screen that appears once an FIB user logs in to their Web App account.</p><p><img src="'+o+'" alt="&#39;Dashboard&#39; screen" data-zoomable="" class="mini"></p><h4 id="navigation" tabindex="-1">Navigation <a class="header-anchor" href="#navigation" aria-label="Permalink to &quot;Navigation&quot;">​</a></h4><ul><li>Selecting the <strong>Profile</strong> button with the authorized user&#39;s first and last names takes them to the <a href="#profile">Profile</a> screen.</li><li>Selecting the <strong>Sign out</strong> button indicated by a door icon logs them out of the Web App.</li></ul><p>On this screen, users can see the following tabs:</p><h3 id="download" tabindex="-1">Download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;Download&quot;">​</a></h3><p>This tab displays the following elements:</p><ul><li><strong>New data entries</strong> meter — displays the total amount of fraud events that have been contributed to the network and not yet downloaded by the signed in user.</li><li><strong>Download fraud data</strong> button — opens the <strong>Download fraud data</strong> screen.</li></ul><p>See the following related tutorial:</p><ul><li><a href="./../tutorials-web/downloading-fraud-data.html">Downloading fraud data</a></li></ul><h3 id="upload" tabindex="-1">Upload <a class="header-anchor" href="#upload" aria-label="Permalink to &quot;Upload&quot;">​</a></h3><p>This tab displays the following elements:</p><ul><li><strong>Balance</strong> meter — displays the current amount of tokens that the signed in user owns at the time of observing.</li><li><strong>Add fraud data</strong> button — opens the <strong>Add fraud data</strong> screen.</li><li><strong>Flag fraud data as &#39;False positive&#39;</strong> button — opens the <strong>Flag fraud data as False Positive</strong> screen.</li></ul><p>See the following related tutorials:</p><ul><li><a href="./../tutorials-web/uploading-fraud-data.html">Uploading fraud data</a></li><li><a href="./../tutorials-web/flagging-fraud-data.html">Flagging fraud data</a></li></ul><h2 id="profile" tabindex="-1">Profile <a class="header-anchor" href="#profile" aria-label="Permalink to &quot;Profile&quot;">​</a></h2><p>The screen that displays the detailed information about the authorized account.</p><p><img src="'+n+'" alt="&#39;Profile&#39; screen" data-zoomable="" class="mini"></p><h4 id="navigation-1" tabindex="-1">Navigation <a class="header-anchor" href="#navigation-1" aria-label="Permalink to &quot;Navigation&quot;">​</a></h4><ul><li>Selecting the <strong>Dashboard</strong> button takes the user to the <a href="#dashboard">Dashboard</a> screen.</li><li>Selecting the <strong>Sign out</strong> button indicated by a door icon logs them out of the Web App.</li></ul><p>On this screen, users can see the following information about their account:</p><h3 id="about" tabindex="-1">About <a class="header-anchor" href="#about" aria-label="Permalink to &quot;About&quot;">​</a></h3><p>This area displays the following information about the authorized account:</p><ul><li>Account activation status;</li><li>First and last names;</li><li>Country of operation;</li><li>Phone number;</li><li>Email address.</li></ul><h3 id="two-factor-authentication-email" tabindex="-1">Two-Factor Authentication (email) <a class="header-anchor" href="#two-factor-authentication-email" aria-label="Permalink to &quot;Two-Factor Authentication (email)&quot;">​</a></h3><p>This toggle switch allows you to enable/disable the Two-Factor Authentication (2FA) on the authorized account.</p><p>See the following related tutorial:</p><ul><li><a href="./../getting-started/registering-an-account.html#setting-2fa">Setting 2FA</a></li></ul><h3 id="balance" tabindex="-1">Balance <a class="header-anchor" href="#balance" aria-label="Permalink to &quot;Balance&quot;">​</a></h3><p>This area displays the current token balance on the authorized account, the current status of the <a href="./tokenomics.html#monthly-reward-limit">monthly reward limit</a>, as well as the timer until the next limit reset.</p><h3 id="your-plan" tabindex="-1">Your plan <a class="header-anchor" href="#your-plan" aria-label="Permalink to &quot;Your plan&quot;">​</a></h3><p>This area displays the current subscription plan on the authorized account.</p><p>To change your subscription plan, you may contact us at <a href="mailto:support@fraudintelligencelimited.com" target="_blank" rel="noreferrer">support@fraudintelligencelimited.com</a>.</p><h3 id="akp" tabindex="-1">&#39;Authorization&#39; key pair <a class="header-anchor" href="#akp" aria-label="Permalink to &quot;&#39;Authorization&#39; key pair {#akp}&quot;">​</a></h3><p>Displays public and private keys of the <strong>Authorization</strong> key pair. These keys are unique for every user on the FIB network and are generated automatically at the time of account registration.</p><p>The public key—<code>authPublicKeyHex</code>—of this key pair is used for the following API operation:</p><ul><li><a href="./../api-specification/auth-controller/authorizing-a-user-in-the-system.html">Authorizing a user in the system</a></li></ul><p>Also see the following related tutorials:</p><ul><li><a href="./../tutorials-api/authorizing-an-account.html">Authorizing an account</a></li><li><a href="./../tutorials-api/signing-user-email-addresses.html">Signing user email addresses</a></li></ul><h3 id="bkp" tabindex="-1">&#39;Blockchain&#39; key pair <a class="header-anchor" href="#bkp" aria-label="Permalink to &quot;&#39;Blockchain&#39; key pair {#bkp}&quot;">​</a></h3><p>Displays public and private keys of the <strong>Blockchain</strong> key pair. These keys are unique for every user on the FIB network and are generated automatically at the time of account registration.</p><p>These keys are used for the following API operations:</p><ul><li><a href="./../api-specification/contribution-controller/submitting-a-contribution.html">Submitting a contribution</a></li><li><a href="./../api-specification/contribution-controller/submitting-a-contribution-flag.html">Submitting a contribution flag</a></li></ul><p>Also see the following related tutorials:</p><ul><li><a href="./../tutorials-api/signing-transactions.html">Signing transactions</a></li><li><a href="./../tutorials-api/submitting-a-contribution.html">Submitting a contribution</a></li><li><a href="./../tutorials-api/flagging-a-contribution.html">Flagging a contribution</a></li></ul>',48),s=[l];function h(u,d,c,p,g,f){return t(),e("div",null,s)}const w=a(r,[["render",h]]);export{m as __pageData,w as default};
