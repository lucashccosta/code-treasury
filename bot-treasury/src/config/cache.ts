export default
{
    host: String(process.env.CACHE_HOST) ?? "localhost",
    port: Number(process.env.CACHE_PORT) ?? 6379,
    ttl: Number(process.env.CACHE_TTL) ?? 0,
    "treasury-prefix-key": String(process.env.CACHE_TREASURY_PREFIX_KEY) ?? "code-treasury",
}