import { cache } from "../../../config";
import { CacheInterface } from "../../domain/contracts/CacheInterface";
import { InvestmentRepositoryInterface } from "../../domain/contracts/InvestmentRepositoryInterface";

export class InvestmentService
{
    constructor(
        private readonly investmentRepository: InvestmentRepositoryInterface,
        private readonly cache: CacheInterface
    ) {}

    public async getTreasuryBond(): Promise<void>
    {
        const treasuryBondList = await this.investmentRepository.getTreasuryBond();
        const now = new Date().toLocaleDateString().replaceAll('/', '-');
        await this.cache.save(`${cache["treasury-prefix-key"]}-${now}`, treasuryBondList.items);
    }
}
