import UseCaseInterface from "../../domain/contracts/UseCaseInterface";
import { InvestmentService } from "../services/InvestmentService";

export class CrawlingBondTreasuryUseCase implements UseCaseInterface<void>
{
    constructor(
        private readonly investmentService: InvestmentService
    ) {}

    public async handle(): Promise<void>
    {
        console.log("Iniciando busca dos investimentos tesouro direto.");
        await this.investmentService.getTreasuryBond();
        console.log("Finalizado busca dos investimentos tesouro direto.");
    }
}
