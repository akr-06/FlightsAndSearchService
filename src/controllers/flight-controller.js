const { FlightService } = require('../services/index')

const flightService = new FlightService();

const create = async (req,res) => {
    
    try {
        console.log(req.body);
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : true, 
            err : {},
            message : 'Successfully created a flight'
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create flight',
            err : error
        })
    }
}

const getAll = async (req,res) => {
    try {
        const response= await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fteched the flights"
        })
    } catch (error) {
        console.log("Error in getAll flight controller");
        res.status(500).json({
            data : {},
            success : false,
            message : "Unable to fetch data",
            err : error
        })
    }
}


module.exports = {
    create,
    getAll,
}