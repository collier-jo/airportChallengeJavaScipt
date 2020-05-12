class AirPort {
  constructor(){
    this.dock = [];
  }

  landPlane(plane){
    return this.dock.push(plane);
  }

  takeOff(plane) {
    return this.dock.splice( this.dock.indexOf(plane), 1 );
  }
}
