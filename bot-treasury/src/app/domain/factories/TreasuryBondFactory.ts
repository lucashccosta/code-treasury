import { TreasuryBond } from "../entities/TreasuryBond";

export class TreasuryBondFactory
{
    public static mapperFromRepo({ 
        cd,
        nm: name, 
        featrs, 
        invstmtStbl, 
        rcvgIncm, 
        mtrtyDt, 
        untrRedVal,
        minRedVal,
        FinIndxs: { nm },
        anulInvstmtRate 
    }: any): TreasuryBond {
        return new TreasuryBond(
            cd,
            name,
            featrs + invstmtStbl + rcvgIncm,
            mtrtyDt,
            untrRedVal,
            minRedVal,
            nm + anulInvstmtRate
        );
    }
}
