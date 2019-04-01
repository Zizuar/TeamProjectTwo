
$(document).ready(function () {
  var avatar = " ";
  var fbLink = " ";
  var $preference = $("#genderPreference");
  var $userGender = $("#gender");
  var $firstName = $("#first_name");
  var $email = $("#email");
  var $password = $("#password");
  var $age = $("#age");
  var $zipCode = $("#zipCode");
  var $submitBtn = $("#btnSubmit");
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI(response.authResponse.userID);
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function () {
    FB.init({
      appId: '415837295848359',
      cookie: true,  // enable cookies to allow the server to access 
      // the session
      xfbml: true,  // parse social plugins on this page
      version: 'v3.2' // The Graph API version to use for the call
    });

    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });

  };
  // Load the SDK asynchronously
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  function getLink() {
    FB.api('/v3.2/me?fields=link', function (response) {
      console.log(response);
      fbLink = response.link;
      console.log(fbLink);
    });
  }
  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI(fbID) {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
      // console.log(response);
      FB.api(
        '/' + fbID + '/picture?type=large',
        'GET',
        { "redirect": "false" },
        function (response) {
          // Insert your code here
          console.log(response);
          avatar = response.data.url;
          console.log(avatar);
          getLink();
        }
      );    
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
   }
  

  $('select').formSelect();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('.modal').modal();
  $('.sidenav').sidenav();

  
  var userformSubmit = function (event) {
    event.preventDefault();
    var user = {
      gender: $userGender.val(),
      preference: $preference.val(),
      name: $firstName.val(),
      email: $email.val(),
      password: $password.val(),
      zipCode: $zipCode.val(),
      age: $age.val(),
      avatar: avatar,
      fbLink: fbLink,
    };
    console.log(user);
    if (user.gender === null || user.age === null || user.preference === null || user.name === " " || user.email === " " || user.password === " " || user.zipCode == " ") {
      return M.toast({ html: 'Please put your info!', classes: 'rounded' })
    }
    $.post("/api/match", user, function (data) {
      window.location.href = `/match/${user.age}/${user.preference}/${user.zipCode}`
      console.log(data);
    });
  };
  $submitBtn.on("click", userformSubmit);
});

