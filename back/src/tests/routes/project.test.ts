// Library
import request from "supertest";
import express from "express";

// Local
import setup from "../setup";
import ProjectController from "../../controllers/project/project";

const app = express();

let cookies: string | undefined = "";
beforeAll(async () => {
    const { loginCookies } = await setup(app, true);
    cookies = loginCookies;

    // Routes
    app.post("/project", ProjectController.create);
});

describe("POST /project", () => {
    it("should create a project", async () => {
        const res = await request(app)
            .post("/project")
            .set("Cookie", cookies ?? "")
            .send({
                title: "Project 1",
                description: "Description of project 1",
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toBe("Project created");
        expect(res.body.data).toMatchObject({
            title: "Project 1",
            description: "Description of project 1",
        });
    });
});
