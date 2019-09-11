import express from 'express';
import bodyParser from 'body-parser';
import indexRoute from './routes/index';

export default class App {
    private express: express.Express = express();

    public initRoutes() : App {
        this.express.use(bodyParser.json({ limit: '50mb' }));
        this.express.use('/', indexRoute);
        return this;
    }

    public listen(port: number) : void {
        this.express.listen(port, () => console.log(`App listening on Port ${port}`));
    }
}