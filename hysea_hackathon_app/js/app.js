var App = {
  hash: {},

  handleRegister : function(usernameNew, emailNew, passwordNew, passwordConfirmNew) {
    if (passwordNew == passwordConfirmNew && passwordNew.length >= 6) {
      var usernameStripped = usernameNew.replace(/[^a-zA-Z0-9]/g, "");   
      if (usernameStripped == usernameNew) {
        this.hash[usernameNew] = {};
        this.hash[usernameNew][password] = passwordNew;
        this.hash[usernameNew][email] = emailNew;
        // Go to home page 
        return true;
      }
    }
    alert("Registration unsuccessful");
    $('#username').html("");
    $('#email').html("");
    $('#password').html("");
    $('#password-confirm').html("");
    return false;
  },
  handleLogin : function (usernameNow, passwordNow) {
    if (this.hash[usernameNow] == nil) {
      alert("No such user exists");
      return false;
    } else {
      if (this.hash[usernameNow][password] == passwordNow) {
        // Go to home page 
        return true;
      } else {
        return false;
      }
    }
  }
};

$(document).ready(function () {
  $('.register-button').click(function (ev) {
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var passwordConfirm = $('#password-confirm').val();
    if (App.handleRegister(username, email, password, passwordConfirm)) {
      return true;
    } else {
      ev.preventDefault();
      return false;
    }
   ;
  });

  $('.submit-button').click(function (ev) {
    var username = $('#inputName').val();
    var password = $('#inputPassword').val();
    if (App.handleLogin(username, password)) {
      return true;
    } else {
      ev.preventDefault();
      return false;
    }
  });

});