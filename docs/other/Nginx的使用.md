# Nginx: 了解正向代理和反向代理以及配置示例

> Nginx是一个高性能的开源Web服务器，它以其强大的代理功能而闻名，包括正向代理和反向代理。本文将介绍这两种代理方式以及Nginx的相关参数，并提供一个实际配置示例。

## 正向代理

> 正向代理是一种代理服务器，用于代表客户端发送请求到目标服务器。在正向代理中，客户端不直接连接到目标服务器，而是通过代理服务器来访问目标服务器。正向代理通常用于以下情况：

1. **绕过网络限制：** 正向代理允许客户端绕过网络防火墙或访问受限网站，因为请求是通过代理服务器发送的，而不是直接从客户端发出的。
2. **隐藏客户端IP地址：** 目标服务器只能看到代理服务器的IP地址，而不是客户端的真实IP地址，从而提供匿名性。
3. **提供缓存：** 正向代理可以缓存响应，以提高性能并减少对目标服务器的请求次数。

下面是一个简单的Nginx正向代理配置示例：

```nginx
http {
    server {
        listen 80;
        server_name proxy.example.com;

        location / {
            resolver 8.8.8.8;  # DNS解析服务器的地址
            proxy_pass $scheme://$host$request_uri;
        }
    }
}

```

## 反向代理

> 反向代理是一种代理服务器，用于代表目标服务器接收客户端的请求。在反向代理中，客户端将请求发送到代理服务器，然后代理服务器将请求转发给一个或多个目标服务器，并将响应返回给客户端。反向代理通常用于以下情况：

1. **负载均衡：** 反向代理可以将请求分发到多个目标服务器，以提高性能和可用性。
2. **安全性：** 反向代理可以充当防火墙，过滤恶意流量，并保护目标服务器。
3. **SSL终端：** 反向代理可以处理SSL/TLS加密和解密，从而减轻了目标服务器的负担。

下面是一个简单的Nginx反向代理配置示例：

```nginx
http {
    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backend-server;
        }
    }
}

upstream backend-server {
    server 192.168.1.100:8080;  # 目标服务器的地址和端口
    server 192.168.1.101:8080;
    server 192.168.1.102:8080;
}

```

负载均衡语法：

```ng	
http {
    upstream [你的负载均衡机制名称，随便设置一个就好] {
        server [ip地址]:[端口值];
        server [ip地址]:[端口值];
        server [ip地址]:[端口值];
        server [ip地址]:[端口值];
    }
    server {
        listen [nginx监听端口];
        server_name [head中的host对应的值]
        location / {
        	proxy_pass http:// [你的负载均衡机制名称，对应上面upstream的值];
        }
    }
}

```



## Nginx代理配置

以下是一个示例Nginx配置，演示了如何将正向代理和反向代理与80和端口上的两个域名绑定，然后使用`proxy_pass`指令将请求转发到8082和8083端口上的目标服务器：

```nginx
http {
    server {
        listen 80;               #监听的端口
        server_name example.com; #监听的URL

        location / {
            proxy_pass http://localhost:8082;  # 反向代理至8082端口
        }
    }

    server {
        listen 443;                     #监听的端口
        server_name secure.example.com; #监听的URL

        ssl_certificate /etc/nginx/ssl/secure.example.com.crt;  # SSL证书路径
        ssl_certificate_key /etc/nginx/ssl/secure.example.com.key;  # SSL密钥路径

        location / {
            proxy_pass http://localhost:8082;  # 反向代理至8082端口
        }
    }
    
    server {
        listen 80;               #监听的端口
        server_name example.com; #监听的URL

        location / {
            proxy_pass http://localhost:8083;  # 反向代理至8082端口
        }
    }

    server {
        listen 443;                     #监听的端口
        server_name secure.example.com; #监听的URL

        ssl_certificate /etc/nginx/ssl/secure.example.com.crt;  # SSL证书路径
        ssl_certificate_key /etc/nginx/ssl/secure.example.com.key;  # SSL密钥路径

        location / {
            proxy_pass http://localhost:8083;  # 反向代理至8082端口
        }
    }
}

```

## 常见前端项目配置，打包成dist的目录

```nginx
server {
    listen 80;
    server_name yourdomain.com; # 你的域名

    root /path/to/your/dist; # 替换为你的前端dist目录的实际路径 # /  -->根目录
		
    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:8080/api; # 后台接口的地址，假设是在本地的8080端口
    }
}

server {
    listen 443 ssl;
    server_name yourdomain.com; # 你的域名

    root /path/to/your/dist; # 替换为你的前端dist目录的实际路径 # /  -->根目录

    ssl_certificate /etc/nginx/ssl/yourdomain.com.crt; # SSL证书路径
    ssl_certificate_key /etc/nginx/ssl/yourdomain.com.key; # SSL密钥路径

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:8080/api; # 后台接口的地址，假设是在本地的8080端口
    }
}

```

