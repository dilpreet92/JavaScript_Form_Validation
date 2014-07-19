function formFieldChecker() {};
formFieldChecker.prototype.validate = function() {
  if(!loginEl.value) {
    alert("Login id cannot be empty");
    return false;
  }
  else if ((!emailEl.value) || (!emailpatt.test(emailEl.value))) {
    alert("Invaild Email id");
    return false;
  }
  else if ((!nameEl.value) || (!namepatt.test(nameEl.value))) {
    alert("Invaild name");
    return false;
  }
  else if (!(selectEl.options.selectedIndex > 0)) {
    alert("Please Choose Timezone");
    return false;
  }
  else if ((!homePageEl.value) || (!urlpatt.test(homePageEl.value))) {
    alert("Please Enter valide Home Page URl");
  }
  else if ((!textareaEl.value) || (textareaEl.value.length < 50)){
    alert("Please Enter details in about me for about 50 characters");
    return false;
  }
  else if (!recieveChkEl.checked) {
    alert("Please check recieve Notification");
    return false;
  }
  return true;
};
formFieldChecker.prototype.bindEvents = function() {
  var _this = this;
  goButtonEl.addEventListener("click",function(e){
    var result = _this.validate();
    if(!result) {
      e.stopPropagation();
    }
  });
};
function createFormChecker() {
  var formChecker = new formFieldChecker();
  formChecker.bindEvents();
}
var loginEl = document.getElementById("loginId"),
    emailEl = document.getElementById("email"),
    nameEl = document.getElementById("name"),
    homePageEl = document.getElementById("HomePage"),
    selectEl = document.getElementById("selectBox"),
    textareaEl = document.getElementById("textarea"),
    goButtonEl = document.getElementById("button"),
    recieveChkEl = document.getElementById("recieveNotification"),
    urlStr ="(ftp:\/\/\/|http:\/\/|https:\/\/)(w{3}|[a-zA-Z]*)\.([a-zA-Z]*|\d)\.([a-zA-Z]*|\d|\.([a-zA-Z]*|\d)|\/([a-zA-Z]*|\d))",
    urlpatt = new RegExp(urlStr),
    emailStr = "([a-z]|\d|.|#|$|)*@([a-z]|\d)*.([a-z][a-z][a-z]|[a-z][a-z].[a-z][a-z])",
    emailpatt = new RegExp(emailStr),
    nameStr = "([a-zA-Z][a-zA-Z]*)",
    namepatt = new RegExp(nameStr);
window.onload= createFormChecker();
