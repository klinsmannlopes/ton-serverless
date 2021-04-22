'use strict'

const Responses = require('../common/response_API');
const Dynamo = require('../common/Dynamo');
const { v4: uuidv4 } = require('uuid');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);
    const reqBody = JSON.parse(event.body);

    if (
        !reqBody.age ||
        reqBody.name.trim() === '' ||
        !reqBody.job ||
        reqBody.email.trim() === ''
      ) {
        return Responses._400({message: 'Esses dados são obrigatórios'});
      }

    const user = {
        ID: uuidv4(),
        age: reqBody.age,
        name: reqBody.name,
        socialName: reqBody.socialName,
        email: reqBody.email,
        job: reqBody.job,
        sector: reqBody.sector,
        state: reqBody.state,
        city: reqBody.city,
        andress: reqBody.andress,
        numberPhone: reqBody.numberPhone,
        numberPhone: new Date().toISOString()
      };

    if(!user) {
        return Responses._400({message: 'Teste'});
    }

    const newUser = await Dynamo.write(user, tableName).catch(err => {
        console.log("Erro ao salvar na base de dados", err);
    });

    if(!newUser) {
        return Responses._400({message: 'Erro ao salvar na base de dados com esse ID'});
    }

    return Responses._200({newUser});
}