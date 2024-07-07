import ("System.html")

function clearInputFields() {
    $("#signup-form input[id='name']").val('');
    $("#signup-form input[type='email']").val('');
    $("#signup-form input[type='password']").val('');
  }
  
  function login() {
    var email = $("#login-form input[type='email']").val();
    var password = $("#login-form input[type='password']").val();
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    var loggedInUser = users.find(function(user) {
      return user.email === email && user.password === password;
    });
  
    if (loggedInUser) {
      alert("Login successful");
    } else {
      alert("Invalid email or password");
    }
  }
  
  function register() {
    var name = $("#signup-form input[id='name']").val();
    var email = $("#signup-form input[type='email']").val();
    var password = $("#signup-form input[type='password']").val();
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    var existingUser = users.find(function(user) {
      return user.email === email;
    });
  
    if (existingUser !== undefined) {
      alert("User already exists with that email");
    } else {
      var newUser = { name: name, email: email, password: password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful for " + email);
  
      $('.form-box.register').fadeOut(200);
  
      clearInputFields();
    }
  }
  
  $("#login-form button[type='submit']").on("click", function (e) {
    e.preventDefault();
    login();
  });

  $("#signup-form button[type='submit']").on("click", function (e) {
    e.preventDefault();
    register();
  });
  
  $(document).ready(function() {
    $('.form-box.register').hide();
  
    $('.login-link').click(function() {
      $('.form-box.register').fadeOut(200);
      $('.form-box.login').delay(200).fadeIn(200);
  
      clearInputFields();
    });
  
    $('.register-link').click(function() {
      $('.form-box.login').fadeOut(200);
      $('.form-box.register').delay(200).fadeIn(200);
  
      clearInputFields();
    });
  
    $('a[href="#about"]').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('#about').offset().top
      }, 800);
    });
  });