const axios = require('axios')

class APICommand {
    program: any;
    constructor(program: any) {
        this.program = program;
    }
    register() {
        this.program
            .command('where is the city of <city>').action(async (city: string) => this.findCity(city))
            .command('what type of pokemon is <pokemon>').action(async (pokemon: string) => this.typeTell(pokemon))
            
    }
    async findCity(city: string) {
        try {
            const response = await axios.get(`https://geocode.maps.co/search?q=${city}&api_key=69a906deb93f4970535107xrz6b58be`);
            const country=response[0].address.country
            console.log(`The city of ${city} is in ${country}`)
        } catch (error: any) {
            console.error('Error fetching city location:', error.message);
        }
    }
    async typeTell(pokemon: string) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const type=response.types.reduce((full,curr)=>full+'-'+curr.type.name,'')
            console.log(`The pokemon ${pokemon} is of ${type} type`)
        } catch (error: any) {
            console.error('Error fetching pokemon:', error.message);
        }
    }
}

module.exports = APICommand