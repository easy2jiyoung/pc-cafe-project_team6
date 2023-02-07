document.addEventListener("DOMContentLoaded", () => {
  const input_name = document.querySelector("input[type=text][id=name]");
  const input_nameError = document.querySelector("div[id=nameError]");
  const input_phone = document.querySelector("input[type=text][id=phone]");
  const input_phoneCheckError = document.querySelector(
    "div[id=phoneCheckError]"
  );
  console.log(input_name);
  console.log(input_nameError);
  console.log(input_phone);
  console.log(input_phoneCheckError);

  const re_CheckPhone = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;

  input_name.addEventListener("keyup", (event) => {
    const inputed_name = event.currentTarget.value.length;
    if (inputed_name > 0) {
      input_nameError.textContent = "";
    } else {
      input_nameError.style.color = "red";
      input_nameError.textContent = "이름을 입력해 주세요";
    }
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
