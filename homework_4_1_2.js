'use strict';
/*
*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
*а) конструктор Post, который принимает параметры author, text, date и *сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, *который будет принимать текст и записывать его в свойство text объекта.
*б) конструктор AttachedPost, который принимает параметры author, text, date. *Проинициализируйте эти свойства с помощью конструктора Post, чтобы не *дублировать код. Также в конструкторе AttachedPost должно создаваться *свойство highlighted со значением false. Унаследуйте в объектах типа *AttachedPost методы из Post.
*Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который *будет назначать свойству highlighted значение true.
*/
//стиль es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
};
// наследование es5
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlited = false;
}
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlited = true;
    return this.highlited;
};
// стиль es6
class PostNew {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}
// наследование es6
class AttachedPostNew extends PostNew {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlited = false;
    }
    makeTextHighlighted() {
        this.highlited = true;
    }

}

// создание объектов и методы es5
let comment1 = new Post('Alex', 'gfgfhfhfjs fhfhfsjs', '07.11.2020');
console.log(comment1.author);
console.log(comment1.text);
console.log(comment1.date);
comment1.edit('Измененный текст');
console.log(comment1.text);
let reply1 = new AttachedPost('Vasya', 'Hello, Alex', '07.11.2020');
console.log(reply1.author);
console.log(reply1.text);
console.log(reply1.date);
console.log(reply1.highlited);
reply1.makeTextHighlighted();
console.log(reply1.highlited);
//Создание объектов и методы es6
let comment2 = new PostNew('Vitaliy', 'Hello, how are you?', '07.11.2020');
console.log(comment2.author);
console.log(comment2.text);
console.log(comment2.date);
comment2.edit('Измененный текст');
console.log(comment2.text);
let reply2 = new AttachedPost('Victor', 'Hello, Vitaliy, I am well', '07.11.2020');
console.log(reply2.author);
console.log(reply2.text);
console.log(reply2.date);
console.log(reply2.highlited);
reply2.makeTextHighlighted();
console.log(reply2.highlited);