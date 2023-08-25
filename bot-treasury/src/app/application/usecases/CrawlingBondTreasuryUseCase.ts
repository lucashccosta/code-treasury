import UseCaseInterface from "../../domain/contracts/UseCaseInterface";
import { InvestmentService } from "../services/InvestmentService";

export class CrawlingBondTreasuryUseCase implements UseCaseInterface<void>
{
    constructor(
        private readonly investmentService: InvestmentService
    ) {}

    public async handle(): Promise<void>
    {
        await this.investmentService.getTreasuryBond();
    }
}
