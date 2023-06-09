interface IUser {
    id: number;
    name: string
}


class User {
    constructor({ id, name }: IUser) { }
}