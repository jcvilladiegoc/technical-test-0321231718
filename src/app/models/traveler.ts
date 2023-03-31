import { Base } from "./base";
import { Reservation } from "./reservation";

export class Traveler extends Base<Traveler> {

    private _reservations: Reservation[] = [];
    private _name: string = '';
    private _lastname: string = '';
    private _documentType: string = '';
    private _document: string = '';
    private _phone: string = '';
    private _email: string = '';

    constructor() {
        super();
        this.addRequiredProperty('name');
        this.addRequiredProperty('lastname');
        this.addRequiredProperty('documentType');
        this.addRequiredProperty('document');
        this.addRequiredProperty('phone');
        this.addRequiredProperty('email');
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {

        if (!value) {
            throw new Error("The name property cannot be empty.");
        }

        this._name = value;

    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {

        if (!value) {
            throw new Error("The lastname property cannot be empty.");
        }

        this._lastname = value;

    }

    get documentType(): string {
        return this._documentType;
    }

    set documentType(value: string) {

        if (!value) {
            throw new Error("The documentType property cannot be empty.");
        }

        this._documentType = value;

    }

    get document(): string {
        return this._document;
    }

    set document(value: string) {

        if (!value) {
            throw new Error("The document property cannot be empty.");
        }

        this._document = value;

    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {

        if (!value) {
            throw new Error("The phone property cannot be empty.");
        }

        this._phone = value;

    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {

        if (!value) {
            throw new Error("The email property cannot be empty.");
        }

        this._email = value;

    }

    getReservations(): Reservation[] {
        return this._reservations;
    }

    addReservation(reservation: Reservation) {

        if (!reservation) {
            throw new Error('The reservation parameter cannot be null or undefined.');
        }

        this._reservations.push(reservation);

    }

}
