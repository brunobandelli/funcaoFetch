/*Função Fetch*/

/*
 O "fetch" é uma função que permite fazer requisições HTTP para buscar recursos (como dados JSON, HTML, imagens, etc.) de servidores web.
Ela é uma maneira moderna de realizar requisições assíncronas, substituindo a antiga abordagem baseada em XMLHttpRequest. 
O "fetch" é amplamente usado para interações com APIs da web e para buscar dados de servidores remotos.

O fetch retorna uma Promise, o que significa que você pode usar a sintaxe de .then() e .catch() para lidar com a resposta 
e os erros de forma assíncrona.



Sintaxe básica:

 O fetch é usado com uma sintaxe relativamente simples. Você fornece a URL que deseja buscar e, opcionalmente, 
algumas opções de configuração. Ele retorna uma Promise que resolve quando a resposta da solicitação está disponível.

fetch('https://api.example.com/data')
  .then(response => {
    // Lida com a resposta aqui
  })
  .catch(error => {
    // Lida com erros aqui
  });




  
***Trabalhando com a resposta:
 A resposta do fetch é um objeto Response que contém informações sobre a resposta HTTP, como cabeçalhos e status.
Para extrair dados do corpo da resposta, você normalmente usa os métodos .json(), .text(), ou outros, dependendo do tipo de conteúdo retornado.

Exemplo de leitura de JSON:

fetch('https://api.example.com/data')
  .then(response => response.json())      //o método .json() do objeto Response no contexto do fetch é semelhante ao JSON.parse. Ambos são usados para converter uma representação JSON (que é uma string) em um objeto JavaScript.
  .then(data => {
    // Faça algo com os dados JSON aqui   //aqui você decise oque ira fazer com o objeto.  
  });



***Tratamento de erros:
O fetch também permite lidar com erros usando o método .catch() para capturar qualquer problema na solicitação.




******Opções de configuração:
Você pode passar um objeto de opções como o segundo argumento para personalizar sua solicitação, 
definindo método (GET, POST, etc.), cabeçalhos, corpo da solicitação, entre outras coisas.

As configurações no contexto do método fetch() em JavaScript são usadas para personalizar uma solicitação HTTP antes de enviá-la 
para um servidor web. Você pode passar um objeto de opções como o segundo argumento para o fetch() 
para controlar diversos aspectos da solicitação.

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
  .then(response => {
    // Lida com a resposta aqui
  })
  .catch(error => {
    // Lida com erros aqui
  });



Aqui estão algumas das configurações mais comuns e como elas funcionam:

*Método (method):
Descrição: Especifica o método HTTP a ser usado na solicitação, como GET, POST, PUT, DELETE, etc.
-Exemplo:
method: 'POST'


*Cabeçalhos (headers):
Descrição: Permite definir cabeçalhos HTTP personalizados na solicitação, como cabeçalhos de autorização, cabeçalhos de conteúdo, etc.
-Exemplo:
headers: {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer token'
}


*Corpo da solicitação (body):
Descrição: Define o corpo da solicitação, que é usado principalmente em solicitações POST e PUT para enviar dados para o servidor. 
Pode ser um objeto, uma string ou um objeto FormData.
-Exemplo:
body: JSON.stringify({ key: 'value' })


*Modo (mode):
Descrição: Controla o modo de operação da solicitação. Os modos comuns incluem "cors" (padrão), "no-cors" e "same-origin". 
Isso afeta como o navegador lida com solicitações entre origens diferentes.
-Exemplo:
mode: 'cors'


*Credenciais (credentials):
Descrição: Define como as credenciais, como cookies ou cabeçalhos de autorização, são tratadas em solicitações. 
Os valores possíveis são "same-origin" (padrão), "include", e "omit".
-Exemplo:
credentials: 'include'


*Redirecionamento (redirect):
Descrição: Controla como o fetch deve lidar com redirecionamentos HTTP, como "follow" (seguir redirecionamentos), 
"error" (tratar redirecionamentos como erros) e "manual" (não seguir redirecionamentos).
-Exemplo:
redirect: 'follow'


*Cache (cache):
Descrição: Especifica como o navegador deve armazenar em cache a resposta da solicitação.
Você pode usar valores como "default", "no-store", "reload", "force-cache", entre outros.
-Exemplo:
cache: 'no-cache'


*Tempo limite (timeout):
Descrição: Define um limite de tempo em milissegundos para a solicitação.
Se a resposta não for recebida dentro do tempo limite, a Promise será rejeitada.
-Exemplo:
timeout: 5000 // Define um limite de 5 segundos

*/