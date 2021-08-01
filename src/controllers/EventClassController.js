const EventClass = require('../models/EventClass');

module.exports = {
    Create: async (req, res) => {
        let json = { error: {}, result: {}, status: {} };

        let values = {
            title,
            price,
            limit,
            status,
            id
        } = req.body;

        var eventClass = await EventClass.create(values).then(insertId => {
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

        if (eventClass) {
            json.result = {
                id: eventClass.insertId
            };
        };

        res.json(json);
    },

    Update: async (req, res) => {
        let json = { error: {}, result: {}, status: {} };

        let values = {
            title,
            price,
            limit,
            status,
            id
        } = req.body;
        values.id_class = req.params.id_class;

        await EventClass.update(values).then(() => {
            json.result = {
                id: values.id_class,
                event_id: values.id,
                title: values.title,
                price: values.price,
                limit: values.limit,
                status: values.status
            }
            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
            return;
        }).catch(reject => {
            json.status = {
                status: 400,
                error: '',
                msg: 'A requisição não pode ser concluid.'
            }
            console.log(reject);
            return;
        });

        res.json(json);
    },

    Delete: async (req, res) => {
        let json = { error: {}, result: {}, status: {} };

        let values = {};
        values.id = req.params.id;

        await EventClass.delete(values).then(result => {
            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
            return;
        }).catch(reject => {
            json.status = {
                status: 400,
                error: '',
                msg: 'A requisição não pode ser concluid.'
            }
            console.log(reject);
            return;
        });

        res.json(json);
    },

    SelectByEventId: async (req, res) => {
        let json = { error: {}, result: [], status: {} };

        let values = {};
        values.id = req.params.id_event;

        await EventClass.selectByEventId(values).then(results => {

            for (let i in results) {
                json.result.push({
                    id: results[i].id,
                    title: results[i].title,
                    price: results[i].price,
                    limit: results[i].limit,
                    status: results[i].status,
                });
            }

            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
            return results;
        }).catch(reject => {
            json.status = {
                status: 400,
                error: '',
                msg: 'A requisição não pode ser concluid.'
            }
            console.log(reject);
            return;
        });

        res.json(json);
    },
}