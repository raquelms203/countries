export class Country {
    name: string = '';
    flag: string = '';
    symbol: string = '';
    population: number = 0;
    area: number = 0;

    constructor(
        name: string,
        flag: string,
        symbol: string,
        population: number,
        area: number,
    ) {
        this.area = area;
        this.flag = flag;
        this.name = name;
        this.population = population;
        this.symbol = symbol;
    }
}
