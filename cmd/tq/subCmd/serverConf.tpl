server:                                    # 服务端配置
  app: {{.AppName}}                              # 业务的应用名
  version: 0.0.1                           # 应用程序版本号
  env: Development                         # 环境类型，分正式Production和非正式Development两种类型
  ip: 127.0.0.1                            # 服务器ip地址
  port: 8000                               # 服务监听端口

apiDoc:
  swaggerPath: /tQuick                     # 接口文档地址前缀，访问地址为'{apidoc}/swagger/index.html'[配置时保留末级地址，如配置"/tQuick",则需避免"/tQuick/*any"路径使用]
  apifox:
    enable: false                          # apifox集成启动开关，bool值
    projectId: xxx                         # 项目id
    token: APS-xxx                         # 身份令牌,建议申请长期令牌

log:                                       # 日志配置
  logPath: ./log                           # 日志文件输出路径
  level: info                              # 本地文件滚动日志的级别
  maxSize: 10                              # 本地文件滚动日志的大小 单位 MB
  maxBackups: 10                           # 最大日志文件数
  maxAge: 7                                # 最大日志保留天数
  isCompress: false                        # 日志文件是否压缩

db:
  log:
    enable: true                             # 是否开启日志追踪
    level: info                              # 本地文件滚动日志的级别
    maxSize: 10                              # 本地文件滚动日志的大小 单位 MB
    maxBackups: 10                           # 最大日志文件数
    maxAge: 7                                # 最大日志保留天数
    isCompress: false                        # 日志文件是否压缩
  mysql:
    - name: mysql_1
      target: root:123456@tcp(127.0.0.1:3306)/tQuick?timeout=1s
    - name: mysql_2
      target: root:123456@tcp(127.0.0.1:3306)/tQuick?timeout=1s

cache:
  redis:
    - name: redis_1
      target: redis://:123456@127.0.0.1:6379/0
    - name: redis_2
      target: redis://:123456@127.0.0.1:6379/0

