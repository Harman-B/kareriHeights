# Kareri heights Web Services Reference

## Activity API's

### Fetch ALL Records

| #1  | #2  |
|---|---|
| Endpoint  |  /api/activities/ |
| HTTP method  | GET  |
| Description  | lists all the data from activity collection   |
|  Collection Name  |  activity |
|  MIME Type |  application/json  |
|  Request Data | - |
| Response Data | [{},{},{}] |

### Fetch One Record

| #1  | #2  |
|---|---|
| Endpoint  |  /activity/:id |
| HTTP method  | GET  |
| Description  | lists one record based on given id from activity collection   |
|  Collection Name  |  activity |
|  MIME Type |  application/json  |
|  Request Data | {"id":"5b964532580ad6075326e34a"} |
| Response Data | {
    "_id" : ObjectId("5b964532580ad6075326e34a"),
    "title" : "ssss",
    "name" : null,
    "duration" : null,
    "price" : null,
    "location" : null,
    "description" : null,
    "termsandconditions" : null,
    "status" : null
} |


### Insert Record

| #1  | #2  |
|---|---|
| Endpoint  |  /activity |
| HTTP method  | POST  |
| Description  | Insert a new record to activity collection   |
|  Collection Name  |  activity |
|  MIME Type |  application/json  |
|  Request Data | title: String, name:String,  duration:String, price:Number, location:String, description: String, termsandconditions:String,   status:Boolean, uid:String |
| Response Data | will get inserted record {
    "_id" : ObjectId("5b964532580ad6075326e34a"),
    "title" : "ssss",
    "name" : null,
    "duration" : null,
    "price" : null,
    "location" : null,
    "description" : null,
    "termsandconditions" : null,
    "status" : null
} |
 


### Update Record

| #1  | #2  |
|---|---|
| Endpoint  |  /activity/:id |
| HTTP method  | PUT  |
| Description  | update a existing record to activity collection   |
|  Collection Name  |  activity |
|  MIME Type |  application/json  |
|  Request Data | id: Object, title: String, name:String,  duration:String, price:Number, location:String, description: String, termsandconditions:String,   status:Boolean, uid:String |
| Response Data | will get updated record {
    "_id" : ObjectId("5b964532580ad6075326e34a"),
    "title" : "ssss",
    "name" : null,
    "duration" : null,
    "price" : null,
    "location" : null,
    "description" : null,
    "termsandconditions" : null,
    "status" : null
} |
 

### Delete Record

| #1  | #2  |
|---|---|
| Endpoint  |  /activity/:id |
| HTTP method  | DELETE  |
| Description  | Delete a existing record to activity collection   |
|  Collection Name  |  activity |
|  MIME Type |  application/json  |
|  Request Data | {"id":"5b964532580ad6075326e34a"} |
| Response Data | will get Deleted record {
    "_id" : ObjectId("5b964532580ad6075326e34a"),
    "title" : "ssss",
    "name" : null,
    "duration" : null,
    "price" : null,
    "location" : null,
    "description" : null,
    "termsandconditions" : null,
    "status" : null
} |
 


 ## User API's

### Fetch ALL Records

| #1  | #2  |
|---|---|
| Endpoint  |  /api/users/ |
| HTTP method  | GET  |
| Description  | lists all the data from user collection   |
|  Collection Name  |  user |
|  MIME Type |  application/json  |
|  Request Data | - |
| Response Data | [{},{},{}] |

### Fetch One Record

| #1  | #2  |
|---|---|
| Endpoint  |  /user/:id |
| HTTP method  | GET  |
| Description  | lists one record based on given id from user collection   |
|  Collection Name  |  user |
|  MIME Type |  application/json  |
|  Request Data | {"id":"5b964532580ad6075326e34a"} |
| Response Data | {
    "_id" : ObjectId("5b978e99dc9ff635fa67a473"),
    "name" : "tribhuvan",
    "age" : 200,
    "__v" : 0,
    "address" : null,
    "email" : null,
    "file" : null,
    "gender" : null,
    "govid" : null,
    "map" : null,
    "phone" : null,
    "type" : null
} |


