const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    async get(ID, TableName) {
        const params = {
            TableName,
            Key: { 
                ID,
            },
        };

        const data = await documentClient.get(params).promise();

        if(!data || !data.Item) {
           throw Error(`Ocorreu um erro ao obter os dados para o ID de ${ID} em ${TableName}`);
        }
        console.log(data);

        return data.Item;
    },

    async write(data, TableName) {
        if (!data.ID) {
            throw Error('Nao existe ID no JSON');
        }

        const params = {
            TableName,
            Item: data,
        };

        const res = await documentClient.put(params).promise();

        if (!res) {
            throw Error(`Ocorreu um erro no insert da tabela ${TableName} com o ID de ${data.ID}`);
        }

        return data;
    },
};
module.exports = Dynamo;