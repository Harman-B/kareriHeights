const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const activity = require('../models/activity');
const user = require('../models/user');
const bookingorder = require('../models/bookingorder');
const bookingunit = require('../models/bookingunit');
const db = "mongodb://3bu1:1234567890@35.200.164.78:27017/kareriheights";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});




router.get('/', function(req, res){
    console.log('Get request');
   res.send("api works");
});

// activity api starts

router.get('/activities', function(req, res){
    console.log('Get request for all activities');
   //res.send("api works");
   activity.find({})
   .exec(function(err, activitys){
       if(err){
            console.log("error is", err);
       }else{
           res.json(activitys);
       }
   });
});

router.get('/activity/:id', function(req, res){
    console.log('Get request for a single activity');
    activity.findById(req.params.id)
    .exec(function(err, activity){
        if (err){
            console.log("Error retrieving activity");
        }else {
            res.json(activity);
        }
    });
});

router.post('/activity', function(req, res){
    console.log('Post a activity');
    var newActivity =  new activity();
    newActivity.title = req.body.title;
    newActivity.name = req.body.name;
    newActivity.description = req.body.description;
    newActivity.duration = req.body.duration;
    newActivity.price = req.body.price;
    newActivity.location = req.body.location;
    newActivity.termsandconditions = req.body.termsandconditions;
    newActivity.status = req.body.status;
    newActivity.uid = req.body.uid;
    
    newActivity.save(function(err, insertedActivity){
        if (err){
            console.log('Error saving activity');
        }else{
            res.json(insertedActivity);
        }
    });
});


router.put('/activity/:id', function(req, res){
    console.log('Update a activity');
    activity.findByIdAndUpdate(req.params.id,
    {
        $set: { 
                title: req.body.title,
                name : req.body.name,
                description : req.body.description,
                duration : req.body.duration,
                price : req.body.price,
                location : req.body.location,
                termsandconditions : req.body.termsandconditions,
                status : req.body.status
            }
    },
    {
        new: true
    },
    function(err, updatedActivity){
        if(err){
            res.send("Error updating activity");
        }else{
            res.json(updatedActivity);
        }
    }

    );
});


router.delete('/activity/:id', function(req, res){
    console.log('Deleting a activity');
    activity.findByIdAndRemove(req.params.id, function(err, deletedActivity){
        if(err){
            res.send("Error deleting activity");
        }else{
            res.json(deletedActivity);
        }
    });
});


// activity api ends 

// user api starts
router.get('/users', function(req, res){
    console.log('Get request for all users');
   //res.send("api works");
   user.find({})
   .exec(function(err, users){
       if(err){
            console.log("error is", err);
       }else{
           res.json(users);
       }
   });
});

router.get('/user/:id', function(req, res){
    console.log('Get request for a single user');
    user.findById(req.params.id)
    .exec(function(err, user){
        if (err){
            console.log("Error retrieving user");
        }else {
            res.json(user);
        }
    });
});

router.post('/user', function(req, res){
    console.log('Post a user');
    var newuser =  new user();
    newuser.name = req.body.name;
    newuser.email = req.body.email;
    newuser.age = req.body.age;
    newuser.gender = req.body.gender;
    newuser.address = req.body.address;
    newuser.phone = req.body.phone;
    newuser.map = req.body.map;
    newuser.type = req.body.type;
    newuser.govid = req.body.govid;
    newuser.file = req.body.file;

    newuser.save(function(err, inserteduser){
        if (err){
            console.log('Error saving user');
        }else{
            res.json(inserteduser);
        }
    });
});


router.put('/user/:id', function(req, res){
    console.log('Update a user');
    user.findByIdAndUpdate(req.params.id,
    {
        $set: { 
                
                name : req.body.name,
                email : req.body.email,
                age : req.body.age,
                gender : req.body.gender,
                address : req.body.address,
                phone : req.body.phone,
                map : req.body.map,
                type : req.body.type,
                govid : req.body.govid,
                file : req.body.file,

            }
    },
    {
        new: true
    },
    function(err, updateduser){
        if(err){
            res.send("Error updating user");
        }else{
            res.json(updateduser);
        }
    }

    );
});


