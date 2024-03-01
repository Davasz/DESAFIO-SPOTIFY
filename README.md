
# PROJETO ESTAGIO ENTERSCIENCE

### 💡 Enredo:

O cliente solicita que você crie uma aplicação web para a contratação de artistas para shows particulares. Crie uma página, onde há um campo de pesquisa, este campo de pesquisa deve buscar por artistas (bandas e cantores), o resultado deve exibir uma grade ou listagem para que o usuário possa escolher um dos resultados. Ao escolher um dos resultados, o usuário deve ser levado a um formulário, que colete informações sobre a contratação do artista selecionado, contendo os campos: Nome do contratante*, Artista Selecionado*, Cachê, Data do evento* e Endereço. A submissão do formulário deve ser registrada e uma tela de sucesso exibida. O usuário poderá repetir o processo de contratação quantas vezes quiser e também consultar as contratações submetidas anteriormente.


## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local.


## 📋 Pré-requisitos

Você precisará ter instalado na sua maquina:

```bash
  • Docker e Docker compose  
  • Node.js e NPM
  • Git
```
    
## 🔧 Instalação - Back-End

### 1. Clonando o projeto

• Execute o comando no seu terminal e clone o repositório:

```bash
  $ git clone https://github.com/Davasz/PROJETO-ESTAGIO-ES.git 
```

• Entre na pasta do projeto

```bash
  $ cd PROJETO-ESTAGIO-ES
```

### 2. Preparando as dependências

• Entre na pasta API

```bash
  $ cd api
```

• Instale as dependências

```bash
  $ npm install
```

### 3. Ambiente de desenvolvimento

• Construir e rodar os containers:

```bash
  // Abra o seu docker desktop
```

```bash
  (Rode no path do docker-compose.yml)    
  $ npm run start:docker
```

• Iniciar servidor Back-End:

```bash    
  $ npm run start
```

• Resultado:

```bash
  > back@1.0.0 start
  > node server.js

  Servidor rodando na porta 3000
```

## 🔧 Instalação - Front-Env Vue

### 1. Preparando as dependências

• No diretório raiz, entre na pasta CLIENT

```bash
  $ cd client
```

• Instale as dependências

```bash
  $ npm install
```

### 2. Ambiente de desenvolvimento

• Inicie o servidor front-end Vue

```bash
  $ npm run serve
```

• Resultado:

```bash
  > client@0.1.0 serve
  > vue-cli-service serve

 INFO  Starting development server...
```

• Aguarde o build do projeto, ao terminar, acesse no seu navegador:

  - Local:   http://localhost:8080/
  - Network: http://192.168.0.103:8080/

## 🔒 Variáveis de Ambiente

Durante o processo seletivo da EnterScience, as váriaveis de ambiente já estão completas, para facilitar a instalação do projeto, porém, após o processo acabar, as váriaveis não continuarão públicas.

`DB_HOST`

`DB_USER`

`DB_PASS`

`DB`

`PORT`

Além dessas váriaveis, após o processo de seleção, será adcionado as seguintes váriaveis no front-end:

`GRANT_TYPE`

`CLIENT_ID`

`CLIENT_SECRET`

Todas elas fazem parte da Dev API do Spotify, [Acesse a documentação](https://developer.spotify.com/documentation/web-api/tutorials/code-flow).


## 💻 Funcionalidades

- Pesquisa de todos os artistas disponíveis na [Spotify API](https://developer.spotify.com);
- Componentização e transmissões de dados entre componentes pais e filhos;
- Banco de dados em núvem com Docker;
- Design responsivo e agradável;
- Armazenamento de dados e API dedicada.


## 🛠️ Construído com

* [Vue.js](https://vuejs.org) - O framework web usado;
* [NPM](https://www.npmjs.com) - Gerente de Dependência;
* [Express.js](https://expressjs.com/pt-br/) - Framework back-end usado;
* [Spotify Development API](https://developer.spotify.com) - API de dados.


## ✒️ Autores

* **Davi Souza** - *Desenvolvimento Completo* - [Davi Souza](https://www.linkedin.com/in/davi-souza-745155246/)
* **EnterScience** - *Idealizador do Proejto* - [EnterScience](https://enterscience.com.br)
* **Guilherme Silva** - *Tech Lead da EnterScience e mentor do projeto*
## 📄 Licença

- [MIT](https://choosealicense.com/licenses/mit/)

- *O uso da API Spotify deve ser respeitada de acordo com os termos e condições de uso, provido pelo [Spotify Dev API](https://developer.spotify.com/documentation/web-api)*


## 🎁 Expressões de gratidão

- Agradeço à [EnterScience](https://enterscience.com.br) pela oportinidade oferecida e pela idealização do projeto;

- Agradeço ao mentor, Guilherme Silva, pelo rápido atendimento e suporte às dúvidas.

---

![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)