### Insert Record

| #1  | #2  |
|---|---|
| Endpoint  |  /user |
| HTTP method  | POST  |
| Description  | Insert a new record to user collection   |
|  Collection Name  |  user |
|  MIME Type |  application/json  |
|  Request Data |   name:String,email:String, age:Number,gender: Boolean, address:String, phone: String, map:String, type:String, govid:String, file:String | 
| Response Data | will get inserted record {
    "_id" : ObjectId("5b978e99dc9ff635fa67a473"),
    "name" : "tribhuvan",
    "age" : 200,
    "__v" : 0,
    "address" : null,
    "email" : null,
    "file" : null,
    "gender" : null,
    "govid" : null,
    "map" : null,
    "phone" : null,
    "type" : null
} |
 


### Update Record

| #1  | #2  |
|---|---|
| Endpoint  |  /user/:id |
| HTTP method  | PUT  |
| Description  | update a existing record to user collection   |
|  Collection Name  |  user |
|  MIME Type |  application/json  |
|  Request Data | id: Object,  name:String,email:String, age:Number,gender: Boolean, address:String, phone: String, map:String, type:String, govid:String, file:String |
| Response Data | will get updated record {
    "_id" : ObjectId("5b978e99dc9ff635fa67a473"),
    "name" : "tribhuvan",
    "age" : 200,
    "__v" : 0,
    "address" : null,
    "email" : null,
    "file" : null,
    "gender" : null,
    "govid" : null,
    "map" : null,
    "phone" : null,
    "type" : null
} |
 

### Delete Record

| #1  | #2  |
|---|---|
| Endpoint  |  /user/:id |
| HTTP method  | DELETE  |
| Description  | Delete a existing record to user collection   |
|  Collection Name  |  user |
|  MIME Type |  application/json  |
|  Request Data | {"id":"5b964532580ad6075326e34a"} |
| Response Data | will get Deleted record {
    "_id" : ObjectId("5b978e99dc9ff635fa67a473"),
    "name" : "tribhuvan",
    "age" : 200,
    "__v" : 0,
    "address" : null,
    "email" : null,
    "file" : null,
    "gender" : null,
    "govid" : null,
    "map" : null,
    "phone" : null,
    "type" : null
} |


## Booking Unit API's

### Fetch ALL Records

| #1  | #2  |
|---|---|
| Endpoint  |  /api/bookingunits/ |
| HTTP method  | GET  |
| Description  | lists all the data from bookingunit collection   |
|  Collection Name  |  bookingunit |
|  MIME Type |  application/json  |
|  Request Data | - |
| Response Data | [{},{},{}] |

### Fetch One Record

| #1  | #2  |
|---|---|
| Endpoint  |  /bookingunit/:id |
| HTTP method  | GET  |
| Description  | lists one record based on given id from bookingunit collection   |
|  Collection Name  |  bookingunit |
|  MIME Type |  application/json  |
|  Request Data | {"id":"5b9798e7ef8a46456eabf89d"} |
| Response Data | {
    "_id" : ObjectId("5b9798e7ef8a46456eabf89d"),
    "fromdate" : ISODate("2018-12-11T18:30:00.000Z"),
    "activityid" : "200",
    "__v" : 0
}|


### Insert Record

| #1  | #2  |
|---|---|
| Endpoint  |  /bookingunit |
| HTTP method  | POST  |
| Description  | Insert a new record to bookingunit collection   |
|  Collection Name  |  bookingunit |
|  MIME Type |  application/json  |
|  Request Data |   fromdate:Date,todate:Date,activityid:String, | 
| Response Data | will get inserted record {
    "_id" : ObjectId("5b9798e7ef8a46456eabf89d"),
    "fromdate" : ISODate("2018-12-11T18:30:00.000Z"),
    "activityid" : "200",
    "__v" : 0
} |
 


