import { CacheInterface } from "../../../domain/contracts/CacheInterface";
import Redis from "./Redis";

export default class RedisCache implements CacheInterface
{
    private readonly cache: Redis;

    constructor(host: string, port: number) 
    {
        this.cache = Redis.getInstance(host, port);
    }

    public async save(key: string, data: any, ttl?: number): Promise<void> 
    {
        try {
            await this.cache.getClient().connect();

            if (ttl) {
                await this.cache.getClient().setEx(key, ttl, JSON.stringify(data));
            }
    
            await this.cache.getClient().set(key, JSON.stringify(data));
        } finally {
            if (this.cache.getClient().isOpen) {
                await this.cache.getClient().disconnect();
            }
        }
    }
}