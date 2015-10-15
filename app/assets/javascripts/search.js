function search() {
var $searchField = $('#idea-search')

    $searchField.on('keyup', function () {
        var searchTerm = this.value.toLowerCase();
        $('.idea').each(function (index, idea) {
            var attribute = $(idea).find('h1, h3').text().toLowerCase();
            var matches = attribute.indexOf(searchTerm) !== -1;
            $(idea).toggle(matches);
        });
    });
}
