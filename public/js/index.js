
// Get references to page elements
$(document).ready(function() {
var $genderPreference = $("#gender");
var $firstName = $("#first_name");
var $email = $("#email");
var $password = $("#password");
var $age = $("#age");
var $zipCode = $("#zipCode");
var $submitBtn = $("#submitBtn");

  $('select').formSelect();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('.modal').modal();
  $('.sidenav').sidenav();

var API = {
  createAccount: function (user) {
    return $.ajax({
      type: "POST",
      url: "api/match",
      data: JSON.stringify(user)
    });
  },
}

var userformSubmit = function (event) {
  event.preventDefault();
  var user = {
    gender: $genderPreference.val(),
    name: $firstName.val(),
    email: $email.val(),
    password: $password.val(),
    zipCode: $zipCode.val(),
    age: $age.val()
  };
console.log(user);
  if (user.gender === null || user.age === null || user.name === " " || user.email === " " || user.password === " " || user.zipCode == " "){
    return M.toast({html: 'Please put your info!', classes: 'rounded'})
  }
  
  API.createAccount(user).then(function () { 
    // window.location.href="/*" 
    console.log(user.gender);
    console.log(user.name);
    console.log(user.email);
    console.log(user.password);
    console.log(user.zipCode);
    console.log(user.age);
  });

  // $genderPreference.val(" ");
  // $firstName.val(" ");
  // $email.val(" ");
  // $password.val(" ");
  // $zipCode.val(" ");

};

$submitBtn.on("click", userformSubmit);

});

