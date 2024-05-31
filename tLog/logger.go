package tLog

import (
	"fmt"
	"github.com/AGUA1024/tQuick/global"
	"github.com/natefinch/lumberjack"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"log"
	"os"
	"runtime/debug"
	"time"
)

var DEFAULT_TIME_TYPE = zapcore.TimeEncoderOfLayout("2006-01-02 15:04:05.000")

type ILogConf interface {
	// 获取日志等级
	GetLevel() string

	// 获取日志最大配置
	GetMaxSize() int

	// 获取日志最大副本保存个数
	GetMaxBackups() int

	// 获取日志最大保存天数
	GetMaxKeepDay() int

	// 获取日志是否压缩的状态
	GetCompressStautus() bool
}

type tLogger struct {
	LogCore    *zap.SugaredLogger
	LogPath    string
	Level      string
	MaxSize    int
	MaxBackups int
	MaxAge     int
	IsCompress bool
}

var Logger = &tLogger{}

func Debug(args ...interface{}) {
	Logger.LogCore.Debug(args...)
}

func Debugf(template string, args ...interface{}) {
	Logger.LogCore.Debugf(template, args...)
}

func Info(args ...interface{}) {
	Logger.LogCore.Info(args...)
}

func Infof(template string, args ...interface{}) {
	Logger.LogCore.Infof(template, args...)
}

func Warn(args ...interface{}) {
	Logger.LogCore.Warn(args...)
}

func Warnf(template string, args ...interface{}) {
	Logger.LogCore.Warnf(template, args...)
}

func Error(args ...interface{}) {
	Logger.LogCore.Error(args...)
}

func Errorf(template string, args ...interface{}) {
	Logger.LogCore.Errorf(template, args...)
}

func (l *tLogger) GetLevel() string {
	return l.Level
}

func (l *tLogger) GetMaxSize() int {
	return l.MaxSize
}

func (l *tLogger) GetMaxBackups() int {
	return l.MaxBackups
}

func (l *tLogger) GetMaxAge() int {
	return l.MaxAge
}

func (l *tLogger) GetCompressStatus() bool {
	return l.IsCompress
}

func (this *tLogger) SystemErrorLog(message ...any) {
	log.Println(fmt.Sprintln(message...) + string(debug.Stack()))
	//this.Logger.Logger.Panic(fmt.Sprintln(message...) + string(debug.Stack()))
	//runtime.Goexit()
}

func (l *tLogger) LoadConfig() {
	logConf := global.GetGlobalConfig().Log

	l.Level = logConf.Level
	l.MaxSize = logConf.MaxSize
	l.MaxBackups = logConf.MaxBackups
	l.MaxAge = logConf.MaxAge
	l.IsCompress = logConf.IsCompress
}

func LogInit() {
	var coreArr []zapcore.Core

	logConf := global.GetGlobalConfig().Log

	//获取编码器
	encoderConfig := zap.NewProductionEncoderConfig() //NewJSONEncoder()输出json格式，NewConsoleEncoder()输出普通文本格式
	encoderConfig.EncodeTime = DEFAULT_TIME_TYPE      //指定时间格式
	//encoderConfig.EncodeLevel = zapcore.CapitalColorLevelEncoder //按级别显示不同颜色，不需要的话取值zapcore.CapitalLevelEncoder就可以了
	encoderConfig.EncodeLevel = zapcore.CapitalLevelEncoder
	//encoderConfig.EncodeCaller = zapcore.FullCallerEncoder //显示完整文件路径
	encoder := zapcore.NewConsoleEncoder(encoderConfig)

	//日志级别判定
	errorPriority := zap.LevelEnablerFunc(func(lev zapcore.Level) bool { //error级别
		return lev == zap.ErrorLevel
	})

	lowPriority := zap.LevelEnablerFunc(func(lev zapcore.Level) bool { //info和debug级别,debug级别是最低的
		return lev < zap.ErrorLevel && lev >= zap.DebugLevel
	})

	//info文件writeSyncer
	infoFileWriteSyncer := zapcore.AddSync(&lumberjack.Logger{
		Filename:   logConf.LogPath + "/info_" + time.Now().Format(time.DateOnly) + ".log", //日志文件存放目录，如果文件夹不存在会自动创建
		MaxSize:    logConf.MaxSize,                                                        //文件大小限制,单位MB
		MaxBackups: logConf.MaxBackups,                                                     //最大保留日志文件数量
		MaxAge:     logConf.MaxAge,                                                         //日志文件保留天数
		Compress:   logConf.IsCompress,                                                     //是否压缩处理
	})
	infoFileCore := zapcore.NewCore(encoder, zapcore.NewMultiWriteSyncer(infoFileWriteSyncer, zapcore.AddSync(os.Stdout)), lowPriority) //第三个及之后的参数为写入文件的日志级别,ErrorLevel模式只记录error级别的日志

	//error文件writeSyncer
	errorFileWriteSyncer := zapcore.AddSync(&lumberjack.Logger{
		Filename:   logConf.LogPath + "/error_" + time.Now().Format(time.DateOnly) + ".log", //日志文件存放目录
		MaxSize:    logConf.MaxSize,                                                         //文件大小限制,单位MB
		MaxBackups: logConf.MaxBackups,                                                      //最大保留日志文件数量
		MaxAge:     logConf.MaxAge,                                                          //日志文件保留天数
		Compress:   logConf.IsCompress,                                                      //是否压缩处理
	})
	errorFileCore := zapcore.NewCore(encoder, zapcore.NewMultiWriteSyncer(infoFileWriteSyncer, errorFileWriteSyncer, zapcore.AddSync(os.Stdout)), errorPriority) //第三个及之后的参数为写入文件的日志级别,ErrorLevel模式只记录error级别的日志

	coreArr = append(coreArr, infoFileCore)
	coreArr = append(coreArr, errorFileCore)
	Logger.LogCore = zap.New(zapcore.NewTee(coreArr...), zap.AddCaller(), zap.AddCallerSkip(1)).Sugar() //zap.AddCaller()为显示文件名和行号，可省略
}
