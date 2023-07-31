import { UserController } from "../controllers/userController"

class UserRoutes {


    post() {
        const userControler = new UserController();
        const user = userControler.create({ id: 1, name: `Alex` });
        console.log(user)
    }

    get() {
        console.log({ id: 1, name: `Alex` })
    }


}

export default new UserRoutes();