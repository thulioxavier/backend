const db = require('../database/connection');

module.exports = {
    create: async (values) => {
        return new Promise((resolver, reject) => {
            db.query('INSERT INTO categories (`title`, `slug`) VALUES (?, ?)',
                [values.title, values.slug],
                (error, results) => {
                    if (error) { reject(error); return; }
                    resolver(results.insertId);
                }
            )
        });
    }
    
}