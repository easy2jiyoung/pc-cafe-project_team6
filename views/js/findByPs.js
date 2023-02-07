document.addEventListener("DOMContentLoaded", () => {
  const input_name = document.querySelector("input[type=text][id=name]");
  const input_nameError = document.querySelector("div[id=nameError]");
  const input_id = document.querySelector("input[type=text][id=id]");
  const input_IdError = document.querySelector("div[id=IdError]");
  const input_phone = document.querySelector("input[type=text][id=phone]");
  const input_phoneCheckError = document.querySelector(
    "div[id=phoneCheckError]"
  );

  const re_CheckId = /^[a-zA-Z0-9]{4,12}$/;
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
