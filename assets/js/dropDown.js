$(".actions").on("click", function (e) {
  $("._actionArea .actions").removeClass("active");
  let $this = $(this);
  if ($this.hasClass("active")) {
    $this.removeClass("active");
  } else {
    $this.addClass("active");
  }
});
