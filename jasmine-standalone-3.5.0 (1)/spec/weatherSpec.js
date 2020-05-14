describe("Weather", () => {

    var weather;
    var airPort

    beforeEach(function () {
        weather = new Weather(); 
        airPort = jasmine.createSpy('airport');
    });

    describe("Weather checker", () => {
        it('Returns false if below 90', () => {
            spyOn(Math, 'random').and.returnValue(0.05);
            
            expect(weather.weatherChecker()).toEqual(false)
        });
    });

    describe("Weather checker", () => {
        it('Returns true if above 90', () => {
            spyOn(Math, 'random').and.returnValue(0.99);
            
            expect(weather.weatherChecker()).toEqual(true)
        });
    });


});