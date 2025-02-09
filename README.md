# Okta Eleventy Website Example

This repository shows you how to use Okta on a static site built with 11ty. 

Please read [How to Build a Website With Eleventy]() to see how this app was created.

**Prerequisites:**

- [Node.js 10 or newer](https://nodejs.org/en/download/)
- [Okta CLI](https://cli.okta.com)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

## Getting Started

To run this example, run the following commands:

```bash
git clone https://github.com/oktadev/okta-website-eleventy-example.git
cd okta-website-eleventy-example
npm install
```

### Create an OIDC Application in Okta

Before you begin, you'll need a free Okta developer account. Install the [Okta CLI](https://cli.okta.com) and run `okta register` to sign up for a new account. If you already have an account, run `okta login`.

Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Change the Redirect URI to `http://localhost:8080/callback` and accept the default Logout Redirect URI of `http://localhost:8080/`.

The Okta CLI will create an OIDC Single-Page App in your Okta Org. It will add the redirect URIs you specified and grant access to the Everyone group. It will also add a trusted origin for `http://localhost:8080`. You will see output like the following when it's finished:

```
Okta application configuration:
Issuer:    https://{yourOktaDomain}/oauth2/default
Client ID: {clientId}
```

### Configure your Okta Settings

Open the file `_includes/_layout_base.11ty.js` and update the code.

```javascript
const oktaSignIn=new OktaSignIn({
      baseUrl: "https://{{yourOktaDomain}}",
      redirectUri: 'http://localhost:8080/callback',
      clientId: "{{yourClientId}}",
      authParams: {
            issuer: "https://{{yourOktaDomain}}/oauth2/default"
      }
});     
```

## Start the Application

Enter the following command:

```bash
npx @11ty/eleventy --serve
```

Open `https://localhost:8080` in your favorite browser.

## Links

This example uses the following open source libraries and tools from Okta:

* [Okta Signin Widget](https://developer.okta.com/code/javascript/okta_sign-in_widget/)
* [Okta CLI](https://github.com/okta/okta-cli)

## Help

Please post any questions as comments on the [blog post](), or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
