const eyeOpen = document.querySelector(".openEye");
const eyeClose = document.querySelector(".closeEye");
const inputPas = document.querySelector(".input_pas");
const inputName = document.querySelector(".input_name");
const loginBtn = document.querySelector(".btn_login");
const loginZone = document.querySelector(".login_zone");
// register
const openReg = document.querySelector(".openReg");
const closeReg = document.querySelector(".closeReg");
const regPas1 = document.querySelector(".reg_pas1");
const regPas2 = document.querySelector(".reg_pas2");
const regUser = document.querySelector(".reg_user");
const registerZone = document.querySelector(".register_zone");
const btnRegister = document.querySelector(".btn_register");
const register = document.querySelector(".btn-register");
const regEmail = document.querySelector(".reg_number");

const playe = document.querySelector(".player");

let textName = "";
let textPas = "";
let regName = "";
let regEma = "";

let nameRegister = "";
let passwordRegister = "";
let numberRegister = "";

let reg_pas1 = "";
let reg_pas2 = "";

btnRegister.addEventListener("click", () => {
  loginZone.style.display = "none";
  registerZone.style.display = "flex";
});
eyeOpen.addEventListener("click", openPas);
eyeClose.addEventListener("click", closePas);
openReg.addEventListener("click", openPas);
closeReg.addEventListener("click", closePas);
loginBtn.addEventListener("click", btnLogin);

inputName.addEventListener("keyup", (e) => {
  textName = e.target.value;
});

inputPas.addEventListener("keyup", (e) => {
  textPas = e.target.value;
});
regPas1.addEventListener("keyup", (e) => {
  reg_pas1 = e.target.value;
});
regPas2.addEventListener("keyup", (e) => {
  reg_pas2 = e.target.value;
});
regEmail.addEventListener("keyup", (e) => {
  regEma = e.target.value;
});

regUser.addEventListener("keyup", (e) => {
  regName = e.target.value;
});

register.addEventListener("click", () => {
  if (reg_pas1 == reg_pas2 && reg_pas1.length >= 8 && reg_pas2.length >= 8) {
    localStorage.setItem("name", regName);
    localStorage.setItem("pas", reg_pas1);
    localStorage.setItem("email", regEma);
    registerZone.style.display = "none";
    loginZone.style.display = "flex";
    let users = {};
    users.name = regName;
    users.email = regEma;
    users.password = reg_pas1;
    console.log("user=", users);
  } else {
    alert("passwordi boshqattan kiriting");
  }
});

function openPas() {
  eyeOpen.style.display = "none";
  eyeClose.style.display = "block";
  openReg.style.display = "none";
  closeReg.style.display = "block";
  inputPas.setAttribute("type", "text");
  regPas1.setAttribute("type", "text");
  regPas2.setAttribute("type", "text");
}
function closePas() {
  eyeOpen.style.display = "block";
  eyeClose.style.display = "none";
  openReg.style.display = "block";
  closeReg.style.display = "none";
  inputPas.setAttribute("type", "password");
  regPas1.setAttribute("type", "password");
  regPas2.setAttribute("type", "password");
}
function btnLogin() {
  nameRegister = localStorage.getItem("name");
  passwordRegister = localStorage.getItem("pas");
  numberRegister = localStorage.getItem("email");
  if (
    (textName == nameRegister || textName == numberRegister) &&
    textPas == passwordRegister
  ) {
    loginZone.style.display = "none";
    playe.style.display = "block";
  } else {
    alert("notogri login kiritildi");
  }
}
