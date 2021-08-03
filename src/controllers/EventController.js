const Event = require('../models/Event');
module.exports = {
    Create: async (req, res) => {

        let json = { error: {}, result: {}, status: {} };

        let values = {
            title,
            description,
            banner,
            type,
            status,
        } = req.body;

        var event = await Event.create(values).then(insertId => {
            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
            return (insertId);
        }).catch(rejectValeu => {
            console.log({ rejectValeu });
            return;
        });

        if (event) {
            json.result = {
                id: event.insertId
            };
        };

        res.json(json);
    },

    Update: async (req, res) => {
        let json = { error: {}, result: {}, status: {} };

        let values = {
            title,
            description,
            banner,
            type
        } = req.body;

        values.id = req.params.id;

        var event = await Event.update(values).then(insertId => {
            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
            return (insertId);
        }).catch(rejectValeu => {
            console.log({ rejectValeu });
            return;
        });

        if (event) {
            json.result = values;
        };

        res.json(json);
    },

    Delete: async (req, res) => {
        let json = { error: {}, result: {}, status: {} };

        let values = {};
        values.id = req.params.id;

        await Event.delete(values).then(result => {
            json.result = {
                delete: 'Item Deletado'
            };
            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
            return;
        }).catch(error => {
            json.error = 'Não foi possivel remover esse evento!';
            console.log(error);
            return;
        });

        res.json(json);

    },

    Select: async (req, res) => {
        let json = { error: {}, result: [], status: {} };

        var events = await Event.select().then(results => {

            console.log(results);
            for (let i in results) {
                json.result.push({
                    id: results[i].id,
                    title: results[i].title,
                    description: results[i].description,
                    banner: results[i].banner,
                    type: results[i].type,
                });
            }

            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
            return results;
        }).catch(error => {
            json.error = 'Não foi possivel execultar essa solicitação!'
            console.log(error);
            return;
        });

        res.json(json);
    },

    SelectById: async (req, res) => {
        let json = { error: {}, result: [], status: {} };

        let {id} = req.params;

        await Event.selectById(id).then(results => {

            console.log(results);
            for (let i in results) {
                json.result.push({
                    id: results[i].id,
                    title: results[i].title,
                    description: results[i].description,
                    banner: results[i].banner,
                    type: results[i].type,
                });
            }

            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
            return results;
        }).catch(error => {
            json.error = 'Não foi possivel execultar essa solicitação!'
            console.log(error);
            return;
        });

        res.json(json);
    },
    
}