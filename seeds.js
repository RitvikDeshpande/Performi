var passport = require("passport"),
User = require("./models/user"),
Admin  = require("./models/admin"),
Manager = require("./models/manager"),
app2 = require("./app");
// express = require('express'),
// router = express.Router();


function seedDB () {
    var demo_user = new User ({
        username: "demo_user",
        privilege: "manager",
        companyName: "demoCompany"
    })

    var demoAdmin = {
        firstName: "demo_user",
        lastName: "admin",
        email: "demo_user@gmail.com"
    };

    var password = "password";

    User.register(demo_user, password, function(err, demoUser){
        if (err){
            console.log("the error is: " + err)
        }

        Manager.create(demoAdmin, function(err, admin){
            if(err){
                console.log(err);
            }else{
                admin.userId = demoUser._id;
                admin.save();
                demoUser.admin = admin;
                demoUser.save();
            }
        });
    })

    console.log("adding a demo User");
}

module.exports = seedDB;