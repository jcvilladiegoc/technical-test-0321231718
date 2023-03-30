import { Base } from "./base";

export class Room extends Base<Room>  {

    _roomNumber: number = 0;
    _basisCost: number = 0;
    _tax: number = 0;
    _typeOfRoom: 'simple' | 'double' | 'familiar' = 'simple';
    _location: string = '';

    override clone() {
        const room = new Room();
        Object.assign(room, this);
        return room;
    }

    get roomNumber(): number {
        return this._roomNumber;
    }

    set roomNumber(value: number) {

        if (value < 1) {
            throw new Error("The roomNumber property must be mayor o equal to 1.");
        }

        this._roomNumber = value;

    }

    get basisCost(): number {
        return this._basisCost;
    }

    set basisCost(value: number) {

        if (value < 1) {
            throw new Error("The basisCost property must be mayor o equal to 1.");
        }

        this._basisCost = value;

    }

    get tax(): number {
        return this._tax;
    }

    set tax(value: number) {

        if (value < 1) {
            throw new Error("The tax property must be mayor o equal to 1.");
        }

        this._tax = value;

    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {

        if (!value) {
            throw new Error("The location property cannot be empty.");
        }

        this._location = value;

    }

    get typeOfRoom(): 'simple' | 'double' | 'familiar' {
        return this._typeOfRoom;
    }

    set typeOfRoom(value: 'simple' | 'double' | 'familiar') {

        if (!value) {
            throw new Error("The typeOfRoom property cannot be empty.");
        }

        this._typeOfRoom = value;

    }

}
