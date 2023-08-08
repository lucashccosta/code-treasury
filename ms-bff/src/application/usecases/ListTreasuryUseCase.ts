import UseCaseInterface from "src/domain/contracts/UseCaseInterface";

export class ListTreasuryUseCase implements UseCaseInterface<Array<object>>
{
	public async handle(): Promise<Array<object>>
	{
		return Promise.resolve([{ id: 1, name: 'Tesouro Selic 2026' }]);
	}
}