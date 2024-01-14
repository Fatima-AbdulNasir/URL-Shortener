const User = require('../models/userModel');
class UserController{
    static async register(req, res){
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.redirect("/login");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

}

module.exports = UserController;