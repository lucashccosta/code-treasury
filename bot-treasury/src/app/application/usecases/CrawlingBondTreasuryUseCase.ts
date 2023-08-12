import { InvestmentService } from "../services/InvestmentService";

export class CrawlingBondTreasuryUseCase
{
    constructor(
        private readonly investmentService: InvestmentService
    ) {}

    public async handle()
    {
        await this.investmentService.getTreasuryBond();
    }
}
