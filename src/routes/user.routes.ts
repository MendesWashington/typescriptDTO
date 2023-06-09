import { UserController } from "../controllers/userController"

class UserRoutes {


    post() {
        const userControler = new UserController();
        const user = userControler.create({ id: 1, name: `Alex` });
        console.log(user)
    }

}

export default new UserRoutes();