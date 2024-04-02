package global

import (
	"fmt"
	"github.com/spf13/viper"
)

var globalConfig = tQucikConf{}

type tQucikConf struct {
	Server *Server             `yaml:"server"`
	Log    *Log                `yaml:"log"`
	Db     map[string][]DbInfo `yaml:"db"`
	Cache  *Cache              `yaml:"cache"`
}

type Server struct {
	App     string `yaml:"app"`
	Version string `yaml:"version"`
	Env     string `yaml:"env"`
	Port    int    `yaml:"port"`
	ApiDoc  string `yaml:"apidoc"`
}

type DbInfo struct {
	Name    string `yaml:"name"`
	Target  string `yaml:"target"`
	TimeOut int    `yaml:"timeOut"`
}

type Log struct {
	LogPath    string `yaml:"logPath"`
	Level      string `yaml:"level"`
	MaxSize    int    `yaml:"maxSize"`
	MaxBackups int    `yaml:"maxBackups"`
	MaxAge     int    `yaml:"maxAge"`
	IsCompress bool   `yaml:"isCompress"`
}

type Cache struct {
	Redis []Redis `yaml:"redis"`
}

type Redis struct {
	Name    string `yaml:"name"`
	Target  string `yaml:"target"`
	Timeout int    `yaml:"timeout"`
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
