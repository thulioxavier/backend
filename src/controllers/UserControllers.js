const User = require('../models/User');
const uniqId = require('uniqid');
const bcrypt = require('bcrypt');

module.exports = {

    Login: async (req, res) => {
        let json = { error: '', result: {} };

        let { email, password } = req.body;
        const values = { email: email, password: password };

        try {
            //validando email
            let byUser = await User.byUser(email);

            if (!byUser.length > 0) {
                json.error = 'E-mail e/ou senha errados!';
            }
            //validando senha

            const match = await bcrypt.compare(values.password, byUser[0].password);

            if(!match){
                json.error = 'E-mail e/ou senha errados!';
            }

            //gerando token
            const payload = (Date.now() + Math.random()).toString();
            const token = await bcrypt.hash(payload, 10);

            await User.UpdateUserToken(token, email);

            json.result = {token: token, email: values.email}
            res.json(json);

        } catch (error) {
            console.log(error);
            res.status(500).send(json.error = error);
        }
    },

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

        try {

            const passwordHash = await bcrypt.hash(values.password, 10);
            const payload = (Date.now() + Math.random()).toString();
            const token = await bcrypt.hash(payload, 10);

            values.password = passwordHash;

            let byUser = await User.byUser(email);

            if (byUser.length > 0) {
                json.error = 'Email já cadastrado!';
            } else {
                values.token = token;
                var user = await User.create(values);
            }

            if (user) {
                json.result = {
                    id: user,
                    email: email,
                    token
                }
            }

            res.json(json);
        } catch (error) {
            console.log(error);
            res.status(500).send(json.error = error);
        }


    }
}