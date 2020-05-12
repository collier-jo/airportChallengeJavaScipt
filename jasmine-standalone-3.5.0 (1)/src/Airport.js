class AirPort {
  constructor(){
    this.dock = [];
  }

  landPlane(plane){ 
    return this.dock.push(plane);
  }
}
