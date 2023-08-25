export default interface UseCaseInterface<T>
{
    handle: (...args: any) => Promise<T> | void
}