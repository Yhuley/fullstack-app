import express, { Application, NextFunction } from 'express';
import { getMetadataArgsStorage, RoutingControllersOptions, useExpressServer } from 'routing-controllers';
import { errorMiddleware, getAuthenticator, validationMetadatasToSchemas } from '@panenco/papi';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';
import ormConfig from './orm.config';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { MikroORM, RequestContext } from '@mikro-orm/core';

export class App {
  host: Application;
  public orm: MikroORM<PostgreSqlDriver>;

  constructor() {
    this.host = express();

    // parse every body from request to json
    this.host.use(express.json());

    this.host.use((req, __, next: NextFunction) => {
      RequestContext.create(this.orm.em, next);
    });

    this.initializeControllers();

    this.initializeSwagger();

    this.host.use((req, res) => {
      res.status(404).send(`Can not ${req.method} ${req.url}`);
    });

    this.host.use(errorMiddleware);
  }

  private initializeControllers() {
    useExpressServer(this.host, {
      cors: {
        origin: '*',
        exposedHeaders: ['x-auth'], // Allow the header `x-auth` to be exposed to the client. This is needed for the authentication to work later.
      },
      controllers: [`${__dirname}/**/*.controller.ts`], // Provide the controllers. Currently this won't work yet, first we need to convert the Route to a routing-controllers controller.
      defaultErrorHandler: false, // Disable the default error handler. We will handle errors through papi later.
      routePrefix: '/api',
      authorizationChecker: getAuthenticator('jwtSecretFromConfigHere'),
    });
  }

  private initializeSwagger() {
    const { defaultMetadataStorage } = require('class-transformer/cjs/storage');

    const schemas = validationMetadatasToSchemas({
      classTransformerMetadataStorage: defaultMetadataStorage,
      refPointerPrefix: '#/components/schemas/',
    });
    const routingControllersOptions: RoutingControllersOptions = {
      routePrefix: '/api',
    };
    const storage = getMetadataArgsStorage();
    const spec = routingControllersToSpec(storage, routingControllersOptions, {
      components: {
        schemas,
        securitySchemes: {
          JWT: {
            in: 'header',
            name: 'x-auth',
            type: 'apiKey',
            bearerFormat: 'JWT',
            description: 'JWT Authorization header using the JWT scheme. Example: "x-auth: {token}"',
          },
        },
      },
      security: [{ JWT: [] }],
    });

    this.host.use('/docs', swaggerUi.serve, swaggerUi.setup(spec));
  }

  public async createConnection() {
    try {
      this.orm = await MikroORM.init(ormConfig);
    } catch (error) {
      console.log('Error while connecting to the database', error);
    }
  }

  listen() {
    this.host.listen(4000, () => {
      console.info(`🚀 http://localhost:4000`);
      console.info(`========================`);
    });
  }
}
