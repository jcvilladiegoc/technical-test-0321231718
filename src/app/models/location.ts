import { Base } from "./base";
import { Hotel } from "./hotel";

export class Location extends Base<Location>  {

    _city: string = '';
    _state: string = '';
    _country: string = '';
    _hotel: Hotel = null!;

    constructor() {
        super();
        this.addRequiredProperty('city');
        this.addRequiredProperty('state');
        this.addRequiredProperty('country');
        this.addRequiredProperty('hotel');
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {

        if (!value) {
            throw new Error("The city property cannot be empty.");
        }

        this._city = value;

    }

    get state(): string {
        return this._city;
    }

    set state(value: string) {

        if (!value) {
            throw new Error("The state property cannot be empty.");
        }

        this._state = value;

    }

    get country(): string {
        return this._city;
    }

    set country(value: string) {

        if (!value) {
            throw new Error("The country property cannot be empty.");
        }

        this._country = value;

    }

    get hotel(): Hotel {
        return this._hotel;
    }

    set hotel(value: Hotel) {

        if (!value) {
            throw new Error('The hotel property cannot be null.');
        }

        this._hotel = value;

    }

    override clone() {
        const location = new Location();
        Object.assign(location, this);
        return location;
    }

}
