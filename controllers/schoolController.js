const { addSchool, getSchools } = require('../models/schoolModel');
const { calculateDistance } = require('../utils/geolocation');

const addSchoolHandler = (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || latitude == null || longitude == null) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const schoolData = { name, address, latitude, longitude };
    addSchool(schoolData, (err) => {
        if (err) return res.status(500).json({ error: 'Database error.' });
        res.status(201).json({ message: 'School added successfully.' });
    });
};

const listSchoolsHandler = (req, res) => {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'User location is required.' });
    }

    getSchools((err, results) => {
        if (err) return res.status(500).json({ error: 'Database error.' });

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        const sortedSchools = results.map((school) => ({
            ...school,
            distance: calculateDistance(userLat, userLon, school.latitude, school.longitude),
        })).sort((a, b) => a.distance - b.distance);

        res.json(sortedSchools);
    });
};

module.exports = { addSchoolHandler, listSchoolsHandler };
