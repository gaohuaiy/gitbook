---
description: 主要安装 nvm、npm、pnpm、以及换国内镜像源
---

# 安装前端开发环境

*   安装nvm

    [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

<figure><img src="../assets/image (1).png" alt=""><figcaption></figcaption></figure>

注意安装时一路默认不要换位置！不要换位置！不要换位置！



* 查看nvm版本

```
nvm -v
```

<figure><img src="../assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

* 使用国内源

```
nvm config set node_mirror https://npm.taobao.org/mirrors/node/  
nvm config set npm_mirror https://npm.taobao.org/mirrors/npm/
```

* 查看可用的node版本

<figure><img src="../assets/image (3).png" alt=""><figcaption></figcaption></figure>

* 安装npm并使用国内源

```
nvm install 18.17.1
nvm use 18.17.1
node -v
npm config set registry https://registry.npmmirror.com
```

* 安装pnpm并使用国内源

```
# 安装pnpm
npm install -g pnpm
# 切换阿里云镜像源
pnpm config set registry https://registry.npmmirror.com
```
