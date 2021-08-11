const Sponsors = require('../models/Sponsors');

module.exports = {
    creteSponsors: async(req, res) => {
        
        let json = { error: {}, result: {}, status: {} };

        const values = {
            name,
            logo,
            link,
            address,
            description
        } = req.body;

        await Sponsors.create(values).then(insertId => {
            json.result = insertId;
            res.status(200).json(json);
        }).catch(error => {
            console.log(error);
            res.status(500).send(json.error = error);
            return

        });
    },

    getSponsors: async (req, res) => {
        let json = { error: {}, result: {}, status: {} };
    }
}
