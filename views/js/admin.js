document.addEventListener("DOMContentLoad", () => {
  const $menuEle = $("dt");
  $menuEle.addEventListener("click", (event) => {
    $("dd").addClass("hidden");
    $(this).next().removeClass("hidden");
  });
});
$(document).ready(function () {
  $("ul.tabs li").click(function () {
    const tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

function logOut() {
  $.ajax({
    type: "GET",
    url: "/api/users/logout",
    success: function (response) {
      sessionStorage.clear();
      window.location.href = "/";
    },
    error: function (response) {
      alert(response);
    },
  });
}

// 소켓 방 입장
const socket = io.connect("/");
const userRole = "<%= user.role %>";
socket.emit("newRoom", userRole);

socket.on("newOrder", (message) => {
  message = JSON.parse(message);
  console.log(message);
  for (item of message) {
    let {
      userId,
      pcId,
      purchasedItem,
      qty,
      userPoints,
      deductedPoints,
      remainingPoints,
      logTime,
    } = item;
    logTime = new Date(logTime);
    logTime = logTime.toLocaleString("ko-KR");

    let temp_html;
    if (purchasedItem === "이용시간") {
      temp_html = `<p>${logTime}&emsp;PC #${pcId}의 이용시간이 ${qty}시간 결제되었습니다. (차감 포인트: ${deductedPoints}p)</p>`;
    } else {
      temp_html = `<p>${logTime}&emsp;PC #${pcId}이 ${purchasedItem} ${qty}개를 구매하셨습니다. (차감 포인트: ${deductedPoints}p)</p>`;
    }

    $("#logs").prepend(temp_html);
  }
});
