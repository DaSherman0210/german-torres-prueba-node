import app from "./app.js";

const main = () => {
    app.listen(app.get("port"));
    console.log(`The server is listening on port ${app.get("port")}`);
    
}

main();