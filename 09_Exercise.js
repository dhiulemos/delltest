//  Item 1

var colors = ["purple", "green", "orange"];

$(`.bottom-offset-small a`).on("click", function (e) {
  e.preventDefault();
  var index = $(this).parent().index();
  var color = colors[index];

  var categoryText = $(this).text().trim().split(" ")[0];

  $(".row")
    .find(`h2.text-white:contains('${categoryText}')`)
    .closest(".half-hero-outer-container")
    .find(".half-image-module")
    .css("background-color", color);
});

// Item 2

var imagesNetworking = [];

$(".row").each(function (i, item) {
  var sectionTitle = $(item).find("h2.text-white");
  if (sectionTitle.text() == "Networking") {
    $(item)
      .find(".half-inner-module-image img")
      .each(function (i, imageItem) {
        imagesNetworking.push($(imageItem));
      });
  } else if (sectionTitle.text() == "Cameras, Photo & Video") {
    $(item)
      .find(".half-inner-module-image img")
      .each(function (i, imageItem) {
        $(imagesNetworking[i]).attr("src", $(imageItem).attr("src"));
      });
  }
});

// Item 3

(function () {
  var sum = 0;
  $(".row").each(function (i, item) {
    var sectionTitle = $(item).find("h2.text-white");

    if (sectionTitle.text() == "Power, Batteries & Adapters") {
      $(item)
        .find(".half-hero-pricing")
        .each(function (i, priceItem) {
          sum += parseFloat($(priceItem).text().split("$").pop());
          console.log(sum);
        });
    }
  });

  return alert(`Total Price: ${sum}`);
})();
