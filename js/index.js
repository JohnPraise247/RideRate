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
    sidebar:"",
    sidebarBtn:""
}

var initSidebar = () =>{
    // let sidebar = document.querySelector(".sidebar");
    //     let sidebarBtn = document.querySelector(".bx-menu");
    //     sidebarBtn.addEventListener("click", ()=>{
    //       sidebar.classList.toggle("close-sidebar");
    //     });
}

// Model.hideComment(comment).then(m.redraw)
