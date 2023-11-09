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

