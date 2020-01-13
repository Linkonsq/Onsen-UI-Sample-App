window.fn = {};

window.fn.toggleMenu = function () {
  document.getElementById('appSplitter').left.toggle();
};

window.fn.userMenu = function () {
  document.getElementById('appSplitter').right.toggle();
}

window.fn.loadView = function (index) {
  document.getElementById('sidemenu').close();
  document.getElementById('usermenu').close();
  document.getElementById('appTabbar').setActiveTab(index);
};

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
  }
};

// document.querySelector('ons-back-button').onClick = function (event) {
//   // Reset the whole stack instead of popping 1 page
//   document.querySelector('ons-navigator').resetToPage('reportLandingPage.html');
// };

window.fn.login = function () {
  document.getElementById('appNavigator').pushPage("home_splitter.html");
};

window.fn.logout = function () {
  document.getElementById('usermenu').close().then(function () {
    document.getElementById('appNavigator').popPage();
  });
};

window.fn.logoutMember = function () {
  document.getElementById('popover-dialog').hide();
  document.getElementById('appNavigator').resetToPage("login.html", { animation: 'fade' });
  //document.getElementById('appNavigator').pushPage("login.html");
  //document.getElementById('appNavigator').popPage();
};

window.fn.showDialog = function (id) {
  var infoButton = document.getElementById('info-button');
  var elem = document.getElementById(id);
  elem.show(infoButton);
};

window.fn.hideDialog = function (id) {
  document.getElementById(id).hide();
};

///////////
window.fn.memberMenu = function () {
  document.getElementById('appSplitter').right.toggle();
};

window.fn.manpower = function () {
  document.getElementById('myNavigator').pushPage("member_splitter.html");
};

window.fn.loadPage = function (page) {
  // document.querySelector('#sideMenu').close();
  document.querySelector('#appNavigator').bringPageTop(page, { animation: 'fade' });
};

window.fn.planReports = function () {
  document.getElementById('abc').popPage();
};
/////////////

window.fn.open = function () {
  var menu = document.getElementById('usermenu');
  menu.open();
};