const Responses = require('../common/response_API');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event)

    if(!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: 'ID não esta no caminho PATH'})
    }

    const ID = event.pathParameters.ID;

    
    const user = await Dynamo.get(ID, tableName).catch(err => {
        console.log("Erro em pegar user na base de dados", err);
    });

    if(!user) {
        return Responses._400({message: 'Usuario nao esta na base'});
    }

    return Responses._200(user);
}

const data = {
    1234: {name: 'Klinsmann lopes', socialName: 'Lopes', age: 25, email: 'lopesklismann@gmail.com', password: "1235" , job: 'teacher', sector: 'Financeiro',
    state: 'CE', city: 'Fortaleza', address: 'Rua da missao', numberPhone: '85 - 999562001'
    }
}