const db = require('../database/connection');

module.exports = {
    create: async({name, logo, link, address, description}) => {
        return new Promise((resolver, reject) => {
            let query = 'INSERT INTO sponsors (`name`, `logo`, `link`, `address`, `description`) VALUES (?,?,?,?,?)';
            let values = [name, logo, link, address, description];

            db.query(query, values, (error, results)=>{
                if(error) {reject(error); return};
                resolver(results.insertId);
            })
        });
    }
}