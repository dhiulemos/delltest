var listItems = "";
var completeHref = "";

$(".anavmfe__accordion__item").each(function (i, item) {
  var href = window.location.origin;
  var itemName = $(item).find(".anavmfe__accordion__item__name").text();
  var inputItems = $(item).find(".anavmfe__accordion__row_item");

  inputItems.each(function (i, item) {
    if (i == 0) {
      completeHref = $(item).find("a").attr("href");
    } else {
      completeHref += "," + $(item).find("input").val();
    }
  });

  listItems += `<li style="margin-right: 10px;"><a href="${href}${completeHref}">${itemName}</a></li>`;
});

$("#cat-cards").prepend(
  `<ul class="cat-fran-links" style="width: 100%; display: flex; flex-wrap: wrap; list-style: none; margin-bottom: 10px;">${listItems}</ul>`
);
