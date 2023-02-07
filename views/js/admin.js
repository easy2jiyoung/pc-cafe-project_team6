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

  const xOffset = 50;
  const yOffset = 150;

  $(document).on("mouseover", ".hiddentxt", function (e) {
    //마우스 오버시

    $("body").append(
      "<p id='preview'><img src='" +
        $(this).attr("src") +
        "' width='300px' /></p>"
    ); //보여줄 이미지를 선언

    $("#preview")
      .css("top", e.pageY - xOffset + "px")

      .css("left", e.pageX + yOffset + "px")

      .fadeIn("fast"); //미리보기 화면 설정 셋팅
  });

  $(document).on("mouseout", ".hiddentxt", function () {
    //마우스 아웃시

    $("#preview").remove();
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
