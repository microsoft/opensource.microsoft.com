# opensource.microsoft.com

The `opensource.microsoft.com` web site is a simple, factual web site sharing information about Microsoft's
open source program, the open source ecosystem that we support, and opportunities to get involved in projects
and learn more.

Most of the content is static, and Next.js is now used to generate that modern static site, ported from an
old Jekyll site. The rendered site is retrieved at runtime by a separate site hosting solution.

Created by the Microsoft Open Source Programs Office (OSPO), in partnership with Microsoft's One Engineering System (1ES) team,
the site launched in August 2020, replacing an antiquated prior site. We expect that limited updates and contributions to
the site will be made by Microsoft teams.

We do not currently have plans to add drastically different sections to the site or to be the "source of truth" 
for blog posts or other content. We're able to accept some coordinated contributions or suggestions, but request
coordination in issues before embarking on new functionality, as the site has a set of requirements to meet such
as being WCAG 2.1 accessible, and deploying to Microsoft's cloud.

The primary site navigation is:

- Homepage overview
- Get involved
- Projects
- Ecosystem
- Our program

Other content includes:

- Jobs (an external link)
- Blog (a separate site hosted at `/blog` via the front door)
- Code of Conduct text
- Community Resources
- a "thank you" page about the open source powering the project
- OpenAtMicrosoft X account
- This repository

# Contributing

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## CLA

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

## Contribution scenarios

Thanks for your interest in contributing to the https://opensource.microsoft.com web site. Please make sure to 
communicate any contribution ideas as an issue _before_ starting a pull request. We'd love to see how to best involve you.

We're happy that this site is open source (because a site _about_ open source should be open source).

As a public-facing site hosted at `microsoft.com`, we may not be able to accept general contributions to this site, so your
pull request may be closed and not merged, even if it's great, and we may not be able to provide complete context for
any such decision.

Thanks for your understanding.

# Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft Trademark and Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

# Telemetry

By default, this project **does not include telemetry**; however, the GitHub Actions may generate the production version of the site without modification.

When the Jekyll build environment is set to Microsoft's production environment name - "opensource.microsoft.com" -
Microsoft's standard cookie compliance and analytics code to connect with Application Insights is included in the site.

* **Data Collection**. The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft's privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

# Development

Ensure you have a modern Node.js environment.

```sh
npm install
npm run dev
```

The `Dockerfile` is available to host a local `nginx` version of the static site,
although dynamic site features are not available when running local.
