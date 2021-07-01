export class HealthcheckService {

  private healthy = true;

  public isHealthy(): boolean {
    return this.healthy;
  }

  public setHealthiness(value: boolean): void {
    this.healthy = value;
  }
}
