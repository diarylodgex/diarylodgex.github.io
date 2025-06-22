# Nginx 配置文档

## 一、基础配置结构

### 1. 主配置文件结构

```nginx
# 全局块
user www-data;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

# events 块
events {
    worker_connections 1024;
}

# http 块
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # 日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    # 访问日志
    access_log  /var/log/nginx/access.log  main;

    # 连接超时设置
    keepalive_timeout 65;
    client_header_timeout 30;
    client_body_timeout 30;

    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json;

    # 虚拟主机配置
    include /etc/nginx/conf.d/*.conf;
}
```

### 2. 虚拟主机配置示例

```
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/example.com;
    index index.html index.htm;

    # 访问日志
    access_log /var/log/nginx/example.access.log;
    error_log /var/log/nginx/example.error.log;

    # 错误页面
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;

    # 静态文件缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires 7d;
        log_not_found off;
    }

    # 代理配置
    location /api/ {
        proxy_pass http://backend_server;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 二、核心配置指令


### 1. 服务器基础配置
```
# 监听端口和域名
listen 80;                      # 监听 80 端口
listen 443 ssl;                 # 监听 443 端口并启用 SSL
listen [::]:80 ipv6only=on;     # 仅监听 IPv6

# 服务器名称
server_name example.com www.example.com;

# 根目录和索引文件
root /var/www/html;
index index.php index.html;

# 访问控制
allow 192.168.1.0/24;           # 允许指定 IP 段
deny all;  # 拒绝所有
```

### 2. 路径匹配规则

```
# 精确匹配
location = /exact-match { ... }

# 前缀匹配
location ^~ /static/ { ... }     # 以 /static/ 开头的路径

# 正则匹配
location ~ \.(js|css|png)$ { ... }  # 匹配扩展名
location ~* \.jpg$ { ... }           # 不区分大小写

# 默认匹配
location / { ... }
```

### 3. 代理服务器配置

```
location /api/ {
    proxy_pass http://backend_server:8080/;  # 后端服务器地址

    # 代理头信息
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # 超时设置
    proxy_connect_timeout 5s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;

    # 缓冲区设置
    proxy_buffer_size 32k;
    proxy_buffers 4 32k;

    # WebSocket 支持
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

### 4. SSL/TLS 配置

```
server {
    listen 443 ssl;
    server_name example.com;

    # SSL 证书和密钥
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;

    # SSL 协议和加密套件
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;

    # SSL 会话缓存
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # HSTS 头部
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}

# HTTP 到 HTTPS 重定向
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}
```

## 三、负载均衡配置

## 1. 负载均衡基础配置

```
# 定义后端服务器组
upstream backend_servers {
    server backend1.example.com weight=5;  # 权重为 5
    server backend2.example.com;           # 默认权重为 1
    server backend3.example.com backup;    # 备份服务器，仅当其他服务器不可用时启用
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 2. 负载均衡算法

```
upstream backend_servers {
    # 轮询 (默认)
    least_conn;                  # 最少连接数
    ip_hash;                     # 基于客户端 IP 哈希
    url_hash;                    # 基于 URL 哈希
    hash $request_uri consistent; # 一致性哈希

    server backend1.example.com;
    server backend2.example.com;
}
```

### 3. 健康检查配置

```
upstream backend_servers {
    server backend1.example.com max_fails=3 fail_timeout=30s;
    server backend2.example.com max_fails=3 fail_timeout=30s;

    # 主动健康检查 (需要 ngx_http_upstream_hc 模块)
    check interval=5000 rise=2 fall=3 timeout=1000 type=http;
    check_http_send "HEAD /health HTTP/1.1\r\nHost: $host\r\n\r\n";
    check_http_expect_alive http_2xx http_3xx;
}
```

## 四、性能优化配置

### 1. 连接优化

```
# 工作进程和连接数
worker_processes auto;          # 自动根据 CPU 核心数设置
worker_connections 1024;        # 每个工作进程的最大连接数

# 连接优化
multi_accept on;                # 一次性接受所有连接
use epoll;                      # 使用 epoll 事件模型 (Linux)
```

### 2. 静态文件优化

```
# 静态文件处理
location ~* \.(js|css|png|jpg|jpeg|gif|ico|woff|woff2|ttf|svg|eot)$ {
    expires 7d;                 # 浏览器缓存 7 天
    add_header Cache-Control "public, max-age=604800";
    access_log off;             # 关闭访问日志
    gzip_static on;             # 使用预压缩的 .gz 文件
}

# 文件传输优化
sendfile on;                    # 启用零拷贝
tcp_nopush on;                  # 合并小数据包
tcp_nodelay on;                 # 不延迟发送数据
```

### 3. Gzip 压缩配置

```
gzip on;
gzip_min_length 1024;           # 最小压缩大小
gzip_comp_level 6;              # 压缩级别 (1-9)
gzip_types text/plain text/css application/json text/javascript;
gzip_vary on;                   # 添加 Vary: Accept-Encoding 头
gzip_proxied any;               # 压缩代理请求
```

## 五、安全配置

### 1. 隐藏 Nginx 版本信息

```
server_tokens off;              # 不显示 Nginx 版本
```

### 2. 限制请求大小

```
client_max_body_size 10m;       # 最大请求体大小
client_body_buffer_size 128k;   # 请求体缓冲区大小
```

### 3. 防止点击劫持

```
add_header X-Frame-Options "SAMEORIGIN";  # 允许同源页面嵌入
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
```

### 4. 防盗链配置

```
location ~* \.(jpg|jpeg|png|gif|ico|pdf)$ {
    valid_referers none blocked example.com *.example.com;
    if ($invalid_referer) {
        return 403;
    }
}
```

## 六、常用配置场景

### 1. PHP-FPM 配置

```

server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    location / {
        index index.php index.html;
        try_files $uri $uri/ /index.php?$query_string;
    }

    # PHP 文件处理
    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

### 2. 单页应用 (SPA) 配置

```

server {
    listen 80;
    server_name spa.example.com;
    root /var/www/spa;
    index index.html;

    # 所有请求都返回 index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 3. 日志分割配置

```
# 创建日志分割脚本 /etc/logrotate.d/nginx
/var/log/nginx/*.log {
    daily                   # 每天分割
    missingok               # 忽略不存在的文件
    rotate 14               # 保留 14 天日志
    compress                # 压缩旧日志
    delaycompress           # 延迟压缩前一天的日志
    notifempty              # 空日志不分割
    create 0640 www-data adm # 创建新日志文件
    sharedscripts           # 执行一次 postrotate 脚本
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
```

## 七、故障排除

### 1. 检查配置文件语法

```
nginx -t  # 测试配置文件语法
```

### 2. 重新加载配置

```
nginx -s reload  # 平滑重启，不中断现有连接
```

### 3. 常见错误解决

```
502 Bad Gateway：检查后端服务器是否正常运行
504 Gateway Timeout：增加 proxy_connect_timeout 和 proxy_read_timeout
413 Request Entity Too Large：增加 client_max_body_size
403 Forbidden：检查文件权限和 SELinux/AppArmor 设置
```

### 4. 性能监控

```
# 查看 Nginx 状态
server {
    listen 8080;
    server_name localhost;

    location /nginx_status {
        stub_status on;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
```
