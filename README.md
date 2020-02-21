# Data microservice written in NodeJS and packaged with nginx reverse-proxy

<img src="https://i.imgur.com/RVpDC4x.png"/>

Simple <a href="https://www.nginx.com/resources/glossary/reverse-proxy-server/">reverse-proxy</a> data service based on Nginx NodeJS and randomuser.me .

NodeJS part of this project is based on <a href="https://github.com/morzhanov/nodejs-koa-boilerplate">nodejs-koa-boilerplate</a>

## Installation

Use these steps to install project

1. Install Docker: https://www.docker.com/
2. Build project: `docker-compose build`
3. Run docker-compose: `docker-compose up -d`
4. Stop containers: `docker-compose down`

For local development (NodeJS) pass variables in .env file.
 
## NodeJS project folders structure

This boilerplate contains such folders:

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

## Author

Dmitry Che

## License

#### (The MIT License)
