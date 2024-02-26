class Rectangle {
    private length : number;
    private width : number;
    constructor (length: number, width: number){
        this.length = length
        this.width = width
    }

    area(){return this.length*this.width;}
}

let reg = new Rectangle(20,35)
console.log(reg.area())