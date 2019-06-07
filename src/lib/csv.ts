import * as fs from "fs";
const csvrs = [
    [1,2,3,4,5],
    [11,12,13,14,15],
    ['A','B','C','D','E']
]

const text = fs.readFileSync('data/test.csv',{encoding: 'utf-8'}).replace(/\r\n/g,'\n')
var rows: any[] | Array<Array<number>> = text.split('\n')
for(let i = 0; i < rows.length; i++) {
    rows[i] = rows[i].split(',')
}

// >>> 解析结束
/**
 * -----------
 * |1|2|3|4|5|
 * |11|12|13|14|15|
 * |A|B|C|D|E|
 * -----------
 */

 // >>> 生成并得到行分割
 let row = "".padStart(rows[0].length*2+1,'-') // 头部补充
 var rs = [row]
 for(let i = 0; i < rows.length; i++) {
     rs.push('|'+rows[i].join('|')+'|') // 拼接数字与'|'字符
 }
 rs.push(row) // 生成数组
 let result = rs.join('\r\n') // 数组拼接换行符得到上诉输出结果
 
 console.log(result)
