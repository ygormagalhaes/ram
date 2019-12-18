### Iniciar a aplicação
Para iniciar a aplicação execute 'npm i' e então 'npm start'. Isso instalará as dependências
do projeto e fará a aplicaçao escutar na porta 3000!

### Pesquisando dados
A aplicação oferece o endpoint de visualização de dados em / [http://localhost:3000] e aceita dois
query params: order e character.
#### order
Este query param aceita dois valores possíveis, id e character e ordena os resultados em ordem crescente
através desses campos dos resultados.
#### character
Esse query param especifica uma string que irá filtrar os dados com base no nome dos personagentes.
#### Exemplo
[http://localhost:3000/?order=character&character=rick]

### Visualizar documentação da API 
Para visualizar a documentação gerada via Swagger acesse '/api-docs' após inicializar 
a aplicação.

### Testes
Execute com 'npm test'. (Testes não finalizados / totalmente implementados).
