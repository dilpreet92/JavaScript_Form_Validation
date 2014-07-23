function formFieldChecker(getElements) {
  this.loginElement = getElements.loginEl;
  this.emailElement = getElements.emailEl;
  this.nameElement = getElements.nameEl;
  this.homePageElement = getElements.homePageEl;
  this.selectElement = getElements.selectEl;
  this.textAreaElement = getElements.textAreaEl;
  this.goButtonElement = getElements.goButtonEl;
  this.recieveChkElement = getElements.recieveChkEl;
  this.valid = false ;
};
formFieldChecker.prototype.validate = function() {
  if((this.isLoginIdValid()) & (this.isEmailValid()) & (this.isNameValid()) & (this.isTimezoneSelected()) & (this.isHomePageValid()) & (this.isTextareaValid()) & (this.isChecked())) {
    this.valid = true;
  }
  return this.valid;
};

formFieldChecker.prototype.isEmailValid = function() {
  if ((!this.emailElement.value) || (!EMAIL_PATT.test(this.emailElement.value))) {
    alert("Invaild Email id");
    return false;
  }
  else {
    return true;
  }
};

formFieldChecker.prototype.isNameValid = function() {
  if ((!this.nameElement.value) || (!NAME_PATT.test(this.nameElement.value))) {
    alert("Invaild name");
    return false;
  }
  else {
    return true;
  }
};

formFieldChecker.prototype.isHomePageValid = function() {
  if ((!this.homePageElement.value) || (!URL_PATT.test(this.homePageElement.value))) {
    alert("Please Enter valid Home Page URl");
    return false;
  }
  else {
    return true;
  }
};

formFieldChecker.prototype.isTimezoneSelected = function() {
  if (!(this.selectElement.options.selectedIndex > 0)) {
    alert("Please Choose Timezone");
    return false;
  }
  else {
    return true;
  }
};

formFieldChecker.prototype.isTextareaValid = function() {
  if ((!this.textAreaElement.value) || (this.textAreaElement.value.length < 50)) {
    alert("Please Enter details in about me for about 50 characters");
    return false;
  }
  else {
    return true;
  }
};

formFieldChecker.prototype.isChecked = function() {
  if (!this.recieveChkElement.checked) {
    alert("Please check recieve Notification");
    return false;
  }
  else {
    return true;
  }
};

formFieldChecker.prototype.isLoginIdValid = function() {
  if (!this.loginElement.value) {
    alert("Login id cannot be empty");
    return false;
  }
  else {
    return true;
  }
};

formFieldChecker.prototype.bindEvents = function() {
  var _this = this;
  this.goButtonElement.addEventListener("click",function(event){
    if (!_this.validate()) {
      event.preventDefault();
    }
  });
};
function createFormChecker(getElements) {
  var formChecker = new formFieldChecker(getElements);
  formChecker.bindEvents();
}
var elements = {
  "loginEl" : document.getElementById("loginId"),
  "emailEl" : document.getElementById("email"),
  "nameEl" : document.getElementById("name"),
  "homePageEl" : document.getElementById("HomePage"),
  "selectEl" : document.getElementById("selectBox"),
  "textAreaEl" : document.getElementById("textarea"),
  "goButtonEl" : document.getElementById("button"),
  "recieveChkEl" : document.getElementById("recieveNotification")
}
var URL_PATT = new RegExp("(ftp:\/\/\/|http:\/\/|https:\/\/)(w{3}|[a-zA-Z]*)\.([a-zA-Z]*|\d)\.([a-zA-Z]*|\d|\.([a-zA-Z]*|\d)|\/([a-zA-Z]*|\d))"),
    EMAIL_PATT = new RegExp("([a-z]|\d|.|#|$|)*@([a-z]|\d)*.([a-z][a-z][a-z]|[a-z][a-z].[a-z][a-z])"),
    NAME_PATT = new RegExp("([a-zA-Z][a-zA-Z]*)");
window.onload= createFormChecker(elements);
