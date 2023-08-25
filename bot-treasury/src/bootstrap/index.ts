import * as config from "../config";
import { InvestmentService } from "../app/application/services/InvestmentService";
import { CrawlingBondTreasuryUseCase } from "../app/application/usecases/CrawlingBondTreasuryUseCase";
import { TesouroNacionalRepository } from "../app/infrastructure/adapters/repositories/TesouroNacionalRepository";
import RedisCache from "../app/infrastructure/adapters/cache/RedisCache";

const investmentService = new InvestmentService(
    new TesouroNacionalRepository(),
    new RedisCache(
        config.cache.host,
        config.cache.port
    )
);

const crawlingBondTreasuryUseCase = new CrawlingBondTreasuryUseCase(investmentService);
crawlingBondTreasuryUseCase.handle();
