describe('AutoComplete', function() {
	var autoComplete;

	beforeEach(function() {
		var fixtures = jasmine.getFixtures();
		fixtures.set(fixtures.sandbox());
		$('<input id="name">').appendTo('#sandbox');
		autoComplete = new AutoComplete('#name');
	});

	it('should set value and prevent default if a match is found', function() {
		spyOn(autoComplete, 'getMatch').andReturn('monique');
		spyOnEvent($('#name'), 'keypress');
		$('#name').trigger($.Event('keypress', {
			charCode: 109
		}));
		expect(autoComplete.getMatch).toHaveBeenCalledWith('m');
		expect($('#name')).toHaveValue('monique');
		expect('keypress').toHaveBeenPreventedOn($('#name'));
	});

	describe('initNames', function() {
		var request, response;

		beforeEach(function() {
			jasmine.Ajax.useMock();
			autoComplete.initNames();
			request = mostRecentAjaxRequest();
			response = {
				status: 200,
				contentType: "text/html",
				responseText: "monique"
			};
			request.response(response);
		});

		it('should set names loaded from server', function() {
			expect(request.url).toBe('ajax/names');
			expect(autoComplete.names).toEqual(['monique']);
		});
	});

});