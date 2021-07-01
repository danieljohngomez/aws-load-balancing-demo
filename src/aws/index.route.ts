import { Router } from 'express';
import IndexController from "./index.controller";
import {AwsService} from "./aws.service";
export interface Route {
  router: Router
}

class IndexRoute implements Route {
  public path = '/';
  public router = Router();
  public indexController = new IndexController(this.awsService);

  constructor(private readonly awsService: AwsService) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
  }
}

export default IndexRoute;
