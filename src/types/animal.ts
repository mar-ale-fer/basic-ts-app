import { rescuedSpecies } from "./rescuedSpecies";
export class Animal {
    private id: number;
    private name: string;
    private species: rescuedSpecies;

    constructor(id: number, name: string, species: rescuedSpecies) {
        this.id = id;
        this.name = name;
        this.species = species;
    }
}

