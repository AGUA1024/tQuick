package global

import (
	"fmt"
	"github.com/spf13/viper"
)

var globalConfig = tQucikConf{}

type tQucikConf struct {
	Server *Server    `yaml:"server"`
	ApiDoc *ApiDoc    `yaml:"apiDoc"`
	Log    *Log       `yaml:"log"`
	Db     *DbConf    `yaml:"db"`
	Cache  *CacheConf `yaml:"cache"`
}

type Server struct {
	App     string `yaml:"app"`
	Version string `yaml:"version"`
	Env     string `yaml:"env"`
	Ip      string `yaml:"ip"`
	Port    int    `yaml:"port"`
}

type ApiDoc struct {
	SwaggerPath string    `json:"swaggerPath"`
	ApiFox      ApiFoxDoc `json:"apiFox"`
}

type ApiFoxDoc struct {
	Enable    bool   `json:"enable"`
	ProjectId string `json:"projectId"`
	Token     string `json:"token"`
}

type Log struct {
	LogPath    string `yaml:"logPath"`
	Level      string `yaml:"level"`
	MaxSize    int    `yaml:"maxSize"`
	MaxBackups int    `yaml:"maxBackups"`
	MaxAge     int    `yaml:"maxAge"`
	IsCompress bool   `yaml:"isCompress"`
}

type DbConf struct {
	Log   *DbLog            `yaml:"log"`
	Mysql []*MiddlewareInfo `yaml:"mysql"`
}

type CacheConf struct {
	Redis []*MiddlewareInfo `yaml:"redis"`
}

type DbLog struct {
	Enable     bool   `yaml:"enable"`
	Level      string `yaml:"level"`
	MaxSize    int    `yaml:"maxSize"`
	MaxBackups int    `yaml:"maxBackups"`
	MaxAge     int    `yaml:"maxAge"`
	IsCompress bool   `yaml:"isCompress"`
}

type MiddlewareInfo struct {
	Name   string `yaml:"name"`
	Target string `yaml:"target"`
}

func GetGlobalConfig() *tQucikConf {
	return &globalConfig
}

func LoadConfig(configPath string) {
	// 设置配置文件的名字
	viper.SetConfigFile(configPath)
	// 设置配置文件的类型
	viper.SetConfigType("yaml")
	// 寻找配置文件并读取
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("<In LoadConfig> fatal error config file: %w", err))
	}

	err = viper.Unmarshal(&globalConfig)
	if err != nil {
		panic(fmt.Errorf("<In LoadConfig> unable to decode into struct, %v", err))
	}
}
