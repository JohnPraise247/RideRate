//Todo 

// fix li hover for nav
//add indictor to show tab is active
//fix route to redirect /u/ to /u/dashbaord


var Auth = {
    username: "",
    phonenumber: "",
    password: "",
    setUsername: function(value) {
        Auth.username = value
    },
    setPassword: function(value) {
        Auth.password = value
    },
    canSubmit: function() {
        return Auth.username.trim() !== "" && Auth.password.trim() !== ""
    },
    login: function() {
        //make request
        setTimeout("m.route.set('/u/dashboard')")

       /* m.request({
            url: "/api/v1/auth",
            params: {username: Auth.username, password: Auth.password}
        }).then(function(data) {
            console.log(data)
            // localStorage.setItem("auth-token", data.token)
            // m.route.set("/secret")
        })*/
    },
}

var Model ={
    transparent:true,
    sidebar:"",
    sidebarBtn:""
}

// Navbar scroll
$(document).scroll(function() {
    if( $(this).scrollTop() > 150 ) {
        if(Model.transparent) {
            Model.transparent = false;
            $('nav[role="navigation"]').removeClass('navbar-transparent');
        }
    } else {
        if( !Model.transparent ) {
            Model.transparent = true;
            $('nav[role="navigation"]').addClass('navbar-transparent');
        }
    }
});

// $(window).scroll(function(e) {
//     oVal = ($(window).scrollTop() / 170);
//     $(".bg-overlay").css("backdrop", "blur("+oVal+"px)");
    
// });

// Model.hideComment(comment).then(m.redraw)