### Update Record

| #1  | #2  |
|---|---|
| Endpoint  |  /bookingunit/:id |
| HTTP method  | PUT  |
| Description  | update a existing record to bookingunit collection   |
|  Collection Name  |  bookingunit |
|  MIME Type |  application/json  |
|  Request Data | id: Object, fromdate:Date,todate:Date,activityid:String, |
| Response Data | will get updated record {
    "_id" : ObjectId("5b9798e7ef8a46456eabf89d"),
    "fromdate" : ISODate("2018-12-11T18:30:00.000Z"),
    "activityid" : "200",
    "__v" : 0
} |
 

 ### Delete Record

| #1  | #2  |
|---|---|
| Endpoint  |  /bookingunit/:id |
| HTTP method  | DELETE  |
| Description  | Delete a existing record to bookingunit collection   |
|  Collection Name  |  bookingunit |
|  MIME Type |  application/json  |
|  Request Data | id: Object |
| Response Data | will get updated record {
    "_id" : ObjectId("5b9798e7ef8a46456eabf89d"),
    "fromdate" : ISODate("2018-12-11T18:30:00.000Z"),
    "activityid" : "200",
    "__v" : 0
} |


## Booking order API's

### Fetch ALL Records

| #1  | #2  |
|---|---|
| Endpoint  |  /api/bookingorders/ |
| HTTP method  | GET  |
| Description  | lists all the data from bookingorder collection   |
|  Collection Name  |  bookingorder |
|  MIME Type |  application/json  |
|  Request Data | - |
| Response Data | [{},{},{}] |

### Fetch One Record

| #1  | #2  |
|---|---|
| Endpoint  |  /bookingorder/:id |
| HTTP method  | GET  |
| Description  | lists one record based on given id from bookingorder collection   |
|  Collection Name  |  bookingorder |
|  MIME Type |  application/json  |
|  Request Data | {"id":"5b9798e7ef8a46456eabf89d"} |
| Response Data | {{
    "_id" : ObjectId("5b97998def8a46456eabf89e"),
    "uid" : "adcadcadvadv",
    "status" : false,
    "__v" : 0
}|


### Insert Record

| #1  | #2  |
|---|---|
| Endpoint  |  /bookingorder |
| HTTP method  | POST  |
| Description  | Insert a new record to bookingorder collection   |
|  Collection Name  |  bookingorder |
|  MIME Type |  application/json  |
|  Request Data |     uid:String,status:Boolean,buid:String, | 
| Response Data | will get inserted record {
    "_id" : ObjectId("5b97998def8a46456eabf89e"),
    "uid" : "adcadcadvadv",
    "status" : false,
    "__v" : 0
} |
 


### Update Record

| #1  | #2  |
|---|---|
| Endpoint  |  /bookingorder/:id |
| HTTP method  | PUT  |
| Description  | update a existing record to bookingorder collection   |
|  Collection Name  |  bookingorder |
|  MIME Type |  application/json  |
|  Request Data | id: Object, uid:String,status:Boolean,buid:String, |
| Response Data | will get updated record {
    "_id" : ObjectId("5b97998def8a46456eabf89e"),
    "uid" : "adcadcadvadv",
    "status" : false,
    "__v" : 0
} |
 

 ### Delete Record

| #1  | #2  |
|---|---|
| Endpoint  |  /bookingorder/:id |
| HTTP method  | DELETE  |
| Description  | Delete a existing record to bookingorder collection   |
|  Collection Name  |  bookingorder |
|  MIME Type |  application/json  |
|  Request Data | id: Object |
| Response Data | will get updated record {
    "_id" : ObjectId("5b97998def8a46456eabf89e"),
    "uid" : "adcadcadvadv",
    "status" : false,
    "__v" : 0
} |
