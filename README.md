# ton-serverless
Centralização de lambdas para ser usadas no projeto.

OBS: Se quiser apenas consultar os endpoints, pular para seção #Endpoints#, os mesmos já se encontram na AWS e já podem ser usados.

<br />

## Requerimento

[NodeJS](https://nodejs.org/en/download/)

[NPM](https://www.npmjs.com/get-npm)

[SERVERLESS](https://www.serverless.com/framework/docs/getting-started/)

[Turotial do zero para instalar NPM e NODEJS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-pt)

<br /><br />

## Como usar em sua própria conta AWS

Clone o projeto ou faça [download](https://github.com/klinsmannlopes/ton-serverless.git) dele:

```git
$ git clone https://github.com/klinsmannlopes/ton-serverless.git
```

Entre na pasta:

```sh
$ cd ton-serverless
```
Execute o comando abaixo dentro da pasta:

```npm
$ npm install
```

Em sua conta AWS crie uma IAM pra você.
 [TUTORIAL](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_users_create.html)

Após isso pegar as credenciais na tela abaixo que aparece abaixo.

<br />

![Alt Text](https://media.giphy.com/media/WtCPfAP96oVlLmWwJI/giphy.gif)

<br />

Com esses dados, executar o comando abaixo passando esse dados:


```
$ serverless config credentials --provider aws --key=ID_DE_CHAVE_DE ACESSO --secret CHAVE_DE_ACESSO_SECRETA
```

Após configurar credencias na maquina executar o comando abaixo

```
$ serverless deploy
```

Com isso veriquique os endpoints na sua AWS e suas funções lambdas na AWS

<br /><br />

# Endpoints

### Para utilizar os endpoint você precisa usar um client, exemplos abaixo:

<br />

[POSTMAN](https://www.postman.com)

[SOAPUI](https://www.soapui.org)

<br />

- Como forma de segurança, e preciso passar o X-API-KEY na requisição do endpoint, no exemplo abaixo utilizo o client postman:
    <br /><br />
    ![Alt Text](https://media.giphy.com/media/oM8di7SnAI0FL2fmKP/giphy.gif)
    <br /><br />

    - Foi criada uma API KEY para testes, pode utilizar dela para realizar os testes das requisições
        - X-API-KEY -> 'gSYjyQeo2aa0hOxQTLNbd9P0xBlaXo5yH48wGl60'

- Endpoint para pegar dados do usuário
    - GET
    - [https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/user/{ID}](https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/user/{ID}).
        - Exemplo:
            - [ID como 32afe227-188d-4a21-b966-54de42f295ba:](https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/user/32afe227-188d-4a21-b966-54de42f295ba)
            - JSON de resposta:

```json
{
    "andress": "Rua da missao",
    "city": "Fortaleza",
    "sector": "Financeiro",
    "socialName": "Lopes",
    "numberPhone": "2021-04-22T05:38:05.631Z",
    "ID": "32afe227-188d-4a21-b966-54de42f295ba",
    "email": "lopesklinsmann@gmail.com",
    "name": "KLinsmann lopes",
    "job": "DEV",
    "state": "CE",
    "age": 24
}
```
            
- Endpoint para salvar novo usuário
    - POST
    - [https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/user](https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/user)
        - Exemplo:
            - Usar algum cliente para o endpoint (postman como exemplo)
            - Enviar o JSON abaixo no body:

```json
{
    "age": 24,
    "name": "KLinsmann lopes",
    "socialName": "Lopes",
    "email": "lopesklinsmann@gmail.com",
    "job": "DEV",
    "sector": "Financeiro",
    "state": "CE",
    "city": "Fortaleza",
    "andress": "Rua da missao",
    "numberPhone": "85 - 999532001"
}
```

- Endpoint para consultar e realizar contagem de acessos
    - GET (todos utilizam o get)
        - Podemos utilizar esse endpoint para relizar essa funções em outras partes do site, apenas mudando os dados de input do enpoint
        - [https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/visits/{action}/{namespace}/{key}](https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/visits/get/ton.com/visits)
            - obrigatorios
                - action
                    - Esse dado e para saber qual ação realizar
                        - 'get' para pegar o contador e 'hit' para incrementar o contador
                - namespace
                    - Esse dado deve ser exclusivo, é recomendável usar o domínio do seu site
                - Key
                    - Esse dado junto com o namespace, identifica qual contador buscar e qual realizar o increment da contagem.

    
    - Endpoints já configurados
        - Para facilitar os testes, já iniciei um contador
            - Buscar contador
                - GET
                - [https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/visits/get/ton.com/visits](https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/visits/get/ton.com/visits)

            - Realizar contagem
                - GET
                - [https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/visits/hit/ton.com/visits](https://ilejvt44e0.execute-api.us-east-2.amazonaws.com/dev/visits/hit/ton.com/visits)


## Após toda essa configuração e só partir pro abraço e aproveitar sua API, até a próxima.


![Alt Text](https://media.giphy.com/media/eEXxfHQJ0dWOrctI55/giphy.gif)