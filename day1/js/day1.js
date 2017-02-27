console.log("テスト");

var elements = document.getElementByClassName( "main" ) ;

elements.insertAdjacentHTML('afterbegin','<p>test</p>');

function sample(){
	console.log("これは、javascriptsのテストです")
}
var Cat = function (name){
	this.name = name;
	this.run = function (){
		console.log(this.name + "が走る");
	}
}
var tama = new Cat('タマ');
tama.run();
console.log(tama.name);

