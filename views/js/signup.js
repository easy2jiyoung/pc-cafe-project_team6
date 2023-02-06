document.addEventListener("DOMContentLoaded", () => {
  const input_email = document.querySelector("input[type=text][id=email]");
  const input_emailError = document.querySelector("div[id=emailError]");
  const input_name = document.querySelector("input[type=text][id=name]");
  const input_nameError = document.querySelector("div[id=nameError]");
  const input_id = document.querySelector("input[type=text][id=id]");
  const input_IdError = document.querySelector("div[id=IdError]");
  const input_password = document.querySelector(
    "input[type=password][id=password]"
  );
  const input_passwordError = document.querySelector("div[id=passwordError]");
  const input_passwordCheck = document.querySelector(
    "input[type=password][id=passwordCheck]"
  );
  const input_passwordCheckError = document.querySelector(
    "div[id=passwordCheckError]"
  );
  const input_phone = document.querySelector("input[type=text][id=phone]");
  const input_phoneCheckError = document.querySelector(
    "div[id=phoneCheckError]"
  );

  const re_CheckEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const re_CheckId = /^[a-zA-Z0-9]{4,12}$/;
  const re_CheckPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,15}$/;
  const re_CheckPhone = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;

  input_email.addEventListener("keyup", (event) => {
    const inputed_email = event.currentTarget.value;
    if (re_CheckEmail.test(inputed_email)) {
      input_emailError.style.color = "green";
      input_emailError.textContent = `이메일 형식입니다: ${inputed_email}`;
    } else {
      input_emailError.style.color = "red";
      input_emailError.textContent = `이메일 형식이 아닙니다: ${inputed_email}`;
    }
  });
  input_name.addEventListener("keyup", (event) => {
    const inputed_name = event.currentTarget.value.length;
    if (inputed_name > 0) {
      input_nameError.textContent = "";
    } else {
      input_nameError.style.color = "red";
      input_nameError.textContent = "이름을 입력해 주세요";
    }
  });
  input_id.addEventListener("keyup", (event) => {
    const inputed_Id = event.currentTarget.value;
    if (re_CheckId.test(inputed_Id)) {
      input_IdError.textContent = "";
    } else {
      console.log(re_CheckId.test(inputed_Id));
      input_IdError.style.color = "red";
      input_IdError.textContent = "ID는 4~12 자까지 가능합니다.";
    }
  });
  input_password.addEventListener("keyup", (event) => {
    const inputed_password = event.currentTarget.value;
    if (re_CheckPassword.test(inputed_password)) {
      input_passwordError.style.color = "green";
      input_passwordError.textContent = "올바른 비밀번호 형식입니다.";
    } else {
      input_passwordError.style.color = "red";
      input_passwordError.textContent =
        "비밀번호는 8 ~ 15자 영대소문자, 숫자, 특수문자 조합입니다.";
    }
    input_passwordCheck.addEventListener("keyup", (event) => {
      const inputed_passwordCheck = event.currentTarget.value;
      if (inputed_password === inputed_passwordCheck) {
        input_passwordCheckError.style.color = "green";
        input_passwordCheckError.textContent = "비밀번호와 일치합니다.";
      } else {
        input_passwordCheckError.style.color = "red";
        input_passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
      }
    });
  });
  input_phone.addEventListener("keyup", (event) => {
    const inputed_phone = event.currentTarget.value;
    if (re_CheckPhone.test(inputed_phone)) {
      input_phoneCheckError.style.color = "green";
      input_phoneCheckError.textContent = "올바른 휴대폰 번호 형식입니다.";
    } else {
      input_phoneCheckError.style.color = "red";
      input_phoneCheckError.textContent =
        "휴대폰 번호를 숫자, -을 포함해 휴대전화 번호 형식에 맞게 입력해주세요.";
    }
  });
});
