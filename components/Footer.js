import React from 'react';
import '../styles/globals.css';

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="wrapper d-xl-flex flex-justify-between flex-items-center flex-column">
        <div className="site-footer__brand flex-column">
          <img className="mb-4" src="/assets/images/Microsoft-icon-white.svg" alt="Microsoft icon" />
          <p className="mb-4">Powered by <a className="link-decorated" href="/thanks/">Open Source</a> and Microsoft Azure</p>
        </div>

        <ul>
          <li>
            <a href="https://aka.ms/opensource">Employee sign-in</a>
          </li>
          <li>
            <a href="https://careers.microsoft.com/us/en/search-results?keywords=open%20source" target="_new">Jobs</a>
          </li>
          <li>
            <a href="https://opensource.microsoft.com/blog/" target="_new">Blog</a>
          </li>
          <li>
            <a href="/codeofconduct/">Code of Conduct</a>
          </li>
          <li>
            <a href="https://aka.ms/yourcaliforniaprivacychoices" className="c-uhff-link c-uhff-ccpa" style={{ display: 'inline-block' }}>
              <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xmlSpace="preserve" height="16" width="43" style={{ display: 'inline-block' }}>
                <title>California Consumer Privacy Act (CCPA) Opt-Out Icon</title>
                <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#fff' }}></path>
                <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#06f' }}></path>
                <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style={{ fill: '#fff' }}></path>
                <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style={{ fill: '#06f' }}></path>
              </svg>
              <span>Your Privacy Choices</span>
            </a>
          </li>
          <li>
            <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank">Privacy & Cookies</a>
          </li>
          <li id="manageCookies" data-require-javascript="yes" data-javascript-show="immediate">
            <a href="#" onClick={() => manageCookies()}>Manage Cookies</a>
          </li>
          <li>
            <a href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx" target="_blank">Terms</a>
          </li>
          <li>
            <a href="https://www.microsoft.com/trademarks" target="_blank">Trademarks</a>
          </li>
          <li>
            <p>© <span id="year">2023</span> Microsoft</p>
          </li>
        </ul>
      </div>
      <script>
        var date = new Date().getFullYear(),
            year = document.getElementById('year');
            if(year) {
                document.getElementById('year').innerHTML = date;
            }
      </script>
    </footer>
  );
};

export default Footer;
