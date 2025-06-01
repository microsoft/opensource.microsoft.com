import React from 'react';
import '../styles/globals.css';

const CreditsOverview = () => {
  return (
    <div className="pb-6">
      <h4 className="h4">Azure credits for open source projects</h4>
      <p>
        Microsoft makes renewable Azure credits available in terms up to a year
        to select open source projects for test, build, and other development work.
      </p>
      <p>
        Here's how some of the projects
        participating in the program are benefitting from Azure credits:
      </p>
      <ul className="ul mt-4">
        <li>
          <b>FreeBSD</b>
          <br />
          FreeBSD is a Unix-like operating system for servers, desktops, and embedded platforms. Azure credits have helped developers to work on custom kernels. 
          They are now releasing more timely updates for security advisories for third-party software and spinning up larger VM classes for package building 
          and smaller VM classes for testing, both of which are hugely helpful to their developers.
        </li>
        <li>
          <b>AlmaLinux</b>
          <br />
          AlmaLinux OS is a 1:1 binary compatible clone of RHEL®, guided and built by the community. They were the first downstream RHEL clone to be released after the announcement by RedHat that support for CentOS Linux was ending, and their goal is to provide an option for folks who have historically used CentOS Linux, and for whom CentOS Stream is not an option. The AlmaLinux OS Foundation is a 501(c)(6) non-profit created for the benefit of the AlmaLinux OS community.
        </li>
        <li>
          <b>Haskell</b>
          <br />
          Haskell is a purely functional programming language. Azure credits are helping their continuous integration system, releases, their GitLab instances, 
          and other builds.
        </li>
        <li>
          <b>Snakemake</b>
          <br />
          The Snakemake workflow management system is a tool for creating reproducible and scalable data analyses. Workflows are described via a human-readable,
          Python-based language, and Snakemake enables these to be seamlessly scaled to server, cluster, grid, and cloud environments. 
        </li>
      </ul>
    </div>
  );
};

export default CreditsOverview;
