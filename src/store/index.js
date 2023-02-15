import { configureStore} from "@reduxjs/toolkit"
import users from "./slices/users"
import unicUser from "./slices/unicUser";

export default configureStore({
    reducer :{
        users,
        unicUser
    }
});