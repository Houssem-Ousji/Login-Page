var username_input = document.getElementById('username'),
    password_input = document.getElementById('password');

username_input.onfocus = function() { this.placeholder = ''; };
username_input.onblur = function() { this.placeholder = 'Username'; };
password_input.onfocus = function() { this.placeholder = '' };
password_input.onblur = function() { this.placeholder = "Password"; };