import {NextFunction, Request, Response} from 'express';
import {HealthcheckService} from "./healthcheck.service";

class HealthcheckController {

  constructor(private readonly healthcheckService: HealthcheckService) {
  }

  public healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (this.healthcheckService.isHealthy()) {
        res.status(200).json({status: 'okeh'});
      } else {
        res.status(500).json({status: 'not okeh'});
      }
    } catch (error) {
      next(error);
    }
  };

  public setHealthiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const value = req.params.value;
      if (value === 'yes') {
        this.healthcheckService.setHealthiness(true);
        res.status(200).json({message: 'healthiness set to HTTP 200 - okeh'});
      } else if (value === 'no') {
        this.healthcheckService.setHealthiness(false);
        res.status(200).json({message: 'healthiness set to HTTP 500 - not okeh'});
      }
    } catch (error) {
      next(error);
    }
  };

}

export default HealthcheckController;
