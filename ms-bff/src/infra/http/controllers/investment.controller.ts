import { Controller, Get } from "@nestjs/common";
import { ListTreasuryUseCase } from "src/application/usecases/ListTreasuryUseCase";

@Controller('investments')
export class InvestmentController 
{
  	constructor(
		private listTreasury: ListTreasuryUseCase
	) {}

  	@Get('treasury-bonds')
  	public async treasury() {
		return await this.listTreasury.handle();
  	}
}