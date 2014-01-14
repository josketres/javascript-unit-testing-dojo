function AutoComplete(inputId) {

	var scope = this;

	this.input = $(inputId);

	this.names = [];

	this.initNames = function() {
		var that = this;
		$.get("ajax/names", function(data) {
			that.names.push(data);
		});
	}

	this.getMatch = function(pattern) {

	};

	$(this.input).keypress(function(event) {
		var pattern = $(this).val() + String.fromCharCode(event.charCode);
		var match = scope.getMatch(pattern);
		if (match) {
			event.preventDefault();
			$(this).val(match);
		}
	});
}