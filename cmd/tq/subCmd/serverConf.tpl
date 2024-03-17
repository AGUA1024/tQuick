server:                                    # 服务端配置
  app: {{.AppName}}                              # 业务的应用名
  env: Development                         # 环境类型，分正式Production和非正式Development两种类型
  port: 8000                               # 服务监听端口

log:                                       #日志配置
  logPath: ./log
  level: info                              #本地文件滚动日志的级别
  maxSize: 10                              #本地文件滚动日志的大小 单位 MB
  maxBackups: 10                           #最大日志文件数
  maxAge: 7                                #最大日志保留天数
  isCompress: false                        #日志文件是否压缩

db:
  mysql:
    - name: mysql_1
      target: root:123456@tcp(127.0.0.1:3306)/tQuick?timeout=1s
      timeOut: 2000
    - name: mysql_2
      target: root:123456@tcp(127.0.0.1:3306)/tQuick?timeout=1s
      timeout: 2000

cache:
  redis:
    - name: redis_1
      target: redis://:123456@127.0.0.1:6379/0
      timeout: 800 # 超时时间
    - name: redis_2
      target: redis://:123456@127.0.0.1:6379/0
      timeout: 800 # 超时时间

