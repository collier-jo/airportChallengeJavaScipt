## Airport Challenge ##

User Story:
------

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


Domain Model:
----
object              | messages

traffic_controller  |
                    |

weather             | self.weatherChecker
                        - rand(1..100)
                          if >= 80 return Stormy
                          else return Sunny

airport             | Constructed:(maxCap = 10)
                        - docked = []
                        - this.maxCap = maxCap
                        - this.weather = Weather

                    | .land_plane(Plane.new)
                        - if docked.length = this.maxCap
                        - docked << Plane.new unless docked.length === this.maxCap

                    | .take_off(Plane.new)
                        - if weather === stormy and plane is still dock
                        - if stormy?
                        - docked.delete(plane)
                        dock.splice( dock.indexOf('plane2'), 1 );

                      ._Isstormy
                          - this.weather.weather_check === 'stormy'

                          stormy === stormy - true - no take off
                          false == take off 
                        

- when weather - stormy 
- plane is still in array ?
- it returns - "NO !" > Raise error???




                        Draft testing for weather mock
                            var mock_weather, weather_checker = null;

                            mock_weather = {
                              weather_checker(value): function() {
                                return value;
                              }
                            };

                            spyOn(mock_weather, 'weather_checker')
                              mock_weather.weather_checker("Stormy");
                            });  


