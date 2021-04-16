export class BookModel{
    constructor(
        public _id:String,
        public title:String,
        public author:String,
        public genre:String,
        public img:String|ArrayBuffer
    ){}
}