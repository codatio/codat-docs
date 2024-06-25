---
title: Troubleshooting and issue resolution
sidebar_label: Resolve issues
description: Get help if you experience errors or issues when connecting to NetSuite
hide_table_of_contents: false
---

import Questions, { Question } from '@components/global/Questions';

<Questions>
  <Question
    question="How do I resolve the 'SuiteCloud not configured correctly' error?"
    answer={`
<p>If you encounter the <code>SuiteCloud not configured correctly</code> error, this means some of the SuiteCloud features that we need to connect to NetSuite haven't been enabled.</p>
<p>To resolve, click the <b>Try again</b> button and repeat the step-by-step instructions on the screen. Verify that you have selected all the features listed on-screen and clicked <b>Save</b>.</p>
<p>For a detailed configuration walkthrough and an interactive tutorial, refer to our <a href="https://docs.codat.io/smb-help-hub/integrations/netsuite/suitecloud#how-do-i-configure-suitecloud">Configure SuiteCloud</a> documentation.</p>  
    `}
  />

  <Question
    question="How do I resolve the 'Too many access tokens' error?"
    answer={`
<p>If you encounter the <code>Too many access tokens</code> error, this means your user account has reached its 25 access token limit set by NetSuite. Access tokens are identifiers used to increase overall system security.</p>
<p>To resolve, delete an existing access token you no longer require:</p> 
  <ol>
    <li>Visit the <a href="https://system.netsuite.com/app/setup/accesstokens.nl?whence=">Access Tokens</a> page in NetSuite.</li>
    <li>Locate a token you wish to delete and click <b>Edit</b>.</li>
    <li>On the <i>Access Token</i> page, click <b>Revoke</b>, then <b>OK</b> in the confirmation pop-up.
        <p><img src="/img/smb-help-hub/0001-netsuite-revoke-access-token.png" alt="Screenshot of the NetSuite interface access token screen with the Revoke and OK buttons outlined for attention"></p>
        <p>You will be redirected back to NetSuite's <i>Access Tokens</i> page and see a success message.</p>
    </li>
    <li>Click <b>Try again</b> in Codat's NetSuite connection flow so that we can retry obtaining access.</li>
  </ol>
<p>You can refer to NetSuite's <a href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/bridgehead_4249078810.html">Viewing, Editing, Creating, and Revoking TBA Tokens</a> article for more details on revoking access tokens.</p>
<p>If you don't have any existing tokens you can delete, use a different user account to log in to NetSuite. For example, ask your colleague to link to Codat instead.</p>
    `}
  />

  <Question
    question="How do I resolve the 'Unable to access data' error?"
    answer={`
<p>If you encounter the <code>Unable to access data</code> error, this is likely because the <i>AppLink</i> bundle has not been installed correctly. Check your installed bundles on NetSuite's <a href="https://system.netsuite.com/app/bundler/bundlelist.nl?type=I&whence=">Installed Bundles</a> page.</p>
<p><b>Don't see <i>AppLink</i> on the list of installed bundles?</b></p>
<p>Click the <b>Try again</b> button and repeat the step-by-step instructions on the screen. For a detailed configuration walkthrough and an interactive tutorial, refer to our <a href="https://docs.codat.io/smb-help-hub/integrations/netsuite/bundles#how-do-i-install-a-bundle">Understand bundles</a> documentation.</p>  
<p><b><i>AppLink</i> bundle already installed?</b></p> 
<p>It's possible the <i>AppLinkProd</i> integration could have been blocked. To resolve, reenable the integration:</p>
  <ol>
    <li>Visit the <a href="https://2633203.app.netsuite.com/app/common/integration/integrapplist.nl?whence=">Integrations</a> page in NetSuite.</li>
    <li>Locate the <i>AppLinkProd</i> integration on the list and click on its name.</li>
    <li>On the detailed <i>Integration</i> page, click the <b>STATE</b> dropdown and select <b>Enabled</b>. Click <b>Save</b> to apply the change.</li>
      <p><img src="/img/smb-help-hub/0002-netsuite-enable-integration.png" alt="Screenshot of the NetSuite interface integration screen with the State dropdown and Save button outlined for attention"></p>
    <li>Click <b>Try again</b> in Codat's NetSuite connection flow so that we can retry establishing the connection.</li>
  </ol>
    `}
  />

<Question
    question="I have deleted the AppLink bundle. What do I do?"
    answer={`
<p>If you deleted the <i>AppLink</i> bundle, you can reinstall it via the <a href="https://system.netsuite.com/app/bundler/bundledetails.nl?sourcecompanyid=6950262&domain=PRODUCTION&config=F&id=391485">Bundle Details</a> page in NetSuite.</p>
<p>For a detailed configuration walkthrough, refer to our <a href="https://docs.codat.io/smb-help-hub/integrations/netsuite/bundles#how-do-i-install-a-bundle">Understand bundles</a> documentation and follow steps 2 to 4. You will still need to complete Codat's NetSuite connection flow as directed by your financial services provider.</p>
    `}
  />

</Questions>
