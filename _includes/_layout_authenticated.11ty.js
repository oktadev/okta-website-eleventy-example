exports.data = {
title: "11ty And Okta",
layout: "_layout_base.11ty.js",
};

exports.render = function (data) {
return `

<header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        Home
    </a>

    <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2" onclick='logout()'>Logout</button>
    </div>
</header>

${data.content}

<script type="text/javascript">
    function logout() {
        oktaSignIn.authClient.signOut();
        location.reload();
    }

    if(!oktaSignIn?.authClient?.token) {
        window.location='/Login';
    }

    oktaSignIn.authClient.token.getUserInfo().then(function(user) {
        if(loadPage) {
            loadPage();
        }
    }).catch(function(e) {
        console.log(e);
        window.location='/Login'
    });
</script>
`;
};