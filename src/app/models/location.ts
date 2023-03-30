import { Base } from "./base";

export class Location extends Base<Location>  {

    _city: string = '';
    _state: string = '';
    _country: string = '';

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

    override clone() {
        const location = new Location();
        Object.assign(location, this);
        return location;
    }

}
