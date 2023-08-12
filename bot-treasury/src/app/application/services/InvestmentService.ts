import { InvestmentRepositoryInterface } from "../../domain/contracts/InvestmentRepositoryInterface";

export class InvestmentService
{
    constructor(
        private readonly investmentRepository: InvestmentRepositoryInterface
    ) {}

    public async getTreasuryBond(): Promise<void>
    {
        const treasuryBondList = await this.investmentRepository.getTreasuryBond();
        console.log(treasuryBondList);

        //TODO: save to redis
    }
}
