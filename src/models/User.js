const db = require('../database/connection');

module.exports = {
    create: async ({name, email, phone, password, identity, token}) => {
        return new Promise((resolver, reject) => {
            let query = 'INSERT INTO users (`name`, `email`, `phone`, `password`, `identity`) VALUES (?,?,?,?,?)';
            let values = [name, email, phone, password, identity];
            db.query(query, values,(error, results) => {
                    if (error) { reject(error); return; }
                    console.log(results);
                    resolver(results.insertId);
                }
            )
        });
    },

    byUser: async (email) => {
        return new Promise((resolver, reject) => {
            let query =  `SELECT * FROM users WHERE email = ?`;
            let values = [email];
            db.query(query, values, (error, results) => {
                if (error) { reject(error); return; }
                resolver(results);
            })
        });
    },

    UpdateUserToken: async (token, email) => {
        console.log(token, email)
        return new Promise((resolver, reject) => {
            let query = 'UPDATE users SET token = ? WHERE email = ?';
            let values = [token, email];
            db.query(query, values, (error, results) => {
                if (error) { reject(error); return; }
                resolver(results);
            })

        })
    }
}