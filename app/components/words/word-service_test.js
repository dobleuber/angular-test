describe('myApp.words module', function() {
    beforeEach(module('myApp.words'));

    describe('words service', function() {
        var backend, service, httpBackend;
        beforeEach(inject(function($httpBackend, $http, wordService) {
            httpBackend = $httpBackend;
            httpBackend.when('GET', 'http://randomword.setgetgo.com/get.php')
                .respond('hello');

            backend = $http;
            service = wordService;
        }));

        it('should be get the "hello" word', function(){
            service.get().then(function(response) {
                expect(response.data).toBe('hello');
            });

            httpBackend.flush();
        });
    });
});

