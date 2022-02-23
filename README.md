# vue2-g-npm-package-demo
基于vue2、vuecli5、elementui、sass的NPM发布demo

## 首先需要安装依赖
```
npm install
```

### 如果需要打需要发布的NPM包
```
npm run lib
```

### 如果需要测试需要发布的NPM包
```
npm run lib
npm pack
npm install vue2-g-npm-package-demo-0.1.0.tgz
```

### 如果需要发布到NPM（每次打包记得修改版本号）
```
npm run lib
npm login
npm publish
```
