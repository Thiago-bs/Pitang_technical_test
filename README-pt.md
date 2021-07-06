# Prova técnica - ReactJS 

## Principais dependências
 Neste documento, é demonstrado como executar o projeto em desenvolvimento e em produção utilizando DOCKER.
 As principais dependências necessárias para executar em modo desenvolvedor são: NODE e NPM ou YARN. 
 Para executar em produção basta ter o DOCKER instalado e configurado. 
 
 Para mais informações sobre como instalar, click em [NODE](https://nodejs.org/en/)

 Para mais informações sobre como instalar, click em [NPM](https://www.npmjs.com/)

 Para mais informações sobre como instalar, click em [YARN](https://yarnpkg.com/)

 Para mais informações sobre como instalar, click em [DOCKER](https://www.docker.com/)


 ## Passos para executar o projeto
 ### 1. Desenvolvimento:
 1.1. Descompacte o zip do projeto fornecido via email ou click [aqui](https://github.com/Thiago-bs/BEES_Technical_proof) para cloná-lo via GitHub.

 1.2. Via terminal acesse a pasta **server** e **client** contida dentro do projeto e execute o comando abaixo:

```CMD
    npm install 
        or
    yarn install
```
 1.3. Após a instalação de dependências necessárias, abra dois terminais e acesse às pastas **server** e **client** e execute os comandos abaixo para executar o projeto, ligando assim os modulos backend e frontend.

```CMD
    npm start 
        or
    yarn start
```
 1.4. Após os módulos backend e frontend estarem ligados via terminal, abra seu navegador de preferência e acesse http://localhost:3000 para visualizar a aplicação.

### 2. Produção utilizando DOCKER

2.1. Acesse o diretório raiz do projeto e execute o comando abaixo para baixar as dependências necessárias:

```CMD
   docker-compose build
```

2.2. Execute o comando abaixo para iniciar o projeto:

```CMD
   docker-compose up -d
```
2.3. Abra seu navegador de preferência e acesse http://localhost:80 ou, caso queira acessar de outro dispositivo estando na mesma rede, basta verificar qual é seu IP. 

## Tecnologia que você encontrará neste projeto 

* React com TypeScript;
* React utilizando hooks basicos;
* React utilizando redux;
* NodeJS com TypeScript;
* DOCKER para o deploy da aplicação.


