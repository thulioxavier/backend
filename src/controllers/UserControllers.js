const User = require('../models/User');
const Validate = require('../helpers/validate');
const uniqId = require('uniqid');
module.exports = {

    Create: async (req, res) => {
        let json = { error: '', result: {} };
        let { name, email, password, phone } = req.body;

        let values = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            identity: uniqId(`${phone}-`)
        };

        let byUser = await User.byUser(email);

        if (byUser.length > 0) {
            json.error = 'Email já cadastrado!';
        } else {
            var user = await User.create(values);
        }

        if (user) {
            json.result = {
                id: user,
                email: email
            }
        }

        res.json(json);

    }
}