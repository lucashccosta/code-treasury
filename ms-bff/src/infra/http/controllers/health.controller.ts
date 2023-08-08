import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck, HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';

@Controller('health')
export class HealthController 
{
  	constructor(
		private health: HealthCheckService,
  	) {}

  	@Get()
  	@HealthCheck()
	public check() {
		return this.health.check([
			() => new LiveHealthIndicator().check('svc')
		]);
  	}
}

class LiveHealthIndicator extends HealthIndicator 
{
    public check(key: string): HealthIndicatorResult {
		const isHealthy = true;
			
		return super.getStatus(key, isHealthy);
    }
}