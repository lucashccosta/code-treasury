import { InvestmentService } from "../app/application/services/InvestmentService";
import { CrawlingBondTreasuryUseCase } from "../app/application/usecases/CrawlingBondTreasuryUseCase";
import { TesouroNacionalRepository } from "../app/infrastructure/adapters/repositories/TesouroNacionalRepository";

const investmentService = new InvestmentService(new TesouroNacionalRepository());
const crawlingBondTreasuryUseCase = new CrawlingBondTreasuryUseCase(investmentService);

crawlingBondTreasuryUseCase.handle();
