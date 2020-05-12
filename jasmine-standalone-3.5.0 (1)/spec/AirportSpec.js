describe("An Airport", function() {

  var airPort;

  beforeEach(function () {
    airPort = new AirPort();
  });

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
  });

  beforeEach(function() {
    plane2 = jasmine.createSpy('plane');
  });

  describe("When a plane lands", function() {
    it("Pushes plane into dock array", function() {
      airPort.landPlane(plane)
      expect(airPort.dock).toContain(plane);
    });
  });

  describe("When cap is full", function(){
    it("Doesnt dock plane", function(){
      airPort.landPlane(plane)
      airPort.landPlane(plane2)
      
      expect(airPort.dock.length).toBe(1); 
    });
  });

  describe("When a plane takes off", function () {
    it("Deletes plane from dock array", function () {
      airPort.takeOff(plane)
      expect(airPort.dock).not.toContain(plane);
    });
  });



});
