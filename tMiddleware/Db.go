package tMiddleware

import (
	"fmt"
	"github.com/AGUA1024/tQuick/global"
	"github.com/AGUA1024/tQuick/tLog"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DbPools = &DbInstancePools{
	MysqlPool: map[string]*gorm.DB{},
}

type DbInstancePools struct {
	MysqlPool map[string]*gorm.DB
}

func DbInit() {
	// DB配置
	dbConf := global.GetGlobalConfig().Db

	for _, v := range dbConf.Mysql {
		db, err := gorm.Open(mysql.Open(v.Target), &gorm.Config{})
		if err != nil {
			errMsg := fmt.Sprintf("<In DbInit> [Name:%v] Error: %v", v.Name, err)
			tLog.Error(errMsg)
			panic(errMsg)
		}

		DbPools.MysqlPool[v.Name] = db
	}
}
