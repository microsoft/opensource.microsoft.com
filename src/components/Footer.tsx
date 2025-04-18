//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client'

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="wrapper-full bg-dark">
          <div className="py-6 my-6">
              <div className="wrapper ">
                  <div className="d-md-flex flex-justify-between">
                      <div className="col-12 col-md-7 col-lg-7 mb-6 mb-md-0">
                          <div className="text-white" data-animate-in="fade">
                              <ul className="list-style-none">
                                  <li>
                                      <a className="mt-4 link-arrow-external" href="https://x.com/OpenAtMicrosoft" target="_blank" rel= "noopener">
                                          <img className="mr-2" src="/images/twitter.svg" alt="Twitter icon" title="Twitter icon" />
                                          OpenAtMicrosoft
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mt-4 link-arrow-external" href="https://github.com/microsoft/opensource.microsoft.com" target="_blank" rel= "noopener">
                                          <img className="mr-2" src="/images/github.svg" alt="GitHub icon" title="GitHub icon" />
                                          microsoft/opensource.microsoft.com
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-12 col-md-5 col-lg-4 pl-md-4 pl-lg-2">
                          <figure className="intro-svg">
                            <img
                              src="/images/open-source-footer.svg"
                              alt="Circles, dots, and other shapes representing components, building blocks, things that work together."
                            />
                          </figure>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <footer className="site-footer" role="contentinfo">
          <div className="wrapper d-xl-flex flex-justify-between flex-items-center flex-column">
              <div className="site-footer__brand flex-column">
                  <img className="mb-4" src="/images/Microsoft-icon-white.svg" alt="Microsoft icon" />
                  <p className="mb-4">Powered by <Link className="link-decorated" href="/thanks">Open Source</Link> and Microsoft Azure</p>
              </div>

              <ul>
                  <li>
                      <a
                        href="https://aka.ms/opensource"
                        onClick={(e) => {
                          if (confirm('Are you sure you want to continue to https://aka.ms/opensource? This resource is restricted to Microsoft employees to share guidance and documentation about open source at Microsoft.\n\nIf you continue, you will be redirected to authenticate with Azure Active Directory, and the error messages may be confusing if you are not able to sign-in.')) {
                            return true;
                          }
                          e.preventDefault();
                          return false;
                        }}
                      >
                        Employee sign-in
                      </a>
                  </li>
                  <li>
                      <a href="https://careers.microsoft.com/us/en/search-results?keywords=open%20source" target="_new">Jobs</a>
                  </li>
                  <li>
                      <a href="https://opensource.microsoft.com/blog/" target="_new">Blog</a>
                  </li>
                  <li>
                      <a href="/codeofconduct">Code of Conduct</a>
                  </li>
                  <li>
                      <a href="https://aka.ms/yourcaliforniaprivacychoices" className="c-uhff-link c-uhff-ccpa" style={{
                        display: 'inline-block',
                      }}
                      >
                        {/* xmlns="http://www.w3.org/2000/svg" */}
                          <svg role="img" viewBox="0 0 30 14" height="16" width="43" style={{ display: 'inline-block' }}>
                              <title>California Consumer Privacy Act (CCPA) Opt-Out Icon</title>
                              <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style={{
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                fill: '#fff'
                              }} />
                              <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style={{
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                fill: '#06f'
                              }} />
                              <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style={{
                                fill: '#fff'
                              }} />
                              <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style={{
                                fill: '#06f'
                              }} />
                          </svg>
                          <span>Your Privacy Choices</span>
                      </a>
                  </li>
                  <li>
                      <a href="https://privacy.microsoft.com/privacystatement" target="_blank">Privacy & Cookies</a>
                  </li>
                  <li id="manageCookies" data-require-javascript="yes" data-javascript-show="immediate">
                      <a href="#" onClick={() => {
                        try {
                          if ((window as any).manageCookies) {
                            (window as any).manageCookies();
                          }
                        } catch (e) {
                          console.error('Error managing cookies:', e);
                        }
                      }
                    }
                    >
                      Manage Cookies
                    </a>
                  </li>
                  <li>
                      <a href="https://www.microsoft.com/legal/intellectualproperty/copyright/default.aspx" target="_blank">Terms</a>
                  </li>
                  <li>
                      <a href="https://www.microsoft.com/trademarks" target="_blank">Trademarks</a>
                  </li>
                  <li>
                      <p>© <span id="year">{year}</span> Microsoft</p>
                  </li>
              </ul>
          </div>
      </footer>
    </>
  )
}