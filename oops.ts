export class Car {

    constructor(
        private speed?: number,
        private rpm: number=20,
        private brand?: string
    ) { } 

    speedUp(speed: number = 10) { 
         this.speed = speed + (this.rpm += 10)
         console.log(speed)
    }

    whatsBrand() {
        return this.brand
    }
}


let cr = new Car() 
cr.speedUp()
