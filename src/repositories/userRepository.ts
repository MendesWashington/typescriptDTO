export class UserRepository {
    create({ id, name }: UserDto): User {
        return { id, name }
    }
}