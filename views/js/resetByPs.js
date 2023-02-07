document.addEventListener("DOMContentLoaded", () => {
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

  const re_CheckPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,15}$/;

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
});
