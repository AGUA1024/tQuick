package tMiddleware

import (
	"context"
	"fmt"
	"github.com/AGUA1024/tQuick/global"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/go-redis/redis/v8"
)

var CachePools = &CacheInstancePools{
	RedisPool: map[string]*redis.Client{},
}

type CacheInstancePools struct {
	RedisPool map[string]*redis.Client
}

func CacheInit() {
	// DB配置
	cacheConf := global.GetGlobalConfig().Cache

	arrRedisConf := cacheConf.Redis

	for _, v := range arrRedisConf {
		opt, err := redis.ParseURL(v.Target)
		if err != nil {
			errMsg := fmt.Sprintf("<In CacheInit> [Name:%v] ParseURL Error:  %v", v.Name, err)
			tLog.Error(errMsg)
			panic(errMsg)
		}

		client := redis.NewClient(opt)
		_, err = client.Ping(context.Background()).Result()
		if err != nil {
			errMsg := fmt.Sprintf("<In CacheInit> [Name:%v] Ping Error: %v", v.Name, err)
			tLog.Error(errMsg)
			panic(errMsg)
			return
		}

		rdb := redis.NewClient(opt)
		CachePools.RedisPool[v.Name] = rdb
	}

}