router.delete('/user/:id', function(req, res){
    console.log('Deleting a user');
    user.findByIdAndRemove(req.params.id, function(err, deleteduser){
        if(err){
            res.send("Error deleting user");
        }else{
            res.json(deleteduser);
        }
    });
});

//user api ends

//bookingunit api starts

router.get('/bookingunits', function(req, res){
    console.log('Get request for all bookingunits');
   //res.send("api works");
   bookingunit.find({})
   .exec(function(err, bookingunits){
       if(err){
            console.log("error is", err);
       }else{
           res.json(bookingunits);
       }
   });
});

router.get('/bookingunit/:id', function(req, res){
    console.log('Get request for a single bookingunit');
    bookingunit.findById(req.params.id)
    .exec(function(err, bookingunit){
        if (err){
            console.log("Error retrieving bookingunit");
        }else {
            res.json(bookingunit);
        }
    });
});

router.post('/bookingunit', function(req, res){
    console.log('Post a bookingunit');
    var newbookingunit =  new bookingunit();
    newbookingunit.fromdate = req.body.fromdate;
    newbookingunit.todate = req.body.todate;
    newbookingunit.activityid = req.body.activityid;
   

    newbookingunit.save(function(err, insertedbookingunit){
        if (err){
            console.log('Error saving bookingunit');
        }else{
            res.json(insertedbookingunit);
        }
    });
});


router.put('/bookingunit/:id', function(req, res){
    console.log('Update a bookingunit');
    bookingunit.findByIdAndUpdate(req.params.id,
    {
        $set: { 
                
            fromdate : req.body.fromdate,
            todate : req.body.todate,
            activityid : req.body.activityid,
                

            }
    },
    {
        new: true
    },
    function(err, updatedbookingunit){
        if(err){
            res.send("Error updating bookingunit");
        }else{
            res.json(updatedbookingunit);
        }
    }

    );
});


router.delete('/bookingunit/:id', function(req, res){
    console.log('Deleting a bookingunit');
    bookingunit.findByIdAndRemove(req.params.id, function(err, deletedbookingunit){
        if(err){
            res.send("Error deleting bookingunit");
        }else{
            res.json(deletedbookingunit);
        }
    });
});



//bookingunit api ends


//bookingorder api starts

router.get('/bookingorders', function(req, res){
    console.log('Get request for all bookingorders');
   //res.send("api works");
   bookingorder.find({})
   .exec(function(err, bookingorders){
       if(err){
            console.log("error is", err);
       }else{
           res.json(bookingorders);
       }
   });
});

router.get('/bookingorder/:id', function(req, res){
    console.log('Get request for a single bookingorder');
    bookingorder.findById(req.params.id)
    .exec(function(err, bookingorder){
        if (err){
            console.log("Error retrieving bookingorder");
        }else {
            res.json(bookingorder);
        }
    });
});

router.post('/bookingorder', function(req, res){
    console.log('Post a bookingorder');
    var newbookingorder =  new bookingorder();
    newbookingorder.uid = req.body.uid;
    newbookingorder.status = req.body.status;
    newbookingorder.buid = req.body.buid;
   

    newbookingorder.save(function(err, insertedbookingorder){
        if (err){
            console.log('Error saving bookingorder');
        }else{
            res.json(insertedbookingorder);
        }
    });
});


router.put('/bookingorder/:id', function(req, res){
    console.log('Update a bookingorder');
    bookingorder.findByIdAndUpdate(req.params.id,
    {
        $set: { 
                
            uid : req.body.uid,
            status : req.body.status,
            buid : req.body.buid,
                

            }
    },
    {
        new: true
    },
    function(err, updatedbookingorder){
        if(err){
            res.send("Error updating bookingorder");
        }else{
            res.json(updatedbookingorder);
        }
    }

    );
});


router.delete('/bookingorder/:id', function(req, res){
    console.log('Deleting a bookingorder');
    bookingorder.findByIdAndRemove(req.params.id, function(err, deletedbookingorder){
        if(err){
            res.send("Error deleting bookingorder");
        }else{
            res.json(deletedbookingorder);
        }
    });
});


//bookingorder api ends

module.exports = router;
