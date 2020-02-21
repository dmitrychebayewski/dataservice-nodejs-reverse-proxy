# Data microservice written in NodeJS and packaged with nginx reverse-proxy
## Purpose
Originally, writing a proxy as a tool for playing around web requests was an idea,
and I came across more interesting cases on Medium and Github.
As I work with Java microservices, why not write a data microservice on Node.js as random test data providers?  
<img src="https://i.imgur.com/RVpDC4x.png"/>

Simple <a href="https://www.nginx.com/resources/glossary/reverse-proxy-server/">reverse-proxy</a> data service based on Nginx NodeJS and randomuser.me .

NodeJS part of this project is based on <a href="https://github.com/morzhanov/nodejs-koa-boilerplate">nodejs-koa-boilerplate</a>

## Software Stack
This project uses Node.js

## Code Formatting Rules
The code in this project is automatically formatted using [Eslint](https://eslint.org/).
The semicolon use is enforced by rule.

##IDE 
This project has been created in WebStorm, but it will do in Microsoft Visual Studio Code as well.

## Installation

Use these steps to install project

1. Install Docker: https://www.docker.com/
2. Build project: `docker-compose build`
3. Run docker-compose: `docker-compose up -d`
4. Stop containers: `docker-compose down`

For local development (NodeJS) pass variables in .env file.
 
## NodeJS project folders structure

This boilerplate project has the following directory structure:

- <b>/src </b> - main sources folder;
- <b>/src/constants </b> - constants;
- <b>/src/controllers </b> - controllers receiving requests from routes;
- <b>/src/middleware </b> - app mid tier;
- <b>/src/entities </b> - (optionally) database entities *();
- <b>/src/services </b> - data services;
- <b>/src/app.js </b> - application config;
- <b>/src/index.js </b> -main scripts launching the server to listen to requests;
- <b>/test </b> - tests for controllers, services and other application components.

## NodeJS project scripts
- lint - lint the code with eslint;
- start - launch the server in development mode;
- build - build the project;
- serve - serve the built application

## Main Technologies and libraries

- <a href="https://www.docker.com/">Docker</a>
- <a href="https://nodejs.org/en/">NodeJS</a>
- <a href="https://www.nginx.com/">Nginx</a>
- <a href="https://koajs.com/#">KoaJS</a>
- <a href="https://babeljs.io/">Babel</a>
- <a href="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</a>
- <a href="https://github.com/typeorm/typeorm">typeorm</a>
- <a href="https://github.com/jeffijoe/awilix">awilix</a>
- <a href="https://github.com/jeffijoe/awilix-koa">awilix-koa</a>
- <a href="https://github.com/koajs/bodyparser">koa-bodyparser</a>
- <a href="https://github.com/varunpal/koa-cookie">koa-cookie</a>
- <a href="https://github.com/alexmingoia/koa-router">koa-router</a>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
## People who inspired me to write the data microservice in Node.js
-[Vlad Morzhanov](https://github.com/morzhanov/nodejs-reverse-proxy-example)

-[Thomas Hunter II](https://medium.com/intrinsic/why-should-i-use-a-reverse-proxy-if-node-js-is-production-ready-5a079408b2ca)
## Author

Dmitry Che

## License

#### (The MIT License)
