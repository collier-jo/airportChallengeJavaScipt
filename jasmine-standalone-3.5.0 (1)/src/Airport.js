class AirPort {
  constructor(maxCap = 1){
    this.dock = [];
    this.maxCap = maxCap;
  }

  landPlane(plane){
    if (this.dock.length === this.maxCap){
      return "This airport is full. Cannot land."
    }
    else {
      return this.dock.push(plane);
    }
  }

  takeOff(plane) {
    return this.dock.splice( this.dock.indexOf(plane), 1 );
  }
}
