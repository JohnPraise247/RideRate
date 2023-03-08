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
    sidebarBtn:"",
    location:{
        list:null,
        addNew:()=>{
        if(m.route.param("name") == "location"){
           Swal.fire({
           // const { value: formValues } = await Swal.fire({
               titleText: 'New Location',
               html:
                 '<input id="swal-input1" class="swal2-input form-control" placeholder="From">' +
                 '<input id="swal-input2" class="swal2-input form-control" placeholder="To">',
               focusConfirm: false,
               preConfirm: () => {
                 Model.location.list = 1
                 m.redraw()
                 return [
                   console.log(document.getElementById('swal-input1').value,document.getElementById('swal-input2').value)
                 ]
               },
               confirmButtonText:"Add new Location",
               showCancelButton: true,
               confirmButtonColor:"#007bff",
               reverseButtons:true,
               buttonsStyling:false,
               customClass: {
                confirmButton: "btn btn-sm btn-fill btn-primary",
                cancelButton:"btn btn-sm btn-primary mr-2"
               }
               // ,footer:"cool"
            })
       
         // if (formValues) {
         //  Swal.fire(JSON.stringify(formValues))
         // }
        }
    }
  }
    
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

jQuery(document).ready(function($) {

  if (window.history && window.history.pushState) {

    // window.history.pushState('forward', null, './#forward');

    $(window).on('popstate', function() {
        Swal.isVisible()?Swal.close():null 
      // alert('Back button was pressed.');
    });

  }
});

// $(window).scroll(function(e) {
//     oVal = ($(window).scrollTop() / 170);
//     $(".bg-overlay").css("backdrop", "blur("+oVal+"px)");
    
// });

// Model.hideComment(comment).then(m.redraw)
// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })

//                 Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool',
//   cancelButton: '...'
// })