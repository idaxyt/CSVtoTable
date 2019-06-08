说明：把Excel文件另存为csv文件，并分析csv文件规则，用算法解析csv文件按表格输出

``` javascript
// >>> csv文件
1,2,3,4,5
11,12,13,14,15,
A,B,C,D,E

// >>> 输出
-----------
|1|2|3|4|5|
|11|12|13|14|15|
|A|B|C|D|E|
-----------
```

细节：
1. 读取csv文件需安装node，yarn add @types/node
2. 运行ts编译的js文件
    * 直接node xx.js
    * 配置vsc编辑器自带的nodejs的launch.json文件，修改program为文件执行路径
