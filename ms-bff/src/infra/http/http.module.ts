import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { InvestmentController } from './controllers/investment.controller';
import { ListTreasuryUseCase } from 'src/application/usecases/ListTreasuryUseCase';

@Module({
	imports: [
    TerminusModule
  ],
  providers: [
    ListTreasuryUseCase
  ],
  controllers: [
    HealthController,
    InvestmentController
  ],
})

export class HttpModule {}