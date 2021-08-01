const db = require('../database/connection');

module.exports = {
    create: ({ title, id, limit, price, status }) => {
        return new Promise((resolver, reject) => {
            let query = 'INSERT INTO event_class (`title`, `price`, `id_event`, `limit`, `status`) VALUES (?,?,?,?,?)';
            let values = [title, price, id, limit, status];
            db.query(query, values, (err, row) => {
                if (err) { reject(err); }
                resolver(row);
            });
        });
    },

    update: ({title, id, price, limit, status, id_class}) => {
        return new Promise((resolver, reject) => {
            let query = 'UPDATE event_class SET `title` = ?, `price` = ?, `id_event` = ?, `limit` = ?, `status` = ? WHERE `id` = ?';
            let values = [title, price, id, limit, status, id_class];
            console.log(values);
            db.query(query, values, (err, row) => {
                if (err) { reject(err); }
                resolver(row);
            });
        });
    },

    delete: ({ id }) => {
        return new Promise((resolver, reject) => {
            let query = 'DELETE FROM event_class WHERE id = ?';
            let values = [id];
            db.query(query, values, (err, row) => {
                if (err) { reject(err) }
                resolver(row);
            })
        });
    },

    selectByEventId: ({id}) => {
        console.log(id);
        return new Promise((resolver, reject )=> {
            let query = 'SELECT * FROM event_class WHERE id_event = ?';
            let values = [id];
            db.query(query, values, (err, row) => {
                if (err) { reject(err) }
                resolver(row);
            })
        });
    },
}
