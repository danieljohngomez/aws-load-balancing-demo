import axios from "axios";

export class AwsService {

  public async getEC2Metadata(): Promise<Record<string, unknown>> {
    try {
      const response = await axios.get('http://169.254.169.254/latest/meta-data/instance-id', { timeout: 5000 });
      return {"instance-id": response.data};
    } catch (error) {
      console.log(error.message);
      return {"error": "failed to retrieve metadata"};
    }
  }

}
