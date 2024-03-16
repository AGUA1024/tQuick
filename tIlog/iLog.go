package tIlog

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
