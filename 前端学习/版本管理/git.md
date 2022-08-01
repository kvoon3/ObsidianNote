## git操作
情景：远程仓库有多个分支
* master
* dev
操作：从远程拉取代码`git clone https://.....`
出现的问题：拉取后，本地只有master分支，而没有创建dev分支
错误做法：`git checkout -b dev`，这样只会在本地新建一个分支
正确做法：`git checkout -b dev origin/dev` ，根据远程的dev分支，创建本地的dev分支