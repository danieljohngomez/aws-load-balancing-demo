import HealthcheckRoute from "./healthcheck/healthcheck.route";

process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import IndexRoute from "./aws/index.route";
import App from "./app";
import {AwsService} from "./aws/aws.service";
import {HealthcheckService} from "./healthcheck/healthcheck.service";

const awsService = new AwsService();
const healthCheckService = new HealthcheckService();

const app = new App([new IndexRoute(awsService), new HealthcheckRoute(healthCheckService)]);

app.listen();
