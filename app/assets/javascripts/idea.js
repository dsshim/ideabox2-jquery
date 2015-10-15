$(document).ready(function() {
  search()
  $("#new-idea-form").submit(createIdea);
  // $("#edit-idea-form").submit(editIdea);
  $(".thumbsup").click(thumbsUp);
  $(".thumbsdown").click(thumbsDown);
  $(".delete").click(deleteIdea);
});


// function createIdea(event) {
//   event.preventDefault();
//   postIdeaInfo();
// }
//
// function deleteIdea(event) {
//   var idea = $(this).parent();
//   var ideaId = $(this).parent().attr("id");
//
//   $.ajax({
//     url: "/ideas/" + ideaId,
//     type: 'DELETE',
//     success: function(result) {
//       $(idea).remove();
//     }
//   });
// }
//
// function thumbsUp() {
//   var idea = $(this).parent()
//   var quality = $(this).parent().find(".quality");
//   if($(quality).text() === "swill") {
//     $(quality).text("plausible");
//     updateIdeaQuality(idea, 1);
//   } else if($(quality).text() === "plausible") {
//     $(quality).text("genius")
//     updateIdeaQuality(idea, 2);
//   };
// }
//
// function thumbsDown() {
//   var idea = $(this).parent()
//   var quality = $(this).parent().find(".quality");
//   if($(quality).text() === "genius") {
//     $(quality).text("plausible")
//     updateIdeaQuality(idea, 1);
//   } else if($(quality).text() === "plausible") {
//     $(quality).text("swill")
//     updateIdeaQuality(idea, 0);
//   };
// }
//
// function updateIdeaQuality(idea, value) {
//   $.ajax({
//     url: '/ideas/' + $(idea).attr("id") + "/quality",
//     type: 'PUT',
//     data: {'quality': value},
//   });
// }
//
// function clearField() {
//    $("#title-field").val("");
//    $("#body-field").val("");
// }
//
// function search() {
// var $searchField = $('#idea-search')
//
//     $searchField.on('keyup', function () {
//         var searchTerm = this.value.toLowerCase();
//         $('.idea').each(function (index, idea) {
//             var attribute = $(idea).find('h1, h3').text().toLowerCase();
//             var matches = attribute.indexOf(searchTerm) !== -1;
//             $(idea).toggle(matches);
//         });
//     });
// }
