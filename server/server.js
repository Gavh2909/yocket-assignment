const express = require('express');
const cors = require('cors');
const {isCaptured, getFugitiveLocation } = require('./service');

const app = express();
const PORT = 3004;
app.use(cors()); 

app.get('/simulate', (req, res) => {
    console.log(req.body, req.query)
    const copss = req.query.cops;
    const outcomes = copss.map(cop => {
        const fugitiveCity = getFugitiveLocation();
        const { copName, cityName, vehicleType } = cop;
        const captureOutcome = isCaptured(cityName, vehicleType, fugitiveCity, cities, vehicles);
        return { copName, captureOutcome };
    });
    res.json(outcomes);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
