import 'dotenv/config';
import express from 'express';
import config from './common/config/app.config'

class App {
  private app = express();

  private env = config.app.env

  private port = config.app.port

  public initialize() {
    this.app.listen(this.port, () => {
      console.info(`[web project api] run on ${this.env} env and using port ${this.port}`)
    })
  }
}

new App().initialize();