const { FlightService } = require('../services/index')

const flightService = new FlightService();

const create = async (req,res) => {
    
    try {

        const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        }
        
        const flight = await flightService.createFlight(flightRequestData);
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

const get = async (req,res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fetched the flights"
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unable to fetch",
            err : error
        })
    }
}

const update = async (req,res) => {
    try {
        const response = await flightService.updateFlight(req.params.id,req.body);
        return res.status(200).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully updated the flight"
        })
    } catch (error) {
        console.log("Error in update in controller");
        return res.status(500).json({
            data : {},
            success : false,
            err : error,
            message : "Unable to update"
        })
    }
}


module.exports = {
    create,
    getAll,
    get,
    update
}