const Category = require('../models/Category');
const slug = require('slugify');
module.exports = {
    Create: async (req, res) => {

        let json = { error: {}, result: {}, status: {} };
        let { title } = req.body;
        let values = {
            title,
            slug: slug(title)
        };
        let category = await Category.create(values);

        if (category) {
            json.result = {
                id: category
            }

            json.status = {
                status: 200,
                error: '',
                msg: 'A requisição foi bem sucedida.'
            }
        } else {
            json.error.server = {
                status: 500,
                error: '500 Internal Server Error',
                msg: 'O servidor encontrou uma situação com a qual não sabe lidar.'
            }
        }
        res.json(json);
    },
}