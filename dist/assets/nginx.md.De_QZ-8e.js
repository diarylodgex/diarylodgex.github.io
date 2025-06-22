import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.Dgg8-8ov.js";const k=JSON.parse('{"title":"Nginx 配置文档","description":"","frontmatter":{},"headers":[],"relativePath":"nginx.md","filePath":"nginx.md","lastUpdated":1750597022000}'),i={name:"nginx.md"};function l(t,s,c,h,o,r){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="nginx-配置文档" tabindex="-1">Nginx 配置文档 <a class="header-anchor" href="#nginx-配置文档" aria-label="Permalink to &quot;Nginx 配置文档&quot;">​</a></h1><h2 id="一、基础配置结构" tabindex="-1">一、基础配置结构 <a class="header-anchor" href="#一、基础配置结构" aria-label="Permalink to &quot;一、基础配置结构&quot;">​</a></h2><h3 id="_1-主配置文件结构" tabindex="-1">1. 主配置文件结构 <a class="header-anchor" href="#_1-主配置文件结构" aria-label="Permalink to &quot;1. 主配置文件结构&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局块</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">user </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www-data;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_processes </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auto;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/error.log </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pid </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/run/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># events 块</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">events</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    worker_connections </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># http 块</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      /etc/nginx/mime.types;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    default_type </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 日志格式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    log_format </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_x_forwarded_for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 访问日志</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /var/log/nginx/access.log  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 连接超时设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    keepalive_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    client_header_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    client_body_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Gzip 压缩</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_types </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text/plain text/css application/json;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 虚拟主机配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-虚拟主机配置示例" tabindex="-1">2. 虚拟主机配置示例 <a class="header-anchor" href="#_2-虚拟主机配置示例" aria-label="Permalink to &quot;2. 虚拟主机配置示例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name example.com www.example.com;</span></span>
<span class="line"><span>    root /var/www/example.com;</span></span>
<span class="line"><span>    index index.html index.htm;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 访问日志</span></span>
<span class="line"><span>    access_log /var/log/nginx/example.access.log;</span></span>
<span class="line"><span>    error_log /var/log/nginx/example.error.log;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 错误页面</span></span>
<span class="line"><span>    error_page 404 /404.html;</span></span>
<span class="line"><span>    error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 静态文件缓存</span></span>
<span class="line"><span>    location ~* \\.(js|css|png|jpg|jpeg|gif|ico)$ {</span></span>
<span class="line"><span>        expires 7d;</span></span>
<span class="line"><span>        log_not_found off;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 代理配置</span></span>
<span class="line"><span>    location /api/ {</span></span>
<span class="line"><span>        proxy_pass http://backend_server;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="二、核心配置指令" tabindex="-1">二、核心配置指令 <a class="header-anchor" href="#二、核心配置指令" aria-label="Permalink to &quot;二、核心配置指令&quot;">​</a></h2><h3 id="_1-服务器基础配置" tabindex="-1">1. 服务器基础配置 <a class="header-anchor" href="#_1-服务器基础配置" aria-label="Permalink to &quot;1. 服务器基础配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 监听端口和域名</span></span>
<span class="line"><span>listen 80;                      # 监听 80 端口</span></span>
<span class="line"><span>listen 443 ssl;                 # 监听 443 端口并启用 SSL</span></span>
<span class="line"><span>listen [::]:80 ipv6only=on;     # 仅监听 IPv6</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 服务器名称</span></span>
<span class="line"><span>server_name example.com www.example.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根目录和索引文件</span></span>
<span class="line"><span>root /var/www/html;</span></span>
<span class="line"><span>index index.php index.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 访问控制</span></span>
<span class="line"><span>allow 192.168.1.0/24;           # 允许指定 IP 段</span></span>
<span class="line"><span>deny all;  # 拒绝所有</span></span></code></pre></div><h3 id="_2-路径匹配规则" tabindex="-1">2. 路径匹配规则 <a class="header-anchor" href="#_2-路径匹配规则" aria-label="Permalink to &quot;2. 路径匹配规则&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 精确匹配</span></span>
<span class="line"><span>location = /exact-match { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 前缀匹配</span></span>
<span class="line"><span>location ^~ /static/ { ... }     # 以 /static/ 开头的路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 正则匹配</span></span>
<span class="line"><span>location ~ \\.(js|css|png)$ { ... }  # 匹配扩展名</span></span>
<span class="line"><span>location ~* \\.jpg$ { ... }           # 不区分大小写</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 默认匹配</span></span>
<span class="line"><span>location / { ... }</span></span></code></pre></div><h3 id="_3-代理服务器配置" tabindex="-1">3. 代理服务器配置 <a class="header-anchor" href="#_3-代理服务器配置" aria-label="Permalink to &quot;3. 代理服务器配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location /api/ {</span></span>
<span class="line"><span>    proxy_pass http://backend_server:8080/;  # 后端服务器地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 代理头信息</span></span>
<span class="line"><span>    proxy_set_header Host $host;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 超时设置</span></span>
<span class="line"><span>    proxy_connect_timeout 5s;</span></span>
<span class="line"><span>    proxy_send_timeout 60s;</span></span>
<span class="line"><span>    proxy_read_timeout 60s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 缓冲区设置</span></span>
<span class="line"><span>    proxy_buffer_size 32k;</span></span>
<span class="line"><span>    proxy_buffers 4 32k;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # WebSocket 支持</span></span>
<span class="line"><span>    proxy_http_version 1.1;</span></span>
<span class="line"><span>    proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-ssl-tls-配置" tabindex="-1">4. SSL/TLS 配置 <a class="header-anchor" href="#_4-ssl-tls-配置" aria-label="Permalink to &quot;4. SSL/TLS 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name example.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # SSL 证书和密钥</span></span>
<span class="line"><span>    ssl_certificate /etc/nginx/ssl/cert.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /etc/nginx/ssl/key.pem;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # SSL 协议和加密套件</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # SSL 会话缓存</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:10m;</span></span>
<span class="line"><span>    ssl_session_timeout 10m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # HSTS 头部</span></span>
<span class="line"><span>    add_header Strict-Transport-Security &quot;max-age=31536000; includeSubDomains&quot; always;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTP 到 HTTPS 重定向</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name example.com;</span></span>
<span class="line"><span>    return 301 https://$host$request_uri;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="三、负载均衡配置" tabindex="-1">三、负载均衡配置 <a class="header-anchor" href="#三、负载均衡配置" aria-label="Permalink to &quot;三、负载均衡配置&quot;">​</a></h2><h2 id="_1-负载均衡基础配置" tabindex="-1">1. 负载均衡基础配置 <a class="header-anchor" href="#_1-负载均衡基础配置" aria-label="Permalink to &quot;1. 负载均衡基础配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 定义后端服务器组</span></span>
<span class="line"><span>upstream backend_servers {</span></span>
<span class="line"><span>    server backend1.example.com weight=5;  # 权重为 5</span></span>
<span class="line"><span>    server backend2.example.com;           # 默认权重为 1</span></span>
<span class="line"><span>    server backend3.example.com backup;    # 备份服务器，仅当其他服务器不可用时启用</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name example.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://backend_servers;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-负载均衡算法" tabindex="-1">2. 负载均衡算法 <a class="header-anchor" href="#_2-负载均衡算法" aria-label="Permalink to &quot;2. 负载均衡算法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream backend_servers {</span></span>
<span class="line"><span>    # 轮询 (默认)</span></span>
<span class="line"><span>    least_conn;                  # 最少连接数</span></span>
<span class="line"><span>    ip_hash;                     # 基于客户端 IP 哈希</span></span>
<span class="line"><span>    url_hash;                    # 基于 URL 哈希</span></span>
<span class="line"><span>    hash $request_uri consistent; # 一致性哈希</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server backend1.example.com;</span></span>
<span class="line"><span>    server backend2.example.com;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-健康检查配置" tabindex="-1">3. 健康检查配置 <a class="header-anchor" href="#_3-健康检查配置" aria-label="Permalink to &quot;3. 健康检查配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream backend_servers {</span></span>
<span class="line"><span>    server backend1.example.com max_fails=3 fail_timeout=30s;</span></span>
<span class="line"><span>    server backend2.example.com max_fails=3 fail_timeout=30s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 主动健康检查 (需要 ngx_http_upstream_hc 模块)</span></span>
<span class="line"><span>    check interval=5000 rise=2 fall=3 timeout=1000 type=http;</span></span>
<span class="line"><span>    check_http_send &quot;HEAD /health HTTP/1.1\\r\\nHost: $host\\r\\n\\r\\n&quot;;</span></span>
<span class="line"><span>    check_http_expect_alive http_2xx http_3xx;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="四、性能优化配置" tabindex="-1">四、性能优化配置 <a class="header-anchor" href="#四、性能优化配置" aria-label="Permalink to &quot;四、性能优化配置&quot;">​</a></h2><h3 id="_1-连接优化" tabindex="-1">1. 连接优化 <a class="header-anchor" href="#_1-连接优化" aria-label="Permalink to &quot;1. 连接优化&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 工作进程和连接数</span></span>
<span class="line"><span>worker_processes auto;          # 自动根据 CPU 核心数设置</span></span>
<span class="line"><span>worker_connections 1024;        # 每个工作进程的最大连接数</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 连接优化</span></span>
<span class="line"><span>multi_accept on;                # 一次性接受所有连接</span></span>
<span class="line"><span>use epoll;                      # 使用 epoll 事件模型 (Linux)</span></span></code></pre></div><h3 id="_2-静态文件优化" tabindex="-1">2. 静态文件优化 <a class="header-anchor" href="#_2-静态文件优化" aria-label="Permalink to &quot;2. 静态文件优化&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 静态文件处理</span></span>
<span class="line"><span>location ~* \\.(js|css|png|jpg|jpeg|gif|ico|woff|woff2|ttf|svg|eot)$ {</span></span>
<span class="line"><span>    expires 7d;                 # 浏览器缓存 7 天</span></span>
<span class="line"><span>    add_header Cache-Control &quot;public, max-age=604800&quot;;</span></span>
<span class="line"><span>    access_log off;             # 关闭访问日志</span></span>
<span class="line"><span>    gzip_static on;             # 使用预压缩的 .gz 文件</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 文件传输优化</span></span>
<span class="line"><span>sendfile on;                    # 启用零拷贝</span></span>
<span class="line"><span>tcp_nopush on;                  # 合并小数据包</span></span>
<span class="line"><span>tcp_nodelay on;                 # 不延迟发送数据</span></span></code></pre></div><h3 id="_3-gzip-压缩配置" tabindex="-1">3. Gzip 压缩配置 <a class="header-anchor" href="#_3-gzip-压缩配置" aria-label="Permalink to &quot;3. Gzip 压缩配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gzip on;</span></span>
<span class="line"><span>gzip_min_length 1024;           # 最小压缩大小</span></span>
<span class="line"><span>gzip_comp_level 6;              # 压缩级别 (1-9)</span></span>
<span class="line"><span>gzip_types text/plain text/css application/json text/javascript;</span></span>
<span class="line"><span>gzip_vary on;                   # 添加 Vary: Accept-Encoding 头</span></span>
<span class="line"><span>gzip_proxied any;               # 压缩代理请求</span></span></code></pre></div><h2 id="五、安全配置" tabindex="-1">五、安全配置 <a class="header-anchor" href="#五、安全配置" aria-label="Permalink to &quot;五、安全配置&quot;">​</a></h2><h3 id="_1-隐藏-nginx-版本信息" tabindex="-1">1. 隐藏 Nginx 版本信息 <a class="header-anchor" href="#_1-隐藏-nginx-版本信息" aria-label="Permalink to &quot;1. 隐藏 Nginx 版本信息&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server_tokens off;              # 不显示 Nginx 版本</span></span></code></pre></div><h3 id="_2-限制请求大小" tabindex="-1">2. 限制请求大小 <a class="header-anchor" href="#_2-限制请求大小" aria-label="Permalink to &quot;2. 限制请求大小&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>client_max_body_size 10m;       # 最大请求体大小</span></span>
<span class="line"><span>client_body_buffer_size 128k;   # 请求体缓冲区大小</span></span></code></pre></div><h3 id="_3-防止点击劫持" tabindex="-1">3. 防止点击劫持 <a class="header-anchor" href="#_3-防止点击劫持" aria-label="Permalink to &quot;3. 防止点击劫持&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>add_header X-Frame-Options &quot;SAMEORIGIN&quot;;  # 允许同源页面嵌入</span></span>
<span class="line"><span>add_header X-Content-Type-Options &quot;nosniff&quot;;</span></span>
<span class="line"><span>add_header X-XSS-Protection &quot;1; mode=block&quot;;</span></span></code></pre></div><h3 id="_4-防盗链配置" tabindex="-1">4. 防盗链配置 <a class="header-anchor" href="#_4-防盗链配置" aria-label="Permalink to &quot;4. 防盗链配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location ~* \\.(jpg|jpeg|png|gif|ico|pdf)$ {</span></span>
<span class="line"><span>    valid_referers none blocked example.com *.example.com;</span></span>
<span class="line"><span>    if ($invalid_referer) {</span></span>
<span class="line"><span>        return 403;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="六、常用配置场景" tabindex="-1">六、常用配置场景 <a class="header-anchor" href="#六、常用配置场景" aria-label="Permalink to &quot;六、常用配置场景&quot;">​</a></h2><h3 id="_1-php-fpm-配置" tabindex="-1">1. PHP-FPM 配置 <a class="header-anchor" href="#_1-php-fpm-配置" aria-label="Permalink to &quot;1. PHP-FPM 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name example.com;</span></span>
<span class="line"><span>    root /var/www/html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        index index.php index.html;</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # PHP 文件处理</span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        fastcgi_pass 127.0.0.1:9000;</span></span>
<span class="line"><span>        fastcgi_index index.php;</span></span>
<span class="line"><span>        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span>        include fastcgi_params;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-单页应用-spa-配置" tabindex="-1">2. 单页应用 (SPA) 配置 <a class="header-anchor" href="#_2-单页应用-spa-配置" aria-label="Permalink to &quot;2. 单页应用 (SPA) 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name spa.example.com;</span></span>
<span class="line"><span>    root /var/www/spa;</span></span>
<span class="line"><span>    index index.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 所有请求都返回 index.html</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-日志分割配置" tabindex="-1">3. 日志分割配置 <a class="header-anchor" href="#_3-日志分割配置" aria-label="Permalink to &quot;3. 日志分割配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建日志分割脚本 /etc/logrotate.d/nginx</span></span>
<span class="line"><span>/var/log/nginx/*.log {</span></span>
<span class="line"><span>    daily                   # 每天分割</span></span>
<span class="line"><span>    missingok               # 忽略不存在的文件</span></span>
<span class="line"><span>    rotate 14               # 保留 14 天日志</span></span>
<span class="line"><span>    compress                # 压缩旧日志</span></span>
<span class="line"><span>    delaycompress           # 延迟压缩前一天的日志</span></span>
<span class="line"><span>    notifempty              # 空日志不分割</span></span>
<span class="line"><span>    create 0640 www-data adm # 创建新日志文件</span></span>
<span class="line"><span>    sharedscripts           # 执行一次 postrotate 脚本</span></span>
<span class="line"><span>    postrotate</span></span>
<span class="line"><span>        if [ -f /var/run/nginx.pid ]; then</span></span>
<span class="line"><span>            kill -USR1 \`cat /var/run/nginx.pid\`</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    endscript</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="七、故障排除" tabindex="-1">七、故障排除 <a class="header-anchor" href="#七、故障排除" aria-label="Permalink to &quot;七、故障排除&quot;">​</a></h2><h3 id="_1-检查配置文件语法" tabindex="-1">1. 检查配置文件语法 <a class="header-anchor" href="#_1-检查配置文件语法" aria-label="Permalink to &quot;1. 检查配置文件语法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nginx -t  # 测试配置文件语法</span></span></code></pre></div><h3 id="_2-重新加载配置" tabindex="-1">2. 重新加载配置 <a class="header-anchor" href="#_2-重新加载配置" aria-label="Permalink to &quot;2. 重新加载配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nginx -s reload  # 平滑重启，不中断现有连接</span></span></code></pre></div><h3 id="_3-常见错误解决" tabindex="-1">3. 常见错误解决 <a class="header-anchor" href="#_3-常见错误解决" aria-label="Permalink to &quot;3. 常见错误解决&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>502 Bad Gateway：检查后端服务器是否正常运行</span></span>
<span class="line"><span>504 Gateway Timeout：增加 proxy_connect_timeout 和 proxy_read_timeout</span></span>
<span class="line"><span>413 Request Entity Too Large：增加 client_max_body_size</span></span>
<span class="line"><span>403 Forbidden：检查文件权限和 SELinux/AppArmor 设置</span></span></code></pre></div><h3 id="_4-性能监控" tabindex="-1">4. 性能监控 <a class="header-anchor" href="#_4-性能监控" aria-label="Permalink to &quot;4. 性能监控&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看 Nginx 状态</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 8080;</span></span>
<span class="line"><span>    server_name localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /nginx_status {</span></span>
<span class="line"><span>        stub_status on;</span></span>
<span class="line"><span>        access_log off;</span></span>
<span class="line"><span>        allow 127.0.0.1;</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,54)]))}const g=a(i,[["render",l]]);export{k as __pageData,g as default};
