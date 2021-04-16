export class AuthorModel{
    constructor (
        public _id : String,
        public name : String,
        public title : String,
        public works : String,
        public img : String|ArrayBuffer
    ){}
}