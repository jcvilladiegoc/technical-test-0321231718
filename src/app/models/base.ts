export abstract class Base<T> {

    private _id: string = '';
    private _deleted: boolean = false;
    private _created: Date;
    private _updated: Date;
    private _requiredProperties: string[] = [];

    constructor() {
        this._created = new Date();
        this._updated = new Date();
        this._id = this.generateID();
        this.addRequiredProperty('id');
        this.addRequiredProperty('created');
        this.addRequiredProperty('updated');
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {

        if (!value) {
            throw new Error("The id property must be null");
        }

        this._id = value;

    }

    get created(): Date {
        return this._created;
    }

    set created(value: Date) {

        if (!value) {
            throw new Error("The created property must be empty.");
        }

        this._created = value;

    }

    get updated(): Date {
        return this._updated;
    }

    set updated(value: Date) {

        if (!value) {
            throw new Error("The updated property must be empty.");
        }

        this._updated = value;

    }

    get deleted(): boolean {
        return this._deleted;
    }

    set deleted(value: boolean) {
        this._deleted = value;
    }

    toString(): string {
        return JSON.stringify(this);
    }

    clone(): T {
        throw new Error('Method not implement.');
    }

    generateID(length: number = 16): string {

        const timestamp = '' + new Date().getTime();
        const numbers = this.removeCharacterRepeated(timestamp);
        const characters = 'abcdefghijklmnopqrsdABCDEFEGHIJKLMNOPQRSD'.concat(String(numbers));
        let hash = '';

        for (let i = 0; i < length; i++) {
            hash += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return hash;

    }

    removeCharacterRepeated(text: string): string {

        if (!text) {
            throw new Error("The text parameter must be defined");
        }

        let result = '';

        for (let i = 0; i < text.length; i++) {

            const character = text.charAt(i);

            if (result.indexOf(character) === -1) {
                result += character;
            }

        }

        return result;

    }

    verification(): string[] {

        const messages: string[] = [];

        Object.entries(this).forEach(([key, value]) => {

            if (this._requiredProperties.indexOf(key) > -1) {

                const dataType: string = typeof value;

                switch (dataType) {
                    case 'string':
                        if (!value) {
                            messages.push(`The ${key} property cannot be empty, null or undefined`);
                        }
                        break;
                    case 'number':
                        if (!value) {
                            messages.push(`The ${key} property cannot be null or undefined`);
                        }
                        break;
                    case 'object':
                        if (!value) {
                            messages.push(`The ${key} property cannot be null or undefined`);
                        }
                        break;
                    case 'array':
                        if (value.length > 0) {
                            messages.push(`The ${key} property cannot be null or undefined`);
                        }
                        break;
                    default:
                        break;
                }


            }

        });

        return messages;

    }

    addRequiredProperty(property: string) {

        if (!property) {
            throw new Error('The property parameter cannot be empty, null or undefined');
        }

        this._requiredProperties.push(property);

    }

    requiredProperties(): string[] {
        return this._requiredProperties;
    }

}
