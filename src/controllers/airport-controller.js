const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async(req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message : "Successfully created the airport",
            err : {},
            data : response,
            success : true
        })
    } catch (error) {
        console.log("Error in airport controller");
        return res.status(500).json({
            message: "Cannot create a new airport",
            success : false,
            data : {},
            err : error
        })
        
    }
}

module.exports = {
    create,
    
}