import {Router} from 'express';
import HealthcheckController from "./healthcheck.controller";
import {Route} from "../aws/index.route";
import {HealthcheckService} from "./healthcheck.service";

class HealthcheckRoute implements Route {
  public path = '/';
  public router = Router();
  public authController = new HealthcheckController(this.healthcheckService);

  constructor(private readonly healthcheckService: HealthcheckService) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}is-okeh`, this.authController.healthCheck);
    this.router.get(`${this.path}is-okeh/:value`, this.authController.setHealthiness);
  }
}

export default HealthcheckRoute;
