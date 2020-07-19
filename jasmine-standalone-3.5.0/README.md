# Airport Challenge 

## Motivation 
First proper JS project! The main aim for this project is to understand the basics of JS such as string, arrays, OOP, private methods, injections. 

Alongside learning the language itself, learning a new testing framework.

## Tech Stack
- Javascript 
- Jasmine 

## User Story:

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

Primary aims
----
Planes can land and take off provided that the weather is sunny.
If the weather is stormy the planes cannot take off.
Planes cannot land if the airport is full.

Edge cases
-----

Planes that are landed cannot land again and must be in an airport.
Ensuring that planes can only take off from airports they are in.
Planes that are already flying cannot take off and/or be in an airport.


Domain Model:
----
object              | messages|
|-------------------|-----------|
|weather          | self.weatherChecker|
||- rand(1..100)|
||if >= 80 return Stormy|
||else return Sunny|
|airport             | Constructed:(maxCap = 10)
||- docked = []|
||- this.maxCap = maxCap|
|| - this.weather = Weather|
|| .land_plane(Plane.new)|
||- if docked.length = this.maxCap|
||- docked << Plane.new unless docked.length === this.maxCap|
||*** triggers take off for plane class (self)|
|| .take_off(Plane.new)|
||- if weather === stormy and plane is still dock|
|| - if stormy?|
||- docked.delete(plane)|
||dock.splice( dock.indexOf('plane2'), 1 );|
||._Isstormy|
||- this.weather.weather_check === 'stormy'|
||-stormy === stormy - true - no take off|
||-false == take off |
|plane               ||
||land (airport) => |
||                      raise error if plane is not flying|
||                    raise error if plane airport and airport do not match  |
||                 plane locatopm === airport                     |
||                 ** triggers take off for plane class (self )|
||               take-off |
||              error raised if airport calling is not assigned to plane |
||              raise error if airport is flying |
||             ** triggers take off for plane class (self )|

*** All being called from the plane side                       

