package tMysql

import (
	"github.com/AGUA1024/tQuick/tMiddleware"
	"gorm.io/gorm"
)

func GetMysql(name string) *gorm.DB {
	return tMiddleware.Db.Mysql[name]
}
