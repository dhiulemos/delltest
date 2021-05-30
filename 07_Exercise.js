$("a.play.overlay-video-trigger").on("click", function () {
  $(window).on("hashchange", function () {
    setTimeout(function () {
      $("#vjs_video_3_html5_api").trigger("pause");
    }, 1000);
  });
});
