// Library
import { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import request from "supertest";

// Controller
import UserController from "../controllers/user";

const setup = async (app: Application, mustLogin: boolean = false) => {
    // Middlewares
    app.use(bodyParser.json());
    app.use(cookieParser());

    // Login
    let login = null;
    if (mustLogin) {
        app.post("/user/auth", UserController.login);
        login = await request(app).post("/user/auth").send({
            mail: "dev@gmail.com",
            password: "123",
        });
    }

    return {
        loginCookies: login?.header["set-cookie"],
    };
};

export default setup;
