# mongodbFun.js
Funções de NodeJS express para facilitar conexão com mongodb, te ajudam a criar, remover, buscar e atualizar informações no seu mongodb em qualquer collections e em qualquer database.

## Iniciando


Instale as dependências:
* <a href="https://nodejs.org/en/download/">NodeJS</a>
* <a href="https://expressjs.com/">ExpressJS</a>
* <a href="https://www.mongodb.com/download-center">MongoDB</a>

Baixe a pasta "mongodbFun" e coloque em um lugar confortavel que deseja.

Importe o mongodbFun.js para os locais onde irá usar as funções:
```bash
var mongodbFun = require('caminho/mongodbFun/mongodbFun');
```
* *Caminho = Local onde você colocou a pasta "mongodbFun".

(ATENÇÃO) quando utilizar as funções não se esqueça de utilizar o. then para que a resposta seja exibida só quando estiver disponível.

## Funções disponíveis:
```bash
mongodbFun.create(CollectionName, Json, DataBase);
```
Conteudos com * significa que são obrigatórios serem passado.

* *CollectionName = Nome de sua Collection.
* *Json = Um JSON com uma estrutura para seu novo objeto.
* DataBase = Caso desejado você pode escolher um database que não seja a que está na config.


```bash
mongodbFun.find(CollectionName, Query, DataBase);
```
Conteudos com * significa que são obrigatórios serem informados para a função.

* *CollectionName = Nome de sua Collection.
* Query = Um JSON com uma Query para pesquisar o objeto em especifico.
* DataBase = Caso desejado você pode escolher um database que não seja a que está na config.


```bash
mongodbFun.remove(CollectionName, Query, DataBase);
```
Conteudos com * significa que são obrigatórios serem informados para a função.

* *CollectionName = Nome de sua Collection.
* *Query = Um JSON com uma Query para remover o objeto em especifico.
* DataBase = Caso desejado você pode escolher um database que não seja a que está na config.


```bash
mongodbFun.update(CollectionName, Query, Json, DataBase);
```
Conteudos com * significa que são obrigatórios serem informados para a função.

* *CollectionName = Nome de sua Collection.
* *Query = Um JSON com uma Query que indique o objeto em especifico que deseja remover.
* *Json = Um JSON com uma estrutura idêntica com a que já existia para modificar os valores.
* DataBase = Caso desejado você pode escolher um database que não seja a que está na config.


## Exemplo de uso em API roteada no Express:
```bash
var mongodbFun = require('caminho/mongodbFun/mongodbFun');

router.post('/create', function (req, res, next) {

  var varFun = mongodbFun.create("Usuarios", req.body);
  varFun.then(function (value) {
    res.json(value);
  }, function (reason) {
    res.json(reason);
  });

});
```
