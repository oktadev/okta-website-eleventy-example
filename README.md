---
layout: _layout_unauthenticated.11ty.js
---
# Build a Website with 11ty (Eleventy)

This repository shows you how to use Okta on a static site built with 11ty. Please read [Build a Website with 11ty (Eleventy)][blog] to see how it was created.

**Prerequisites:**

- [Node 10 or newer](https://nodejs.org/en/download/)
- [Eleventy](https://www.11ty.dev/)
- [Okta CLI](https://cli.okta.com)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To run this example, run the following commands:

```bash
git clone https://github.com/nickolasfisher/Okta_Eleventy
cd sample_blog
```

### Create an OIDC Application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI. 

Provide the required information. Once you register, create a client application in Okta with the following command:

```shell
okta apps create
```

You will be prompted to select the following options:
- Type of Application: **2: Single Page App**
- Redirect URI: `https://localhost:8080/`
- Post Logout Redirect URI: `https://localhost:8080/callback`

The application configuration will be printed to `.okta.env`.

```dotenv
export OKTA_OAUTH2_ISSUER="{yourOktaDomain}/oauth2/default"
export OKTA_OAUTH2_CLIENT_SECRET="{yourClientSecret}"
export OKTA_OAUTH2_CLIENT_ID="{yourClientId}"
```

Open the file `_includes/_layout_base.11ty.js` and update the code.

```javascript
      const oktaSignIn=new OktaSignIn({
         baseUrl: "{{yourOktaDomain}}",
         redirectUri: 'http://localhost:8080/',
         clientId: "{{yourClientId}}",
         authParams: {
               issuer: "{{yourOktaDomain}}/oauth2/default"
         }
      });     
```

## Start the Application.

Run the command `npx @11ty/eleventy --serve` and then open `https://localhost:8080` in your favorite browser and you should be able to see the home page.

## Links

This example uses the following open source libraries from Okta:

* [Okta Signin Widget](https://developer.okta.com/code/javascript/okta_sign-in_widget/)
* [Okta CLI](https://github.com/okta/okta-cli)

## Help

Please post any questions as comments on the [blog post][blog], or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).

[blog]: ()
