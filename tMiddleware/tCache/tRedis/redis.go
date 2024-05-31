package tRedis

import (
	"github.com/AGUA1024/tQuick/tMiddleware"
	"github.com/go-redis/redis/v8"
)

func GetRedis(name string) (*redis.Client, error) {
	return tMiddleware.CachePools.RedisPool[name], nil
}
