export interface Robot {
    fight();
    fly();
}

export class Megaman implements Robot {

    fight() {
       console.log("Megaman can Fight")
    }

    fly() {
        console.log("Megaman can't Fly")
    }
}

export class Protoman implements Robot {

    fight() {
        console.log("Protoman can Fight")
    }
    fly() {
        console.log("Protoman can't Fly")
    }
}