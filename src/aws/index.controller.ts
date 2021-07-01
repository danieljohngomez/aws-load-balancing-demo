import {NextFunction, Request, Response} from 'express';
import {AwsService} from "./aws.service";

class IndexController {

  constructor(private readonly awsService: AwsService) {
  }

  public index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const metadata = await this.awsService.getEC2Metadata()
      res.send(metadata);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
