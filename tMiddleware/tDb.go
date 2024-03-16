package tMiddleware

import (
	"github.com/AGUA1024/tQuick/global"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Db = &DbSet{
	Mysql: map[string]*gorm.DB{},
}

type DbSet struct {
	Mysql map[string]*gorm.DB
}

func DbInit() {
	// DB配置
	arrMysql := global.GetGlobalConfig().Db

	for k, v := range arrMysql {
		switch k {
		case "mysql":
			for _, vv := range v {
				db, err := gorm.Open(mysql.Open(vv.Target), &gorm.Config{})
				if err != nil {
					panic(err)
				}

				Db.Mysql[vv.Name] = db
			}
		}
	}

}