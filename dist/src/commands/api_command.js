const axios = require('axios');
class APICommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('where is the city of <city>').action(async (city) => this.findCity(city));
    }
    async findCity(city) {
        try {
            const response = await axios.get(`https://geocode.maps.co/search?q=${city}`);
            if (response.data.length > 0) {
                const location = response.data[0];
                console.log(`City: ${city} is located at latitude ${location.lat}, longitude ${location.lon}`);
            }
            else {
                console.log(`City ${city} not found`);
            }
        }
        catch (error) {
            console.error('Error fetching city location:', error.message);
        }
    }
}
module.exports = APICommand;
