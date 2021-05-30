$(".category-links").each(function (i, item) {
  var firstWord = $(item).find(".feature a").text().split(" ")[0];

  $(item)
    .find("#category-list-container a")
    .each(function (i, listItem) {
      $(listItem).prepend(`${firstWord} - `);
    });
});
