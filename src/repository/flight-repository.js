const { Flight } = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository {

//Private method
    #createFilter(data){
        const filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price : { [Op.gte]:data.minPrice} });
        }

        if(data.maxPrice){
            priceFilter.push({price : {[Op.lte]:data.maxPrice}});
        }

        Object.assign(filter,{[Op.and] : priceFilter})

        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Error in create flight repository");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Error in getFlight flight repository");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where : filterObject 
            });
            return flight;
        } catch (error) {
            console.log("Error in getAllFlights repository layer");
            throw {error};
        }   
    }


}

module.exports = FlightRepository;