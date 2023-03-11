//Todo 

//fix li hover for nav
//fix route to redirect /u/ to /u/dashbaord


var Auth = {
    username: "JohnDoe",
    phonenumber: "",
    password: "12341234",
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
        list:[]// list:[["Oye to Ikole","1.5 Hours Journey"],["Ado Ekiti to Ilorin","Description . . ."]],
    },
    rates:{
        list:[]// list:[["Oye to Ikole","1.5 Hours Journey"],["Ado Ekiti to Ilorin","Description . . ."]],
    },
    addNew:()=>{
           if(m.route.param("name") == "location"){
              Swal.fire({
                  titleText: 'New Location',
                  html:
                    '<input id="swal-input1" class="swal2-input form-control" type="text" placeholder="From">' +
                    '<input id="swal-input2" class="swal2-input form-control" type="text" placeholder="To">',
                  focusConfirm: false,
                  preConfirm: () => {
                    return ($("#swal-input1").val().trim().length > 0 && $("#swal-input1").val().trim().length > 0)? Model.location.list.push([$("#swal-input1").val()+" to "+$("#swal-input2").val(),"No Descriptions . . ."]):false
                  },
                  confirmButtonText:"Add new Location",
                  showCancelButton: true,
                  confirmButtonColor:"#007bff",
                  reverseButtons:true,
                  buttonsStyling:false,
                  // allowEnterKey:true,
                  // focusConfirm:true,
                  customClass: {
                   confirmButton: "btn btn-sm btn-fill btn-primary",
                   cancelButton:"btn btn-sm btn-primary mr-2"
                  }
                  // ,footer:"cool"
               })
        }else if(m.route.param("name") == "rates"){
            Swal.fire({
                  titleText: 'New Rate',
                  html:
                    '<div class="form-group"><select class="form-control" id="SelectLocation"><option disabled>Select a location</option></select></div>' +
                    '<input id="swal-input1" class="swal2-input form-control" type="number" placeholder="Price 1">' +
                    '<input id="swal-input2" class="swal2-input form-control" type="number" placeholder="Price 2(Optional)">',
                  focusConfirm: false,
                  preConfirm: () => {
                    return ($("#swal-input1").val().trim().length > 0 && $("#swal-input2").val().trim().length > 0)? Model.rates.list.push([$("#SelectLocation").val(),"₦"+$("#swal-input1").val()+" to ₦"+$("#swal-input2").val()])
                           :($("#swal-input1").val().trim().length > 0)? Model.rates.list.push([$("#SelectLocation").val(),"₦"+$("#swal-input1").val()])
                           :false
                  
                    // console.log($("#SelectLocation").val())
                    // Model.location.list.push([document.getElementById('swal-input1').value+" to "+document.getElementById('swal-input2').value,"No Descriptions . . ."])
                    // m.redraw()
                  },
                  confirmButtonText:"Add new Rate",
                  showCancelButton: true,
                  confirmButtonColor:"#007bff",
                  reverseButtons:true,
                  buttonsStyling:false,
                  customClass: {
                   confirmButton: "btn btn-sm btn-fill btn-primary",
                   cancelButton:"btn btn-sm btn-primary mr-2"
                  },
                  didOpen:()=>{
                    for(i in Model.location.list){
                        $("#SelectLocation").append("<option value='"+Model.location.list[i][0]+"'>"+Model.location.list[i][0]+"</option>")
                    }
                  }
               })

        }
    },
    edit:(value,desc)=>{
        if(m.route.param("name") == "location"){
              Swal.fire({
                  titleText: 'Edit Location',
                  html:
                    '<input id="swal-input1" class="swal2-input form-control" type="text" placeholder="From" value='+value.slice(0,value.indexOf(" ")).trim()+'>' +
                    '<input id="swal-input2" class="swal2-input form-control" type="text" placeholder="To" value='+value.slice(value.lastIndexOf(" ")).trim()+'>',
                  focusConfirm: false,
                  preConfirm: () => {
                    let temp = []
                    Model.location.list.forEach((i,j)=>{
                        // console.log(i)
                        // console.log(value)
                        // console.log(i[j])
                        i[j] == value?temp.push([$("#swal-input1").val()+" to "+$("#swal-input2").val(),desc]):temp.push([i,desc])
                    })
                    // Model.location.list = temp
                    // console.log(temp)
                    // return ($("#swal-input1").val().trim().length > 0 && $("#swal-input1").val().trim().length > 0)? Model.location.list.push([$("#swal-input1").val()+" to "+$("#swal-input2").val(),"No Descriptions . . ."]):false
                  },
                  confirmButtonText:"Add new Location",
                  showCancelButton: true,
                  confirmButtonColor:"#007bff",
                  reverseButtons:true,
                  buttonsStyling:false,
                  // allowEnterKey:true,
                  // focusConfirm:true,
                  customClass: {
                   confirmButton: "btn btn-sm btn-fill btn-primary",
                   cancelButton:"btn btn-sm btn-primary mr-2"
                  }
                  // ,footer:"cool"
               })
        }
    }
}


//Force dashboard to show desktop view for mobile devices
const initViewport = () =>{
    $("meta[name=viewport]").remove()
    m.route.param("name")!=undefined?$("head").prepend("<meta content='width=device-width, initial-scale=0.1, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />")//force fullscreen for mobile
    :$("head").prepend("<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />")
    m.redraw()
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

//Close modal onback key
$(document).ready(function($) {
  if (window.history && window.history.pushState) {
    $(window).on('popstate', function() {
        Swal.isVisible()?Swal.close():null
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