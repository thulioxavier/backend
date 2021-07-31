
module.exports = {
    isNull: (value) => {
        if (!value || value.length < 2 || typeof value != 'string'){
            return error = 'Nome Invalido';
        }
    },

    isPass: (value) => {
        if (!value) {
            return error = 'Senha não informada!';
        } else if (value.length < 8) {
            return error = 'A senha deve conter pelo menos 8 digitos!';
        }
    },

    isEmail: (value) => {
        let result = value.indexOf('@') > -1;
        let qtd = value.length - 1;
        let res = value.indexOf('@');
        if (res == qtd || typeof value != 'string'){
            return error = 'Forma de e-mail invalido!';
        }else if (!value || value.length < 7 || result == false){
            return error = 'Forma de e-mail invalido!';
        }
    },

    isPhone: (value) => {
        // validar so number
        if (value.length < 17 || !value ){
            return error = 'formato de telefone invalido';
        }
    },


}