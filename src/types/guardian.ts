import { Animal } from "./animal";
class Guardian {
    private id: number;
    private name: string;
    private contactInformation: string;
    private fosteredAnimals: Animal[];

    constructor(id: number, name: string, contactInformation: string){
        this.id = id;
        this.name = name;
        this.contactInformation = contactInformation;
        this.fosteredAnimals = []
    }

    fosterAnimal(animal: Animal) {
        this.fosteredAnimals.push(animal)
    }
}