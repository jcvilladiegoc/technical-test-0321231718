export class Base<T> {

    id: string;
    deleted: boolean = false;
    created: Date;
    updated: Date;

    constructor() {
        this.created = new Date();
        this.updated = new Date();
        this.id = this.generateID();
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

}
