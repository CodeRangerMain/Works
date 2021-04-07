(function () {
var signUpLogin = document.querySelector('#sign-up-login');
    var signUpPassword= document.querySelector('#sign-up-password');
    const signUpButton = document.querySelector('#sign-up-submit')
    
 var signInLogin = document.querySelector('#sign-in-login');
    var signInPassword = document.querySelector('#sign-in-password');
    const signInButton = document.querySelector('#sign-in-submit')
    var allUsers = [];
    
 var notificationAlert = document.querySelector('#notification')
 var notificationText = notificationAlert.querySelector('p')
function signInCheck(users,login,password){
    
}
    function User(uLogin, uPassword) {
    this.login = uLogin;
    this.password = uPassword;
    this.data = Date();
};
var signInCheck= function(users,login,password){
    for(var i = 0; users.length>i; i++ )  {
           var currentUser = users[i];
           if(currentUser.login === login.value && currentUser.password === password.value){
           notificationText.textContent = 'Вход выполнен'
         notificationAlert.classList.remove('hidden')
              }
 }}

    signUpButton.onclick = function(evt){
        evt.preventDefault();
        var loginLength = signUpLogin.value.length;
        var passwordLength = signUpPassword.value.length;
        if(loginLength>0 && passwordLength>0){
       var user = new User(signUpLogin.value,signUpPassword.value);
        allUsers.push(user);
        
         notificationAlert.classList.remove('hidden')
        signUpLogin.value = '';
        signUpPassword.value='';
         }   
        else{
            notificationText.textContent = 'Введите данные'
         notificationAlert.classList.remove('hidden')
            signUpLogin.classList.add('red-border');
            signUpPassword.classList.add('red-border')
        }
    }
      
    


 signInButton.onclick = function(evt){
    
        evt.preventDefault();
        var loginLength = signInLogin.value.length;
        var passwordLength = signInPassword.value.length;
        if(loginLength>0 && passwordLength>0){    
          signInCheck(allUsers,signInLogin,signInPassword);
           
        signInLogin.value = '';
        signInPassword.value='';
         } 
         else {notificationText.textContent = 'Проверьте данные'
         notificationAlert.classList.remove('hidden')
            signInLogin.classList.add('red-border');
            signInPassword.classList.add('red-border')
              }
 } 
 }());
     
        
    
    
