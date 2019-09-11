import App from './app';

const app = new App().initRoutes();

const port = 8080;
app.listen(port);