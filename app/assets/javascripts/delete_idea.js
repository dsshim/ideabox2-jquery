function deleteIdea(event) {
  var idea = $(this).parent();
  var ideaId = $(this).parent().attr("id");

  $.ajax({
    url: "/ideas/" + ideaId,
    type: 'DELETE',
    success: function(result) {
      $(idea).remove();
    }
  });
}
