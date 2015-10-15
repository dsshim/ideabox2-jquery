function thumbsUp() {
  var idea = $(this).parent()
  var quality = $(this).parent().find(".quality");
  if($(quality).text() === "Swill") {
    $(quality).text("Plausible");
    updateIdeaQuality(idea, 1);
  } else if($(quality).text() === "Plausible") {
    $(quality).text("Genius")
    updateIdeaQuality(idea, 2);
  };
}

function thumbsDown() {
  var idea = $(this).parent()
  var quality = $(this).parent().find(".quality");
  if($(quality).text() === "Genius") {
    $(quality).text("Plausible")
    updateIdeaQuality(idea, 1);
  } else if($(quality).text() === "Plausible") {
    $(quality).text("Swill")
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
