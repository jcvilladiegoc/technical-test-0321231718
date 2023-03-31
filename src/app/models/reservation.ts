import { Base } from "./base";
import { Room } from "./room";
import { Traveler } from "./traveler";

export class Reservation extends Base<Reservation> {

    private _room: Room = null!;
    private _fromDate: Date = new Date();
    private _toDate: Date = new Date();
    private _paid: boolean = false;
    private _traveler: Traveler = null!;

    constructor() {
        super();
        this.addRequiredProperty('room');
        this.addRequiredProperty('fromDate');
        this.addRequiredProperty('toDate');
        this.addRequiredProperty('traveler');
    }

    get room(): Room {
        return this._room;
    }

    set room(value: Room) {

        if (!value) {
            throw new Error('The room property cannot null or undefined.');
        }

        this._room = value;

    }

    get fromDate(): Date {
        return this._fromDate;
    }

    set fromDate(value: Date) {

        if (!value) {
            throw new Error('The fromDate property cannot null or undefined.');
        }

        this._fromDate = value;

    }

    get toDate(): Date {
        return this._toDate;
    }

    set toDate(value: Date) {

        if (!value) {
            throw new Error('The toDate property cannot null or undefined.');
        }

        this._toDate = value;

    }

    get paid(): boolean {
        return this._paid;
    }

    set paid(value: boolean) {
        this._paid = !!value;
    }

    get traveler(): Traveler {
        return this._traveler;
    }

    set traveler(value: Traveler) {

        if (!value) {
            throw new Error('The traveler property cannot null or undefined.');
        }

        this._traveler = value;

    }

}
