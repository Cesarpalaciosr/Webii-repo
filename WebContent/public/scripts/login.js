var loginForm = document.getElementById("data-form");
var API_url = window.location.origin+"/Proyecto_Web_II_Cesar/Login";

loginForm.addEventListener("submit", send);

async function send(e) {
  e.preventDefault();
  var data = {};
  var form = new FormData(loginForm);
  for (var pair of form.entries()) {
    data[pair[0]] = pair[1];
  }
  console.log(data);

  var res = await fetch(API_url, {
    method: "POST", // or 'PUT'
    body: form,
  }).catch((error) => console.error("Error:", error));
  var response = await res.json();

  if (response.status == 200) {
    window.location = window.location.origin + "/Proyecto_Web_II_Cesar/public/views/dashboard.html";
    alert("No se coincidieron los datos");
  }
}
