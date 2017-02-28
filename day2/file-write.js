const fs = require('fs');//ファイルシステム
const path = require('path');

fs.writeFile(__dirname + '/hello.txt', 'Node始めました\n',function (err){
	if(err) return console.log("Errer!");
});

//OS依存しない書き方
fs.writeFile(path.join(__dirname, 'hello.txt'), 'Node始めました\n',function (err){
	if(err) return console.log("Errer!");
});
