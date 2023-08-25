import { RedisClientType, createClient } from "redis";

export default class Redis
{
    public static instance: Redis;
    protected client: RedisClientType;

    public static getInstance(host: string, port: number): Redis
    {
        if (!Redis.instance) {
            Redis.instance = new Redis(host, port);
        }

        return Redis.instance;
    }

    public getClient(): RedisClientType
    {
        return this.client;
    }

    private constructor(host: string, port: number) 
    {
        this.client = createClient({ socket: { host, port } });

        return this;
    }
}