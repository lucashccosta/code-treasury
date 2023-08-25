export interface CacheInterface
{   
    save(key: string, data: any, ttl?: number): Promise<void>;
}