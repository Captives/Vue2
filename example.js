//var config = require('./conf/config');
//console.log(config.server.httpHost + ":" + config.server.httpPort);
//console.log(config.server.httpsHost + ":" + config.server.httpsPort);

//
//var FileResource = require('./resource/FileResource');
//
//FileResource.writeFile('logs/file.txt',"测试啊，测试啊");
//FileResource.readFile('logs/file.txt');
//
//setTimeout(function(event){
//    FileResource.writeFile('logs/file.txt');
//},3000);
//
//FileResource.watchFile('logs/file.txt');
//
//console.log(__dirname);

//var Logger = require('./resource/LoggerResource');
//var logger = new Logger();
//setInterval(function(){
//    var date = new Date();
//    logger.path = "logs/action/" + date.getMinutes();
//    logger.fileName = date.getMinutes() + "_" + date.getSeconds()+"_log.txt";
//    logger.info("记录信息",date.toJSON());
//},1000);
//if(req.event == "create" || req.event == 'read' || req.event == "update" || req.event == "delete")
var events = ["create", "read", "update", "delete"];
var req ={event:"reads"};
console.log(events.indexOf(req.event));

var f3 ,f2;
f2 = f3 = function () {
    console.log('f2 -  f3');
};

f2();
f3();
console.log(f2 === f3);


/*
//----- 函数类型
//有名称的函数
function f1(){
    console.log('f1');
}

f1();

//匿名函数地址指向空对象
var f2 = function () {
    console.log('f2');
};
f2();

var f3 ,f2;
f2 = f3 = function () {
    console.log('f2 -  f3');
};

f2();
f3();

//闭包函数
(function () {
    console.log('function');
});

//需要立即执行的闭包函数
(function () {
    console.log('function 2');
}());

//有名称和别名的函数调用
f1();
f2();
//------函数类型 END

//---------函数参数
function log(arg1, arg2){
    arg1 = arg1 || 10086;
    arg2 = arg2 || '这是默认值';
    console.log(arg1, arg2);
};

//调用
log(1, 2);
log(1);
log(null, 2);       log(0, 2);
log();

function trace() {
    console.log(arguments);
}

trace();
trace(1,2,3);
trace(1,2,"哈哈哈");


//命名函数，参数回调，函数对象的引用
function Clock(callback){
    this.count = 0;
    var that = this;
    setInterval(function () {
        if(callback){
            callback(that.count++);
        }
    }, 1000);
};


//匿名函数更改地址指向空对象
var Clock = function (callback){
    this.count = 0;
    var that = this;
    setInterval(function () {
        if(callback){
            callback(that.count++);
        }
    }, 1000);
};

Clock(function (i) {
   console.log("clock 1",i);
});

 Clock(function (i) {
     console.log("clock 2",i);
 });

new Clock(function (i) {
    console.log("new Clock::1 ",i);
});

 new Clock(function (i) {
     console.log("new Clock::2 ",i);
 });
 */


//原型链函数//简单型

function Clock(){
    this.count = 0;
}

Clock.prototype.counter = function (callback) {
    var that = this;
    setInterval(function () {
        if(callback){
            callback(that.count++);
        }
    }, 1000);
};

//直接使用原型上的函数,未构造函数对象
// Clock.prototype.counter(function (i) {
//     console.log('Clock # counter', i);
// });
//
var clock = new Clock();
//
// clock.counter(function (i) {
//     console.log('Clock # counter  ', i);
// });
//
// clock.counter(function (i) {
//     console.log('Clock # counter 2', i);
// });

//函数，原型链继承
function AClock(){

}

console.log(AClock);

// AClock.prototype = new Clock();
AClock.prototype = clock;
AClock.prototype.text = function () {
    this.counter(function (i) {
        console.log("AClock::", i);
    });
};

function BClock(){

}

// BClock.prototype = new Clock();
BClock.prototype = clock;
BClock.prototype.text = function () {
    this.counter(function (i) {
        console.log("BClock::", i);
    });
};

console.log("#####", AClock === BClock);
// new AClock().text();
// new BClock().text();


//
//
// //函数 异步调用
//
// function Person(firstname,lastname,age,eyecolor){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.age=age;
//     this.eyecolor=eyecolor;
// }
//
// var person = new Person("Bill","Gates",56,"blue");
// console.dir(person);

function Math(num){
    return new Promise((resolve, reject) => {
        if(num%2 == 0){
            resolve(num+ ":: 是偶数");
        }else{
            reject(num+ ":: 是奇数");
        }
    });
}

Math(0).then(result => {
    console.log("RIGHT", result);
}).catch(err => {
    console.log("WRONG", err);
});
