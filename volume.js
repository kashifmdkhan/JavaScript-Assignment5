class Cylinder{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
        this.volume = ((22/7)*radius*radius*height).toFixed(4);
    }

    getVolume(){
        return this.volume;
    }
}
class Sphere{
    constructor(radius){
        this.radius = radius;
        this.volume = ((4/3)*(22/7)*radius*radius*radius).toFixed(4);
    }

    getVolume(){
        return this.volume;
    }
}

class Cone{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
        this.volume = ((1/3)*(22/7)*radius*radius*height).toFixed(4);
    }

    getVolume(){
        return this.volume;
    }
}

let obj = new Cylinder(5,4);
console.log(obj.getVolume());

let obj1 = new Sphere(5);
console.log(obj1.getVolume());

let obj2 = new Cone(5,4);
console.log(obj2.getVolume());
