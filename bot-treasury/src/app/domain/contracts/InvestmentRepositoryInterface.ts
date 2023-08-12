import { List } from "../entities/List";
import { TreasuryBond } from "../entities/TreasuryBond";

export interface InvestmentRepositoryInterface
{
    getTreasuryBond(): Promise<List<TreasuryBond>>;
}
