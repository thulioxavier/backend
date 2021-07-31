const db = require('../database/connection');

module.exports = {
    create: async (values) => {
        return new Promise((resolver, reject) => {
            db.query('INSERT INTO users (`name`, `email`, `phone`, `password`, `identity`) VALUES (?,?,?,?,?)',
                [values.name, values.email, values.phone, values.password, values.identity],
                (error, results) => {
                    if (error) { reject(error); return; }
                    console.log(results);
                    resolver(results.insertId);
                }
            )
        });
    },

    byUser: async (email) => {
        return new Promise((resolver, reject) => {
            db.query(`SELECT * FROM users WHERE email = ?`, [email], (error, results) => {
                if (error) { reject(error); return; }
                resolver(results);
            })
        });
    }
}