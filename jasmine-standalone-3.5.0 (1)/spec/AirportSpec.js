describe("An Airport", function() {

  var airPort;

  beforeEach(function () {
    airPort = new AirPort();
  });

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
  });

  describe("When a plane lands", function() {
    it("Pushes plane into dock array", function() {
      airPort.landPlane(plane)
      expect(airPort.dock).toContain(plane);
    });
  });

  describe("When a plane takes off", function () {
    it("Deletes plane from dock array", function () {
      airPort.takeOff(plane)
      expect(airPort.dock).not.toContain(plane);
    });
  });

});
