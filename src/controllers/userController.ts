import { UserRepository } from "../repositories/userRepository";

export class UserController {
    create({ id, name }: UserDto): User {
        const userRepository = new UserRepository()

        const user = userRepository.create({ id, name });

        return user;

    }
}