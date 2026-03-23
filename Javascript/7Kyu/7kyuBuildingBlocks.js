class Block{

  constructor(data){
    
    let width = data[0];
    let length = data[1];
    let height = data[2];

    this.width = width;
    this.length = length;
    this.height = height;
    
    
    this.getWidth = function(){return width}
    this.getLength = function(){return length}
    this.getHeight = function(){return height}
    this.getVolume = function(){return length * width * height}
    this.getSurfaceArea = function(){return 2 * ((width * length) + (width * height) + (length * height))}
  }
  
  // ...
  
}