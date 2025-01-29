export default {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["js", "ts", "json"],
    globals: {
        "ts-jest": {
            isolatedModules: true,
        },
    },
    testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
};
