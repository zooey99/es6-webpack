//  异步回调
class Evente {
    constructor() {
        this.map = {};
    }
    add(name, fn) {
        if (this.map[name]) {//容错判断对象有该字段
            this.map[name].push(fn);
            return;
        }
        this.map[name] = [fn];

        // console.log(this);
        return this;
    }
    emit(name, ...args) {

        this.map[name].forEach(fn => {
            console.log(...args);
            fn(...args);
        });
        return this;
    }
}
let e = new Evente();
e.add('hello', (err, name) => {
    if (err) {
        console.log(err);
        return;
    }
    debugger
    console.log(name);
});
// e.emit('hello', '发生了错误');
e.emit('hello', null, 'hello,test');