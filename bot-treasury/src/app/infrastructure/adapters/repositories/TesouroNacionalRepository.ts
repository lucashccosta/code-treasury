import { InvestmentRepositoryInterface } from "../../../domain/contracts/InvestmentRepositoryInterface";
import { List } from "../../../domain/entities/List";
import { TreasuryBond } from "../../../domain/entities/TreasuryBond";
import { TreasuryBondFactory } from "../../../domain/factories/TreasuryBondFactory";

export class TesouroNacionalRepository implements InvestmentRepositoryInterface
{
    public async getTreasuryBond(): Promise<List<TreasuryBond>> 
    {
        let treasuryBondList = new Array<TreasuryBond>;
        const url = "https://www.tesourodireto.com.br/json/br/com/b3/tesourodireto/service/api/treasurybondsinfo.json";
        const response = await fetch(url);
        const { response: { TrsrBdTradgList: treasuryBonds }} = await response.json();

        for (const { TrsrBd: treasuryBond } of treasuryBonds) {
            console.log(treasuryBond);
            if (treasuryBond.untrInvstmtVal === 0 || treasuryBond.minInvstmtAmt === 0) {
                continue;
            }

            treasuryBondList.push(TreasuryBondFactory.mapperFromRepo(treasuryBond));
        }

        return new List(treasuryBondList);
    }
}
