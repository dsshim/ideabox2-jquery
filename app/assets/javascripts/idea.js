$(document).ready(function() {
  search()
  $("#new-idea-form").submit(createIdea);
  $(".thumbsup").click(thumbsUp);
  $(".thumbsdown").click(thumbsDown);
  $(".delete").click(deleteIdea);
});
