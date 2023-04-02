import { HotelServices } from "../consts/hotel/services";
import { Base } from "./base";
import { Location } from "./location";
import { Room } from "./room";

export class Hotel extends Base<Hotel> {

    private _name: string = '';
    private _location: Location = null!;
    private _description: string = '';
    private _qualification: number = 0;
    private _rooms: Room[] = [];
    private _services: string[] = [];

    constructor() {
        super();
        this.addRequiredProperty('name');
        this.addRequiredProperty('location');
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {

        if (!value) {
            throw new Error("The name property cannot be empty or null");
        }

        this.name = value;

    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {

        if (!value) {
            throw new Error("The description property cannot be empty or null");
        }

        this._description = value;

    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {

        if (!value) {
            throw new Error("The location property cannot be null");
        }

        this._location = value;

    }

    get qualification(): number {
        return this._qualification;
    }

    set qualification(value: number) {

        if (value < 1 || value  > 5) {
            throw new Error("the qualification property must be between 1 and 5");
        }

        this._qualification = value;

    }

    override clone() {

        const hotel = new Hotel();

        Object.assign(hotel, {
            name: this.name,
            description: this.description,
            location: this.location?.clone(),
            qualification: this.qualification
        });

        if (this._rooms && this._rooms.length > 0) {

            const rooms: Room[] = [];

            this._rooms.forEach((room) => {
                rooms.push(room);
            });

            this._rooms = rooms;

        }

        return hotel;

    }

    addService(service: string) {

        const serviceFound = HotelServices.find((currentService) => currentService === service);

        if (!serviceFound) {
            throw new Error("The service was not found.");
        }

        if (this._services.indexOf(service) > -1) {
            throw new Error("The service has already been added before.");
        }

        this._services.push(service);

    }

    getServices(): string[] {
        return this._services;
    }

    addRoom(room: Room) {
        this._rooms.push(room);
    }

    removeRoomById(id: string) {
        this._rooms = this._rooms.filter((room) => room.id !== id);
    }

    removeAllRoom() {
        this._rooms = [];
    }

    removeService(service: string) {
        this._services = this._services.filter((currentService) => currentService !== service);
    }

    removeAllServices() {
        this._services = [];
    }

    getRooms(): Room[] {
        return this._rooms;
    }

    getRoomByRoomNumber(roomNumber: number): Room | undefined {
        const room = this._rooms.find((currentRoom) => currentRoom.roomNumber === roomNumber);
        return room;
    }

}
