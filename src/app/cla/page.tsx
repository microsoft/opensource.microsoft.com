//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

// Page title: Contributor License Agreements at Microsoft

export default function ContributorLicenseAgreement() {
  return (
    <article className="program-page">
      <div className="page-header">
        <div className="wrapper">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h1 className="h2">Contributor License Agreements</h1>
          </div>
        </div>
      </div>
      <div className="wrapper-full bg-light">
        <div className="wrapper my-6 py-4">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h3 className="h4 font-weight-400 mb-4">
              We appreciate community contributions to Microsoft repositories. By
              signing a contributor license agreement, we ensure that the
              community is free to use your contributions.
            </h3>
          </div>
        </div>
      </div>
      <div className="wrapper my-6 py-4">
        <div className="col-md-10 col-lg-7 mx-auto longform">
          <div className="pb-6">
            <h3 className="h3">Review the CLA document</h3>
            <p>
              Download the <a href="/pdf/microsoft-contribution-license-agreement.pdf" 
              target="_new">Microsoft Contributor License Agreement as a PDF</a> document if you need.
            </p>
          </div>
          <div className="pb-6">
            <h3 className="h3">Signing the CLA</h3>
            <p>
              The Microsoft CLA experience is integrated natively into GitHub and its pull request
              experience. Here's how it works the first time you contribute to a Microsoft open source
              project:
            </p>
            <ul>
              <li>
                When you open a pull request, the <code>license/cla</code> check is run by our 
                bot.
              </li>
              <li>
                If you've signed the CLA before, the status check goes green, and you're done.
                Your pull request is ready to be reviewed and merged.
              </li>
              <li>
                If you have not signed the CLA at any point before, the pull request will
                receive a comment annotated with the agreement and more information about
                signing the agreement. You will reply with a comment to accept the agreement
                on behalf of yourself, or, if you've been authorized to sign on behalf of
                your company, there is a different syntax for that.
              </li>
              <li>
                After signing, the status check will pass and you're all set. <strong>Thanks for your contribution!</strong>
              </li>
              <li>
                <em>NOTE:</em><br />
                If you're an active Microsoft employee or vendor, there is a Microsoft-internal
                system that allows you to "link" your GitHub account for corporate use. When you
                use your linked account, you will not have to sign the CLA. Microsoft
                employees and vendors can learn more about linking accounts at 
                <a href="https://aka.ms/opensource" target="_new">aka.ms/opensource</a>.
              </li>
            </ul>
          </div>
          <div className="pb-6">
            <h3 className="h3">.NET Foundation CLA</h3>
            <p>
              The <a href="https://dotnetfoundation.org/" target="_new">.NET Foundation</a> is a
              501(c)(6) non-profit organization, which was established to support an innovative,
              commercially friendly, open-source ecosystem around the .NET platform.
            </p>
            <p>
              While Microsoft assists with infrastructure alignment, the foundation maintains
              a separate CLA. You can read more about this process at 
              <a target="_new" href="https://cla.dotnetfoundation.org/">https://cla.dotnetfoundation.org/</a>. 
              Even Microsoft employees must sign the .NET Foundation CLA to cover their contributions to
              the community.
            </p>
        </div>
        <div className="pb-6">
          <h3 className="h3">Corporate CLA (CCLA)</h3>
          <p>
            Microsoft does not typically participate in corporate CLA agreements, given the
            scale and logistics challenge.
          </p>
        </div>
      </div>
    </div>
    </article>
  );
}
