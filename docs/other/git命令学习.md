# Git命令学习

## 常用命令学习

```markdown
## 创建新文件夹
mkdir name

## 查看状态
git status

## 添加文件到暂存区域
git add . `或者` git add -a `或者` git add *

## 提交文件
git commit -m "file info"

## 本地git仓库关联GitHub仓库
git remote add origin git@github.com:xxx.git

## 推送代码到线上仓库
git push -u origin master

## 查看历史
git log

## 克隆项目
git clone git@github.com:xxx.git

## 拉取项目或更新项目
git pull

## 切换至分支  feature/xxx为某一个分支
git checkout feature/xxx

## 合并代码dev分支到当前分支  
git merge dev

## 显示暂存区和工作区的差异
git diff

## 恢复暂存区的指定文件到工作区
git checkout [file]

## 恢复暂存区的所有文件到工作区
git checkout .

## 未使用 git add 缓存代码时 放弃本地修改
git checkout -- filepathnam

## 已经使用了 git add 缓存了代码。 放弃本地修改
git reset HEAD filepathname

## 已经用 git commit  提交了代码
git reset --hard HEAD^
```

## 删除某一个文件的git分支记录

```js
git checkout -b test

// config/index.js
git filter-branch --tree-filter 'rm -f config/index.js' HEAD

// 一旦使用 filter-branch 重写了历史记录， 需要强制推送将这些更改推送到远程仓库
git push origin test --force
```

## 添加线上库

```js
  git init
  git add .
  git commit -m "first commit"
  git branch -M master
  git remote add origin git@xxx
  git push -u origin master -f
```

## 更换 Git 远程仓库地址
更换 Git 远程仓库地址可以通过以下步骤完成：

1. **查看当前远程仓库地址：**
   在项目目录下打开命令行或终端，执行以下命令查看当前的远程仓库地址：

   ```bash
   git remote -v
   ```

   这会显示当前仓库的远程地址，包括 fetch 和 push 的地址。

2. **删除原有远程仓库地址（可选）：**
   如果你想要删除原有的远程地址，可以使用以下命令：

   ```bash
   git remote remove origin
   ```

   注意：删除操作是可选的，如果你希望保留原有的远程地址，可以跳过这一步。

3. **添加新的远程仓库地址：**
   添加新的远程地址，假设新地址是 `https://github.com/yourusername/your-repo.git`，可以使用以下命令：

   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   ```

   替换上述命令中的 URL 为你的新仓库地址。

4. **验证新的远程地址：**
   可以再次执行 `git remote -v` 来验证新的远程地址是否添加成功。

   ```bash
   git remote -v
   ```

   应该显示新的远程地址。

5. **推送到新的远程仓库：**
   如果本地有已经提交的代码，你可能需要将其推送到新的远程仓库。可以使用以下命令：

   ```bash
   git push -u origin master
   ```

   如果你使用的是不同的分支，替换 `master` 为你的分支名。

通过以上步骤，你就成功更换了 Git 远程仓库地址。确保在执行操作前备份重要数据，并谨慎操作。

## Git报错： Failed to connect to github.com port 443 解决方案

> 配置http代理
>  windows 的 网络和Internet 代理 中的地址 + 端口
```bash
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```
> 查看代理命令
```bash
git config --global --get http.proxy
git config --global --get https.proxy
```
> 取消代理命令
```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```