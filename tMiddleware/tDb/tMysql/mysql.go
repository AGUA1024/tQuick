package tMysql

import (
	"github.com/AGUA1024/tQuick/global"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/AGUA1024/tQuick/tMiddleware"
	"github.com/natefinch/lumberjack"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"time"
)

func GetMysql(name string) (*gorm.DB, error) {
	zapLogger := createZapLogger()

	// 修改日志记录器
	session := tMiddleware.DbPools.MysqlPool[name].Session(&gorm.Session{ // 自定session并且GORM日志存放到文件
		Logger: createGormZapLogger(zapLogger),
	})

	return session, nil
}

// 创建zap日志记录器，支持日志轮转
func createZapLogger() *zap.Logger {
	mysqlLogConf := global.GetGlobalConfig().Db.Log
	logPath := global.GetGlobalConfig().Log.LogPath

	writer := zapcore.AddSync(&lumberjack.Logger{
		Filename:   logPath + "/mysql_" + time.Now().Format(time.DateOnly) + ".log",
		MaxSize:    mysqlLogConf.MaxSize, // megabytes
		MaxBackups: mysqlLogConf.MaxBackups,
		MaxAge:     mysqlLogConf.MaxAge, // days
	})

	encoderConfig := zap.NewProductionEncoderConfig()
	encoderConfig.EncodeTime = tLog.DEFAULT_TIME_TYPE
	encoderConfig.EncodeLevel = nil // Disable level encoding
	core := zapcore.NewCore(
		zapcore.NewConsoleEncoder(encoderConfig),
		writer,
		zap.InfoLevel,
	)

	return zap.New(core)
}

// 创建与GORM兼容的zap日志记录器
func createGormZapLogger(zapLogger *zap.Logger) logger.Interface {
	return logger.New(&gormZap{zapLogger}, logger.Config{
		SlowThreshold: time.Second,
		LogLevel:      logger.Info,
	})
}

// gormZap实现了logger.Writer接口，以便与GORM兼容
type gormZap struct {
	*zap.Logger
}

func (g *gormZap) Printf(format string, v ...interface{}) {
	g.Sugar().Infof(format, v...)
}
