function createIdea(event) {
  event.preventDefault();
  postIdeaInfo();
}

function ideaInfo() {
  return {
    idea: {
      title: $("#title-field").val(),
      body:  $("#body-field").val()
    }
  };
}

function postIdeaInfo() {
  $.post("/ideas", ideaInfo(), function(data) {
    $("#ideas").prepend(data);
    clearField();
  });
}

function clearField() {
   $("#title-field").val("");
   $("#body-field").val("");
}

// function editIdea(event) {
//   event.preventDefault();
//   editIdeaInfo();
// }
//
// function editIdeaInfo() {
//   $.put("/idea", ideaInfo(), function(data) {
//
//   });
// }
