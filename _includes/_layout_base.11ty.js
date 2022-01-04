exports.data = {

};

exports.render = function (data) {
  return `<!doctype html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    <script src="https://global.oktacdn.com/okta-signin-widget/5.14.1/js/okta-sign-in.min.js"
        type="text/javascript"></script>
    <link href="https://global.oktacdn.com/okta-signin-widget/5.14.1/css/okta-sign-in.min.css" type="text/css"
        rel="stylesheet" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
</head>

<body>

    <script type="text/javascript">
        const oktaSignIn=new OktaSignIn({
            baseUrl: "{{yourOktaDomain}}",
            redirectUri: 'http://localhost:8080/',
            clientId: "{{yourClientId}}",
            authParams: {
                issuer: "{{yourOktaDomain}}/oauth2/default"
            }
        });     
    </script>
    <div class="container">
        ${data.content}
    </div>

</body>

</html>`;
};
