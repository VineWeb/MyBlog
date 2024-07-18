# 谷歌目前正在 Chrome Canary 上试验 Gemini Nano
> 意味着电脑装了谷歌浏览器，就可以在你的机器上本地运行语言模型
## 1. Chrome dev 版本下载
Chrome 官方下载地址：https://www.google.com/chrome/dev/
版本号要不低于 127.0.6512，一般情况下直接官方下载没问题

## 2. 开启设备模型
谷歌地址栏输入：`chrome://flags/#optimization-guide-on-device-model`
下拉选择 `Enabled`

## 3. 开启 Gemini Nano 模型
谷歌地址栏输入：`chrome://flags/#prompt-api-for-gemini-nano`
下拉选择 `Enabled`

## 4. 检查模型下载是否完成
> Gemini Nano 需要一些时间才能下载，在这个过程中，我们可以使用 `canCreateTextSession` 函数 来检查模型是否 `Ready`
- "no"，表明设备或浏览器根本不支持 prompt 语言模型。
- "after-download"，表示设备或浏览器支持 prompt 语言模型，但需要下载后才能使用。
- "readily"，表示设备或浏览器支持提示语言模型，无需任何下载步骤即可使用。

如果模型处于下载中的状态，则会提示 `after-download`

要确认下载状态，可以打开在浏览器地址栏输入 `chrome://components`，检查 
`Optimization Guide On Device Model` - 版本： `2024.6.5.2205`
这时候调用`canCreateTextSession` 函数，会返回 `readily`

## 5. 使用 Prompt API
[github链接Prompt API说明](https://github.com/explainers-by-googlers/prompt-api)
### 5.1 完整输出模式
```js
const session = await ai.createTextSession();
const result = await session.prompt("北京");
console.log(result); // 天安门
```
### 5.2 流式输出模式

```js
const stream = await session.promptStreaming("你好呀?");
for await (const chunk of stream) {
  console.log(chunk);
}
```
显示如下: 
```
VM593:3 我
VM593:3  我很
VM593:3  我很高兴
VM593:3  我很高兴认识
VM593:3  我很高兴认识你
VM593:3  我很高兴认识你!
VM593:3  我很高兴认识你! 我
VM593:3  我很高兴认识你! 我可以
VM593:3  我很高兴认识你! 我可以帮助
VM593:3  我很高兴认识你! 我可以帮助你
VM593:3  我很高兴认识你! 我可以帮助你完成
VM593:3  我很高兴认识你! 我可以帮助你完成各种
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料、
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料、翻译
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料、翻译语言
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料、翻译语言、
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料、翻译语言、写
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料、翻译语言、写文章
VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料、翻译语言、写文章等等
3VM593:3  我很高兴认识你! 我可以帮助你完成各种任务，比如查阅资料、翻译语言、写文章等等。
```