import app from "./app"
import './database'

app.listen(app.get("port"), () => {
    console.log("run on port: ", app.get("port"))
})