// Get references to page elements
$(document).ready(function() {
var $preference = $("#genderPreference");
var $userGender = $("#gender");
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

// var API = {
//   createAccount: function () {
//     return $.ajax({
//       type: "POST",
//       url: "/api/match",
//       data: JSON.stringify()
//     });
//   },
// }


var userformSubmit = function (event) {
  event.preventDefault();
  var user = {
    gender: $userGender.val(),
    preference: $preference.val(),
    name: $firstName.val(),
    email: $email.val(),
    password: $password.val(),
    zipCode: $zipCode.val(),
    age: $age.val()
  };
console.log(user);
  if (user.gender === null || user.age === null || user.preference === null || user.name === " " || user.email === " " || user.password === " " || user.zipCode == " "){
    return M.toast({html: 'Please put your info!', classes: 'rounded'})
  }
  
  $.post("/api/match", user, function (data)  { 
    window.location.href= `/match/${user.age}/${user.gender}/${user.zipCode}` 
    console.log(data);
  });

  // $genderPreference.val(" ");
  // $firstName.val(" ");
  // $email.val(" ");
  // $password.val(" ");
  // $zipCode.val(" ");

};

$submitBtn.on("click", userformSubmit);

  $submitBtn.on("click", userformSubmit);
});
