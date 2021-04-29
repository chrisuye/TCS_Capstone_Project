export class Order {
    constructor(
        public data: Data[],
        public message: string
        ){}
}

export class Data {
    constructor(
        public id: String,
        public status: String,
        public cart: Cart[],
        public date: String
        ){}
}

export class Cart {
    constructor(
        public id: String, 
        public quantity: Number,
        public total: Number
    ){}
}