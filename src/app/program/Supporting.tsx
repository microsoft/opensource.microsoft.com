//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

export default function Supporting() {
  return (
    <>
      <div className="pb-6">
        <h3 className="h3 mb-4">Supporting communities</h3>
        <p>
          Microsoft is proud to be actively supporting open source communities
          through contribution, sponsoring foundations and special projects,
          awarding support through the FOSS Fund, and more.
        </p>
        <div>
          <div className="accordion">
            <div className="accordion__hd">
                <h4 className="h4">FOSS Fund</h4>
            </div>
            <div className="accordion__bd">
              <div>
                <p>
                  The <em>Free and Open Source Software (FOSS) Fund</em> provides a direct way for 
                  Microsoft engineers to participate in the nomination and selection process to help 
                  communities and projects they are passionate about.
                </p>
                <p>
                  The FOSS Fund provides sponsorships up to $10,000, and sometimes more, to 
                  specific open source projects as chosen by Microsoft employees collectively.
                </p>
                <p>
                  More information about the fund, including recent projects that have received
                  funds, can be found at <a href="https://aka.ms/microsoftfossfund" target="_new">https://aka.ms/microsoftfossfund</a>.
                </p>
              </div>
          </div>
        </div>
      </div>
      <div>
        <div className="accordion">
          <div className="accordion__hd">
            <h4 className="h4">Foundations</h4>
          </div>
          <div className="accordion__bd">
            <div>
              <p>
                Microsoft is proud to sponsor foundations such as the
                Open Source Initiative. Funding decisions are made
                both at the individual business or team level, as well as
                a central cross-company open source council.
              </p>
              <p>
                The <a href="/ecosystem">Ecosystem</a> section of this
                site has a comprehensive list of many of the foundations and
                groups that are sponsored centrally today.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
