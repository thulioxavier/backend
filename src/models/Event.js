const db = require('../database/connection');
module.exports = {
    create: ({ title, description, banner, type }) => {
        return new Promise((resolver, reject) => {
            let query = 'INSERT INTO events (`title`, `description`,  `banner`, `type`) VALUES ( ?,?,?,?)';
            let values = [title, description, banner, type];
            db.query(query, values, (err, row) => {
                if (err) { reject(err); }
                resolver(row);
            });
        });
    },

    update: ({ title, description, banner, vacancies, type, id }) => {
        return new Promise((resolver, reject) => {
            let query = 'UPDATE events SET title = ?, description = ?, banner = ?, type = ? WHERE id = ?';
            let values = [title, description, banner, type, id];
            db.query(query, values, (err, row) => {
                if (err) { reject(err); }
                resolver(row);
            });
        });
    },

    delete: ({ id }) => {
        return new Promise((resolver, reject) => {
            let query = 'DELETE FROM events WHERE id = ?';
            values = [id];
            db.query(query, values, (err, row) => {
                if (err) { reject(err); }
                resolver(row);
            });
        });
    },

    select: () => {
        return new Promise((resolver, reject) => {
            let query = 'SELECT * FROM events';
            values = [];
            db.query(query, (err, row) => {
                if (err) { reject(err); }
                resolver(row);
            })
        });
    }



}