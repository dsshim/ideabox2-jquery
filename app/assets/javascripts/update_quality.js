function thumbsUp() {
  var idea = $(this).parent()
  var quality = $(this).parent().find(".quality");
  if($(quality).text() === "swill") {
    $(quality).text("plausible");
    updateIdeaQuality(idea, 1);
  } else if($(quality).text() === "plausible") {
    $(quality).text("genius")
    updateIdeaQuality(idea, 2);
  };
}

function thumbsDown() {
  var idea = $(this).parent()
  var quality = $(this).parent().find(".quality");
  if($(quality).text() === "genius") {
    $(quality).text("plausible")
    updateIdeaQuality(idea, 1);
  } else if($(quality).text() === "plausible") {
    $(quality).text("swill")
    updateIdeaQuality(idea, 0);
  };
}

function updateIdeaQuality(idea, value) {
  $.ajax({
    url: '/ideas/' + $(idea).attr("id") + "/quality",
    type: 'PUT',
    data: {'quality': value},
  });
}
