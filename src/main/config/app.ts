import cors from 'cors';
import express from 'express';
import { readdirSync } from 'fs';
import path from 'path';

import env from '@/main/config/environments/application';

export class App {
  public readonly app: express.Express;

  constructor() {
    this.app = express();
  }

  getApp(): express.Express {
    return this.app;
  }

  setupEnvironment(): App {
    this.app.use(express.json());
    this.app.use(cors());
    return this;
  }

  errorHandler(
    error: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ): express.Response {
    if (env.mode !== 'development' && !!(error as any)?.statusCode) {
      return res.status((error as any)?.statusCode ?? 400).json({
        error: error?.message ?? 'unknown',
      });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }

  setupRoutes(): App {
    const router = express.Router();
    this.app.get('/', (_, res) => res.status(200).send('ok'));
    router.get('/', (_, res) => res.status(200).send('ok'));

    this.app.use('/api', router);
    const routesPath = path.resolve(__dirname, '../routes');
    readdirSync(routesPath)
      .filter(file => !file.endsWith('.map'))
      .forEach(async file => {
        (await import(`${routesPath}/${file}`)).default(router);
      });

    this.app.use(this.errorHandler.bind(this));
    return this;
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`⚡️ App listen on port ${port}.`);
    });
  }
}

export default new App().setupEnvironment().setupRoutes();
