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
