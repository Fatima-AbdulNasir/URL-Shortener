/*const express = require('express');
const urlController = require('./userController');

app.post("/register", UserController.register);

app.post("/login", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
}));

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});
*/

const express = require('express');
const urlController = require('./userController');

router.post("/shorten", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
       return res.status(400).json({ error: "User not found" });
    }
   
    const url = new Url({
       originalUrl: req.body.originalUrl,
       shortUrl: shortenUrl(),
       clicks: 0,
       createdAt: new Date(),
       user: user._id,
    });
   
    await url.save();
   
    user.urls.push(url._id);
    await user.save();
   
    res.status(200).json({ url });
   });




   router.get("/userurls", async (req, res) => {
    const user = await User.findOne({ email: req.query.email });
    if (!user) {
       return res.status(400).json({ error: "User not found" });
    }
   
    const urls = await Url.find({ user: user._id }).populate("user");
   
    res.status(200).json({ urls });
   });