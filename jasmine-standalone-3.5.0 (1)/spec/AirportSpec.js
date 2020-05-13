"use strict";


describe("An Airport", function() {

  var airPort;

  beforeEach(function () {
    airPort = new AirPort();
  });

  beforeEach(function() {
    var plane = jasmine.createSpy('plane');
  });

  describe("When a plane lands", function() {
    it("Pushes plane into dock array", function() {
      airPort.landPlane(plane)
      expect(airPort.dock).toContain(plane);
    });
  });

  describe("When cap is full", function(){
    var plane2 = jasmine.createSpy('plane');
    it("Doesnt dock plane", function(){
      airPort.landPlane(plane)
      airPort.landPlane(plane2)
      
      expect(airPort.dock.length).toBe(1); 
    });
  });
  

  describe("When a plane takes off", function () {
    beforeEach(function(){
      spyOn(airPort, 'isStormy').and.returnValue(false);
   });    

    it("Deletes plane from dock array", function () {
      airPort.landPlane(plane)    
      airPort.takeOff(plane)
      expect(airPort.dock).not.toContain(plane);
      
    });
  });

  describe("Random number/ weather generator", function(){
    it("Above 90 returns true (i.e. Stormy) ", function(){
      spyOn(Math, 'random').and.returnValue(99);
      console.log(airPort.isStormy());
      expect(airPort.isStormy()).toEqual(true);  
    });
  });

  describe("Random number/ weather generator", function(){
    it("Below 90 returns false (i.e. Sunny) ", function(){
      spyOn(Math, 'random').and.returnValue(0.05);
      console.log("This should be false");
      console.log(airPort.isStormy());
      expect(airPort.isStormy()).toEqual(false);  
    });
  });


// If rand number is out of range of 99 and then this test was work 

  describe("Stormy", function(){
    beforeEach(function(){
      spyOn(airPort, 'isStormy').and.returnValue(false);
   });
    it("Returns false", function(){
      expect(airPort.isStormy()).toEqual(false);
    });
  });


  // WE ARE TESTING WHEN STROMY === TRUE > PLANE DOESNT TAKE OFF 

  describe("When weather is stormy", function() { 

       beforeEach(function(){
         spyOn(airPort, 'isStormy').and.returnValue(true);
      });

      it("Keeps plane in array", function() {
      airPort.landPlane(plane)
      airPort.takeOff(plane)
      expect(airPort.dock).toContain(plane);
    });
  });
});

