# Node 的简介
## 一: 在 Node.js 中，事件驱动和非阻塞 I/O 是其设计核心理念之一，用于提高性能和可伸缩性。

### 事件驱动：

1. **事件触发和监听：** Node.js 中许多对象都是触发器（EventEmitter）。事件触发时，会通知所有注册在该事件上的监听器。这种模型允许异步处理，因为代码不会等待事件完成。

    ```javascript
    const EventEmitter = require('events');
    
    // 创建一个事件触发器实例
    const myEmitter = new EventEmitter();
    
    // 注册事件监听器
    myEmitter.on('someEvent', () => {
      console.log('Event occurred!');
    });
    
    // 触发事件
    myEmitter.emit('someEvent');
    ```

2. **回调函数：** 大多数 Node.js API 都是异步的，接受回调函数作为参数。当操作完成时，会调用这些回调函数。

    ```javascript
    const fs = require('fs');
    
    // 异步读取文件
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
    ```

### 非阻塞 I/O：

1. **单线程事件循环：** Node.js 使用单线程执行 JavaScript 代码，但通过事件循环（Event Loop）实现并发。在事件循环中，事件触发和回调函数的执行是异步的。

2. **非阻塞 I/O 操作：** 在进行 I/O 操作（如文件读取、网络请求）时，Node.js 不会等待操作完成，而是继续执行后续代码。当 I/O 操作完成后，通过事件触发相应的回调函数。

    ```javascript
    const fs = require('fs');
    
    // 异步读取文件，不会阻塞后续代码执行
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
    
    console.log('Reading file...');
    ```

总体而言，事件驱动和非阻塞 I/O 让 Node.js 能够在单线程上处理大量并发操作，通过异步模型提高了性能和响应性。这使得 Node.js 适用于高度并发的网络应用程序，如 Web 服务器。