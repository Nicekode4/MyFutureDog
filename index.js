import express from "express";
import InitRouter from "./routes/init.route.js";
import PuppyRouter from "./routes/puppy.route.js";
const port = 3000
const app = express()

app.get('/', (req,res) => {
    res.send('<form action="http://localhost:3000/puppy" method="post"><input type="text" name="name" required><input type="file" name="images" id="" required><select name="mom_id" id="" required><option value="1">Sika</option><option value="2">Lucky</option></select><select name="dad_id" id="" required><option value="1">Idefix</option><option value="2">Harry</option></select><input type="date" name="birthday" id=""><button type="submit">Opret</button></form>')
})

app.use(express.urlencoded({ extended: true}))

app.use(PuppyRouter)
app.use(InitRouter)

app.listen(port, () => {
    console.log(`Webserver running on http://localhost:${port}`);
})