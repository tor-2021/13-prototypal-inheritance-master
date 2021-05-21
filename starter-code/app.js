class FarmAnimal {
  constructor(name, image){
    this.name = name;
    this.image = image;
  }

  talk() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Cow extends FarmAnimal {
  constructor(name, image, color){
    super(name, image)
    this.color = color;
    this.sound = "Moo!!!"
  }  
}

class Longhorn extends Cow {
  constructor(name, image, color) {
    super(name, image, color)
    this.type = "longhorn";
  }
}

class Angus extends Cow {
  constructor(name, image, color) {
    super(name, image, color)
    this.type = "angus"
  }  
}

class Camel extends FarmAnimal {
  constructor(name, image, noise) {
    super(name, image) 

    this.noise = noise;
  }
}

var longhorn = new Longhorn(
  "Schmitty Longhorn", 
  "https://image.shutterstock.com/image-vector/vector-illustration-head-longhorn-steer-260nw-680562982.jpg",
  "brown"
  )

var angus = new Angus(
  "Ashley Angus",
  "http://afs.okstate.edu/breeds/cattle/angus/images/angus-web-1.jpg/image_preview",
  "black"
)

$(() => {
  $farmDiv = $('.farm');

  $longhornDiv = $(
    `<div class="animal">
        <h1>${longhorn.talk()}</h1>
        <img src=${longhorn.image} />
      </div>
    `)

  $longhornDiv.on('click', (e) => {
    e.preventDefault()
    console.log(e)
    console.log($(this))
    alert(longhorn.talk())
  })

  $angusDiv = $(
    `<div class="animal">
        <h1>${angus.talk()}</h1>
        <img src=${angus.image} />
      </div>
    `
  )

  $farmDiv
    .append($longhornDiv)
    // .append($angusDiv)
})

// class Vehicle {
//   constructor(color, name) {
//     this.color = color;
//     this.name = name;
//   }
// }

// class Car extends Vehicle {
//   constructor(color, model) {
//     super(color)
    
//     this.name = name;
//     this.model = model;
//   }

//   drive(){
//     console.log(`${this.model} is driving`);
//   }
// }

// Car.prototype.drive = function() {
//   console.log(`${this.model} is driving.`)
// }

// var car = new Car("black", "Edge");
// var car2 = new Car("white", "Optima");


// console.log("working")

// function Vehicle(color) {
//   this.color = color;
// } 

// var car = new Vehicle('red');

// function House(name, region) {
//   this.name = name;
//   this.region = region;
// }

// House.prototype.yell = function() {
//   console.log(`We are the ${this.name}s of ${this.region}`);
// }

// var stark = new House("Stark", "Winterfell");
// var lannister = new House("Lannister", "Casterly Rock");
// var targaryen = new House("Targaryen", "King's Landing");