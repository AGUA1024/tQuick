package tMysql

import (
	"github.com/AGUA1024/tQuick/tMiddleware"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
	"os"
	"time"
)

func GetMysql(name string) (*gorm.DB, error) {
	// 获取当前日期，并创建一个日期命名的日志文件
	currentDate := time.Now().Format("2006-01-02")
	logFilePath := "./log/db_" + currentDate + ".log"

	file, err := os.OpenFile(logFilePath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		return nil, err
	}

	// 修改日志记录器
	session := tMiddleware.Db.Mysql[name].Session(&gorm.Session{ // 自定session并且GORM日志存放到文件
		Logger: logger.New(log.New(file, "\r\n", log.LstdFlags),
			logger.Config{
				SlowThreshold: time.Second,
				LogLevel:      logger.Info,
			}),
	})

	return session, nil
}
