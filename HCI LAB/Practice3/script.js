const inputText = document.getElementById("inputText")
const inputPassword = document.getElementById("inputPassword")
const inputNumber = document.getElementById("inputNumber")
const inputEmail = document.getElementById("inputEmail")
const inputGenderMale = document.getElementById("inputRadioMale")
const inputGenderFemale = document.getElementById("inputRadioFemale")
const buttonSubmit = document.getElementById("buttonSubmit")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")
buttonSubmit.addEventListener("click",(event)=>{
    //cancel refresh
    event.preventDefault()

    // tabngkap error ke layar
    var errorText = ""
    // text harus diisi
    const text = inputText.value
    if (text =="") {
        // console.log("name harus diisi")
        errorText = "name harus diisi <br>"
    }
    // password minimal 8 karakter
    const password = inputPassword.value
    if (password.length < 8) {
        // console.log("password minimal 8 karakter")
        errorText += "password minimal 8 karakter <br>"
    }

    // number minimal 17
    const number = inputNumber.value
    if (number < 17 ) {
        errorText += "masih dibawah umur <br>"
    }

    // email harus ada @gmail.com
    const email = inputEmail.value
    if (!email.includes("@gmail.com")) {
        errorText += "harus email <br>  "
    }

    // validasi gender,harus dipilih
    const genderMale = inputGenderMale.checked
    const genderFemale = inputGenderFemale.checked
    if (!genderMale && !genderFemale) {
        errorText += "gender harus diisi"
    }

    if (errorText == "") {
        alert("berhasil registrasi")
    }


    divError.innerHTML = errorText  
})