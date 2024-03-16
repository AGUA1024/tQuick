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

var DEFAULT_TIME_TYPE = zapcore.TimeEncoderOfLayout(time.DateTime)

type tLogger struct {
	LogCore    *zap.Logger
	LogPath    string
	Level      string
	MaxSize    int
	MaxBackups int
	MaxAge     int
	IsCompress bool
}

var Logger = &tLogger{}

func Info(msg string, fields ...zap.Field) {
	Logger.LogCore.Info(msg, fields...)
}

func Debug(msg string, fields ...zap.Field) {
	Logger.LogCore.Debug(msg, fields...)
}

func Error(msg string, fields ...zap.Field) {
	Logger.LogCore.Error(msg, fields...)
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
	gameErrPriority := zap.LevelEnablerFunc(func(lev zapcore.Level) bool { //error级别
		return lev == zap.ErrorLevel
	})

	sysErrPriority := zap.LevelEnablerFunc(func(lev zapcore.Level) bool { //error级别
		return lev > zap.ErrorLevel
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

	fmt.Println(logConf.LogPath + "/error_" + time.Now().Format(time.DateOnly) + ".log")
	//error文件writeSyncer
	errorFileWriteSyncer := zapcore.AddSync(&lumberjack.Logger{
		Filename:   logConf.LogPath + "/error_" + time.Now().Format(time.DateOnly) + ".log", //日志文件存放目录
		MaxSize:    logConf.MaxSize,                                                         //文件大小限制,单位MB
		MaxBackups: logConf.MaxBackups,                                                      //最大保留日志文件数量
		MaxAge:     logConf.MaxAge,                                                          //日志文件保留天数
		Compress:   logConf.IsCompress,                                                      //是否压缩处理
	})
	errorFileCore := zapcore.NewCore(encoder, zapcore.NewMultiWriteSyncer(errorFileWriteSyncer, zapcore.AddSync(os.Stdout)), gameErrPriority) //第三个及之后的参数为写入文件的日志级别,ErrorLevel模式只记录error级别的日志

	//panic文件writeSyncer
	panicFileWriteSyncer := zapcore.AddSync(&lumberjack.Logger{
		Filename:   logConf.LogPath + "/sysErr_" + time.Now().Format(time.DateOnly) + ".log", //日志文件存放目录
		MaxSize:    logConf.MaxSize,                                                          //文件大小限制,单位MB
		MaxBackups: logConf.MaxBackups,                                                       //最大保留日志文件数量
		MaxAge:     logConf.MaxAge,                                                           //日志文件保留天数
		Compress:   logConf.IsCompress,                                                       //是否压缩处理
	})
	panicFileCore := zapcore.NewCore(encoder, zapcore.NewMultiWriteSyncer(panicFileWriteSyncer, zapcore.AddSync(os.Stdout)), sysErrPriority) //第三个及之后的参数为写入文件的日志级别,ErrorLevel模式只记录error级别的日志

	coreArr = append(coreArr, infoFileCore)
	coreArr = append(coreArr, errorFileCore)
	coreArr = append(coreArr, panicFileCore)
	Logger.LogCore = zap.New(zapcore.NewTee(coreArr...), zap.AddCaller()) //zap.AddCaller()为显示文件名和行号，可省略
}
