console.log(
  "%c STOP!\n%c You will not be able to login without proper authentication",
  "color: red; font-size: 151px;",
  "color: red; font-size:15px;"
);

var firebaseConfig = {
  apiKey: "AIzaSyB20xE9WTCMI4GRb_Ye1JVk3cZzTW7KoD8",
  authDomain: "taj-jewellery.firebaseapp.com",
  databaseURL: "https://taj-jewellery.firebaseio.com",
  projectId: "taj-jewellery",
  storageBucket: "taj-jewellery.appspot.com",
  messagingSenderId: "615734836209",
  appId: "1:615734836209:web:1b5cc9318f966964d12250",
  measurementId: "G-M4YTDZJRNS",
};
firebase.initializeApp(firebaseConfig), firebase.analytics();
var db = firebase.firestore(),
  lls = "localStorage";
const gtitlsta = "getItem('loginStatus')";
var d = new Date($.now());
let dnt =
  d.getDate() +
  ":" +
  d.getMonth() +
  ":" +
  d.getFullYear() +
  ":" +
  d.getHours() +
  ":" +
  d.getMinutes() +
  ":" +
  d.getSeconds();
function checkBox() {
  return !!$("#viewer").prop("checked");
}
function loginLogs(e) {
  db.collection("login-logs")
    .doc(dnt)
    .set({ A_loginMedium: e, B_timeDate: dnt })
    .then(function (t) {
      "Admin" == e
        ? (localStorage.setItem("loginStatus", !0),
          window.location.replace("administrator/"))
        : (localStorage.setItem("viewerStatus", !0),
          window.location.replace("administrator/"));
    })
    .catch(function (e) {
      alert(e), errorShow("body", e);
    });
}
"true" == lls.gtitlsta
  ? window.location.replace("administrator/")
  : $("#btn-submit").click(function () {
      let e = $("#username").val(),
        t = $("#password").val();
      checkBox()
        ? db
            .collection("viewer")
            .get()
            .then(function (a) {
              a.forEach(function (a) {
                e == a.data().username && t == a.data().password
                  ? loginLogs("Viewer")
                  : alert("Enter valid info!");
              });
            })
        : db
            .collection("admin")
            .get()
            .then(function (a) {
              a.forEach(function (a) {
                e == a.data().username && t == a.data().password
                  ? loginLogs("Admin")
                  : alert("Enter valid info!");
              });
            });
    });
