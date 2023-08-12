export class TreasuryBond
{
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly description: string,
        public readonly dueDate: string,
        public readonly unitPrice: number,
        public readonly minAmountInvest: number,
        public readonly profitability: number
    ) {}
}
