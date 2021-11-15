# API DOCUMENT - DTH SOFT

> This is api document description for backend system

> You can replace http://localhost:5000 to https://dth-soft-app.herokuapp.com

> Note: this is API for all users and you **need** jwt or this.

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

=======================================================================================

## ==================>> EMPLOYEE API <<=========================

### LOGIN

link: http://dth-soft-app.herokuapp.com/api/auth/login

> POST

#### Request

```
{
  "email": "employee@gmail.com",
  "password": "12345678"
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "User logged in successfully",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTVmYWM3Y2IxM2I4NDUxNWFiZWQ5MDgiLCJpYXQiOjE2MzQ4NjkzODR9.EhK0EknmNPtIZCN_qNCNhgwcSg9qInqX4CwI_JoyX5E",
    "user": {
        "id": "615fac7cb13b84515abed908",
        "name": "employee",
        "email": "employee@gmail.com",
        "role": "EMPLOYEE"
    }
}
```

##### Failure:

```
{
    "success": false,
    "message": "Incorrect email or password"
}
```

### READ All User

link: https://dth-soft-app.herokuapp.com/api/user

> GET

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "users": [
        {
            "_id": "615fac7cb13b84515abed908",
            "name": "employee",
            "email": "employee@gmail.com",
            "phone": "",
            "address": "",
            "image": "",
            "isActive": true,
            "roles": "EMPLOYEE",
            "createBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "updateBy": null,
            "createdAt": "2021-10-08T02:27:08.904Z",
            "updatedAt": "2021-10-08T02:27:08.904Z",
            "__v": 0
        },
        ...
}
```

### READ 1 User

link: https://dth-soft-app.herokuapp.com/api/user/615fa5860362be0889963906

> GET

> NOTE: 615fa5860362be0889963906 is userId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "user": {
        "_id": "615fa5860362be0889963906",
        "name": "manager 2",
        "email": "manager2@gmail.com",
        "phone": "",
        "address": "",
        "image": "",
        "isActive": true,
        "roles": "EMPLOYEE",
        "createBy": {
            "_id": "615fa4c70362be08899638f6",
            "name": "admin tai"
        },
        "updateBy": {
            "_id": "615fa4c70362be08899638f6",
            "name": "admin tai"
        },
        "createdAt": "2021-10-08T01:57:26.668Z",
        "updatedAt": "2021-10-08T02:44:16.639Z",
        "__v": 0
    }
}
```

### CREATE Customer

link: https://dth-soft-app.herokuapp.com/api/customer

> POST

> Having a form to do this

> NOTE: name, email, phone is required

#### Request

```
{
    "name": "Nguyen Van A",
    "email":"nguyenvana@gmail.com",
    "phone":"012345678",
    "address":"TP.HCM",
    "cmnd":"123456789",
    "gender":"male",
    "birthDate":"2000-02-02",
    "note":"Have child under 6"
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Customer created successfully",
    "customer": {
        "name": "Nguyen Van A",
        "email": "nguyenvana@gmail.com",
        "phone": "0123456789",
        "address": "Thu Duc, TP.HCM",
        "cmnd": "123456789",
        "gender": "male",
        "birthDate": "2000-02-02T00:00:00.000Z",
        "note": "Have child under 6",
        "isActive": true,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": null,
        "_id": "6172264cf24904c216ca8062",
        "createdAt": "2021-10-22T02:47:40.955Z",
        "updatedAt": "2021-10-22T02:47:40.955Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: existing email

```
{
    "success": false,
    "message": "Email already taken"
}
```

> NOTE: phone invalid

```
{
    "success": false,
    "message": "\"phone\" length must be at least 10 characters long"
}
```

### READ All Customer

link: https://dth-soft-app.herokuapp.com/api/customer

> GET

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "customers": [
        {
            "_id": "6158187bc61a9b03d0900678",
            "name": "Customer 1",
            "email": "customer1234@gmail.com",
            "phone": "0939276345",
            "address": "",
            "cmnd": "",
            "gender": "male",
            "birthDate": "2021-10-02T00:00:00.000Z",
            "note": "",
            "isActive": true,
            "createBy": null,
            "updateBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "createdAt": "2021-10-02T08:29:47.966Z",
            "updatedAt": "2021-10-08T08:28:39.685Z",
            "__v": 0
        },
        ...
}
```

### READ 1 Customer

link: https://dth-soft-app.herokuapp.com/api/customer/6172264cf24904c216ca8062

> GET

> NOTE: 6172264cf24904c216ca8062 is customerId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "customer": {
        "_id": "6172264cf24904c216ca8062",
        "name": "Nguyen Van A",
        "email": "nguyenvana@gmail.com",
        "phone": "0123456789",
        "address": "Thu Duc, TP.HCM",
        "cmnd": "123456789",
        "gender": "male",
        "birthDate": "2000-02-02T00:00:00.000Z",
        "note": "Have child under 6",
        "isActive": true,
        "createBy": {
            "_id": "615fa4c70362be08899638f6",
            "name": "admin tai"
        },
        "updateBy": null,
        "createdAt": "2021-10-22T02:47:40.955Z",
        "updatedAt": "2021-10-22T02:47:40.955Z",
        "__v": 0
    }
}
```

### UPDATE Customer

link: https://dth-soft-app.herokuapp.com/api/customer/update/6172264cf24904c216ca8062

> PUT

> Having a form to do this

> NOTE: name, email, phone is required

> NOTE: 6172264cf24904c216ca8062 is customerId

#### Request

```
{
    "name": "Nguyen Van A2",
    "email":"nguyenvana2@gmail.com",
    "phone":"0123456788",
    "address":"Thu Duc, TP.HCM",
    "cmnd":"1123456789",
    "gender":"male",
    "birthDate":"2000-02-02",
    "note":"Have child under 7"
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "User updated successfully",
    "updatedCustomer": {
        "_id": "6172264cf24904c216ca8062",
        "name": "Nguyen Van A2",
        "email": "nguyenvana2@gmail.com",
        "phone": "0123456788",
        "address": "Thu Duc, TP.HCM",
        "cmnd": "1123456789",
        "gender": "male",
        "birthDate": "2000-02-02T00:00:00.000Z",
        "note": "Have child under 7",
        "isActive": true,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "createdAt": "2021-10-22T02:47:40.955Z",
        "updatedAt": "2021-10-22T03:31:31.587Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: phone invalid

```
{
    "success": false,
    "message": "\"phone\" length must be at least 10 characters long"
}
```

### DELETE Customer

link: https://dth-soft-app.herokuapp.com/api/customer/delete/6172264cf24904c216ca8062

> PUT
> Desc: Change isActive property to **false**
> NOTE: 6172264cf24904c216ca8062 is customerId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Customer deleted successfully",
    "deletedCus": {
        "_id": "6172264cf24904c216ca8062",
        "name": "Nguyen Van A2",
        "email": "nguyenvana2@gmail.com",
        "phone": "0123456788",
        "address": "Thu Duc, TP.HCM",
        "cmnd": "1123456789",
        "gender": "male",
        "birthDate": "2000-02-02T00:00:00.000Z",
        "note": "Have child under 7",
        "isActive": false,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "createdAt": "2021-10-22T02:47:40.955Z",
        "updatedAt": "2021-10-22T03:40:37.065Z",
        "__v": 0
    }
}
```

### READ All Service

link: https://dth-soft-app.herokuapp.com/api/service

> GET

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "services": [
        {
            "_id": "615fb499e9996df23eaf8668",
            "name": "Free & Easy package",
            "price": 5000000,
            "isActive": true,
            "createBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "updateBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "createdAt": "2021-10-08T03:01:45.836Z",
            "updatedAt": "2021-10-21T06:35:00.753Z",
            "__v": 0
        },
         ...
}
```

### READ 1 Service

link: https://dth-soft-app.herokuapp.com/api/service/6172347ff24904c216ca8086

> GET

> NOTE: 6172347ff24904c216ca8086 is serviceId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "service": {
        "_id": "6172347ff24904c216ca8086",
        "name": "A nice morning",
        "price": 1000000,
        "isActive": true,
        "createBy": {
            "_id": "615fa4c70362be08899638f6",
            "name": "admin tai"
        },
        "updateBy": null,
        "createdAt": "2021-10-22T03:48:15.193Z",
        "updatedAt": "2021-10-22T03:48:15.193Z",
        "__v": 0
    }
}
```

### READ All Room

link: https://dth-soft-app.herokuapp.com/api/room

> GET

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "rooms": [
        {
            "_id": "615faccab13b84515abed91d",
            "roomNumber": "201",
            "floor": 2,
            "price": 350,
            "roomType": "SINGLE",
            "status": "BOOKING",
            "isActive": true,
            "createBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "updateBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "createdAt": "2021-10-08T02:28:26.025Z",
            "updatedAt": "2021-10-22T01:34:04.807Z",
            "__v": 0
        },
         ...
}
```

### READ All Room by floor

link: https://dth-soft-app.herokuapp.com/api/room/allByFloor/1

> GET

> Desc: Get all room in the floor

> NOTE: 1 is floor number

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "rooms": [
        {
            "_id": "615fbb36e9996df23eaf868f",
            "roomNumber": "101",
            "floor": 1,
            "price": 250,
            "roomType": "DOUBLE",
            "status": "READY",
            "isActive": true,
            "createBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "updateBy": null,
            "createdAt": "2021-10-08T03:29:58.702Z",
            "updatedAt": "2021-10-08T03:29:58.702Z",
            "__v": 0
        },
        ...
}
```

### READ 1 Room

link: https://dth-soft-app.herokuapp.com/api/room/615facdfb13b84515abed931

> GET

> NOTE: 615facdfb13b84515abed931 is roomId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "room": {
        "_id": "615fbb36e9996df23eaf868f",
        "roomNumber": "101",
        "floor": 1,
        "price": 250,
        "roomType": "DOUBLE",
        "status": "READY",
        "isActive": true,
        "createBy": {
            "_id": "615fa4c70362be08899638f6",
            "name": "admin tai"
        },
        "updateBy": null,
        "createdAt": "2021-10-08T03:29:58.702Z",
        "updatedAt": "2021-10-08T03:29:58.702Z",
        "__v": 0
    }
}
```

### CHANGE Status Room

link: https://dth-soft-app.herokuapp.com/api/room/change-status/ready/615facd1b13b84515abed925

> PUT

> Desc: Change status room

> NOTE: ready is status room which change

> NOTE: 615facd1b13b84515abed925 is roomId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Room is READY"
}
```

### BOOKING

link: https://dth-soft-app.herokuapp.com/api/booking/book

> POST

> Having a form to do this

> NOTE: change status of booking to **BOOKING**, change status of room to **BOOKING**

> NOTE: room, checkInDate, checkOutDate, customer is required

#### Request

```
{
    "rooms":"615face2b13b84515abed935",
    "customer":"6158187bc61a9b03d0900678",
    "checkInDate":"2021-10-14",
    "checkOutDate":"2021-10-20",
    "services":[{
        "_id": "615fb499e9996df23eaf8668",
        "quantity": 2
    }],
    "deposit":100000,
    "discount":0
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "BOOKING successfully",
    "booking": {
        "code": "DTH1634876996999",
        "rooms": [
            "615face2b13b84515abed935"
        ],
        "checkInDate": "2021-10-14T00:00:00.000Z",
        "checkOutDate": "2021-10-20T00:00:00.000Z",
        "services": [
            {
                "quantity": 2,
                "_id": "615fb499e9996df23eaf8668"
            }
        ],
        "customer": "6158187bc61a9b03d0900678",
        "deposit": 100000,
        "roomCharge": 1500,
        "serviceCharge": 10000000,
        "discount": 0,
        "VAT": 10,
        "totalPrice": 11001650,
        "status": "BOOKING",
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": null,
        "isActive": true,
        "_id": "61723e45f24904c216ca80a7",
        "createdAt": "2021-10-22T04:29:57.425Z",
        "updatedAt": "2021-10-22T04:29:57.425Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: if status room is BOOKING or OCCUPIED

```
{
    "success": false,
    "message": "Room has been booked or occupied"
}
```

### CHECK IN

link: https://dth-soft-app.herokuapp.com/api/booking/check-in

> POST

> Having a form to do this

> NOTE: change status of booking to **CHECK IN**, change status of room to **OCCUPIED**

> NOTE: room, checkInDate, checkOutDate, customer is required

#### Request

```
{
    {
    "rooms":"615face5b13b84515abed939",
    "customer":"6158187bc61a9b03d0900678",
    "checkInDate":"2021-10-22",
    "checkOutDate":"2021-10-30",
    "services":[{
        "_id": "615fb499e9996df23eaf8668",
        "quantity": 2
    },{
        "_id": "615fb4c0e9996df23eaf866c",
        "quantity": 1
    }],
    "deposit":0,
    "discount":0
}
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "CHECK IN successfully",
    "booking": {
        "code": "DTH1634877168738",
        "rooms": [
            "615face5b13b84515abed939"
        ],
        "checkInDate": "2021-10-22T00:00:00.000Z",
        "checkOutDate": "2021-10-30T00:00:00.000Z",
        "services": [
            {
                "quantity": 2,
                "_id": "615fb499e9996df23eaf8668"
            },
            {
                "quantity": 1,
                "_id": "615fb4c0e9996df23eaf866c"
            }
        ],
        "customer": "6158187bc61a9b03d0900678",
        "deposit": 0,
        "roomCharge": 2000,
        "serviceCharge": 10002500,
        "discount": 0,
        "VAT": 10,
        "totalPrice": 11004950,
        "status": "CHECK IN",
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": null,
        "isActive": true,
        "_id": "61723ef1f24904c216ca80b0",
        "createdAt": "2021-10-22T04:32:49.162Z",
        "updatedAt": "2021-10-22T04:32:49.162Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: if status room is BOOKING or OCCUPIED

```
{
    "success": false,
    "message": "Room has been booked or occupied"
}
```

### READ All Booking/Check in

link: https://dth-soft-app.herokuapp.com/api/booking

> GET

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "bookings": [
        {
            "_id": "6167e7c2ba63c56806f61b6e",
            "code": "DTH1634199490562",
            "rooms": [
                {
                    "_id": "615facd1b13b84515abed925",
                    "roomNumber": "203",
                    "floor": 2,
                    "price": 250,
                    "roomType": "DOUBLE",
                    "status": "OCCUPIED"
                }
            ],
            "checkInDate": "2021-10-14T00:00:00.000Z",
            "checkOutDate": "2021-10-20T00:00:00.000Z",
            "services": [
                {
                    "quantity": 4,
                    "_id": "615fb4e1e9996df23eaf8670"
                }
            ],
            "customer": {
                "_id": "6158199ec61a9b03d090067b",
                "name": "Customer1234 ",
                "email": "cus@gmail.com",
                "phone": "0123456789"
            },
            "deposit": 3000000,
            "roomCharge": 1500,
            "serviceCharge": 10000000,
            "discount": 400000,
            "VAT": 10,
            "totalPrice": 11001650,
            "status": "CHECK IN",
            "createBy": {
                "_id": "615fac7cb13b84515abed908",
                "name": "employee"
            },
            "updateBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "isActive": true,
            "createdAt": "2021-10-14T08:18:10.676Z",
            "updatedAt": "2021-10-22T01:22:57.937Z",
            "__v": 0
        },
         ...
}
```

### READ 1 Booking/Check in

link: https://dth-soft-app.herokuapp.com/api/booking/61723ef1f24904c216ca80b0

> GET

> NOTE: 61723ef1f24904c216ca80b0 is bookingId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "booking": {
        "_id": "61723ef1f24904c216ca80b0",
        "code": "DTH1634877168738",
        "rooms": [
            {
                "_id": "615face5b13b84515abed939",
                "roomNumber": "304",
                "floor": 3,
                "price": 250,
                "roomType": "DOUBLE",
                "status": "OCCUPIED"
            }
        ],
        "checkInDate": "2021-10-22T00:00:00.000Z",
        "checkOutDate": "2021-10-30T00:00:00.000Z",
        "services": [
            {
                "quantity": 2,
                "_id": "615fb499e9996df23eaf8668"
            },
            {
                "quantity": 1,
                "_id": "615fb4c0e9996df23eaf866c"
            }
        ],
        "customer": {
            "_id": "6158187bc61a9b03d0900678",
            "name": "Customer 1",
            "email": "customer1234@gmail.com",
            "phone": "0939276345"
        },
        "deposit": 0,
        "roomCharge": 2000,
        "serviceCharge": 10002500,
        "discount": 0,
        "VAT": 10,
        "totalPrice": 11004950,
        "status": "CHECK IN",
        "createBy": {
            "_id": "615fa4c70362be08899638f6",
            "name": "admin tai"
        },
        "updateBy": null,
        "isActive": true,
        "createdAt": "2021-10-22T04:32:49.162Z",
        "updatedAt": "2021-10-22T04:32:49.162Z",
        "__v": 0
    }
}
```

### UPDATE Booking

link: https://dth-soft-app.herokuapp.com/api/service/update/6172347ff24904c216ca8086

> PUT

> Having a form to do this

> NOTE: name, price is required

> NOTE: 6172347ff24904c216ca8086 is customerId

#### Request

```
{
    "rooms": ["615face5b13b84515abed939"] ,
    "checkInDate": "2021-10-22",
    "checkOutDate": "2021-10-26",
    "services": [
            {
                 "quantity": 3,
                "_id": "615fb499e9996df23eaf8668"
            }
        ],
        "customer": "6158187bc61a9b03d0900678",
        "deposit": 3000000,
        "discount": 400000
}
```

#### Response

##### Success

status: 200

```

    "success": true,
    "message": "Booking updated successfully",
    "updatedBooking": {
        "_id": "61723ef1f24904c216ca80b0",
        "code": "DTH1634877168738",
        "rooms": [
            "615face5b13b84515abed939"
        ],
        "checkInDate": "2021-10-22T00:00:00.000Z",
        "checkOutDate": "2021-10-26T00:00:00.000Z",
        "services": [
            {
                "quantity": 3,
                "_id": "615fb499e9996df23eaf8668"
            }
        ],
        "customer": "6158187bc61a9b03d0900678",
        "deposit": 3000000,
        "roomCharge": 1000,
        "serviceCharge": 15000000,
        "discount": 400000,
        "VAT": 10,
        "totalPrice": 16501100,
        "status": "CHECK IN",
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "isActive": true,
        "createdAt": "2021-10-22T04:32:49.162Z",
        "updatedAt": "2021-10-22T04:49:03.189Z",
        "__v": 0
    }
}
```

### CANCELLED Booking

link: https://dth-soft-app.herokuapp.com/api/booking/cancelled/6172150cd5904af5c24f5425

> PUT
> Desc: Change isActive property to **false**, status to **CANCELLED**, room'status to **READY**
> NOTE: 6172150cd5904af5c24f5425 is bookingId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Booking cancelled successfully",
    "updatedBooking": {
        "_id": "6172150cd5904af5c24f5425",
        "code": "DTH1634866444156",
        "rooms": [
            "615faccab13b84515abed91d",
            "615facccb13b84515abed921"
        ],
        "checkInDate": "2021-10-14T00:00:00.000Z",
        "checkOutDate": "2021-10-20T00:00:00.000Z",
        "services": [
            {
                "quantity": 2,
                "_id": "615fb499e9996df23eaf8668"
            },
            {
                "quantity": 1,
                "_id": "615fb4c0e9996df23eaf866c"
            }
        ],
        "customer": "6158187bc61a9b03d0900678",
        "deposit": 0,
        "roomCharge": 3600,
        "serviceCharge": 10002500,
        "discount": 0,
        "VAT": 10,
        "totalPrice": 11006710,
        "status": "CANCELLED",
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "isActive": false,
        "createdAt": "2021-10-22T01:34:04.588Z",
        "updatedAt": "2021-10-22T04:52:16.972Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: if status booking is BOOKING

```
{
    "success": false,
    "message": "Booking has been check in or check out"
}
```

### CHANGE ROOM

link: https://dth-soft-app.herokuapp.com/api/booking/change-room/6167e7c2ba63c56806f61b6e/615facd1b13b84515abed925/615faccab13b84515abed91d

> PUT

> NOTE: 6167e7c2ba63c56806f61b6e is bookingId

> NOTE: 615facd1b13b84515abed925 is roomId which will change

> NOTE: 615faccab13b84515abed91d is roomId which is changed

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Change room successfully",
    "updatedBooking": {
        "_id": "6167e7c2ba63c56806f61b6e",
        "code": "DTH1634199490562",
        "rooms": [
            "615faccab13b84515abed91d"
        ],
        "checkInDate": "2021-10-14T00:00:00.000Z",
        "checkOutDate": "2021-10-20T00:00:00.000Z",
        "services": [
            {
                "quantity": 4,
                "_id": "615fb4e1e9996df23eaf8670"
            }
        ],
        "customer": "6158199ec61a9b03d090067b",
        "deposit": 3000000,
        "roomCharge": 2100,
        "serviceCharge": 10000000,
        "discount": 400000,
        "VAT": 10,
        "totalPrice": 11002310,
        "status": "CHECK IN",
        "createBy": "615fac7cb13b84515abed908",
        "updateBy": "615fa4c70362be08899638f6",
        "isActive": true,
        "createdAt": "2021-10-14T08:18:10.676Z",
        "updatedAt": "2021-10-22T04:57:54.591Z",
        "__v": 0
    }
}
```

### CHECK OUT

link: https://dth-soft-app.herokuapp.com/api/service

> POST

> Having a form to do this

> NOTE: status of booking to **CHECK OUT**, room'status to **CLEANING**

> NOTE: booking, paid-out is required

#### Request

```
{
    "booking":"6167e7c2ba63c56806f61b6e",
    "paidOut": 11000275,
    "refund":10000
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Receipt created successfully",
    "receipt": {
        "booking": "6167e7c2ba63c56806f61b6e",
        "paidOut": 11000275,
        "refund": 10000,
        "status": "PAID",
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": null,
        "isActive": true,
        "_id": "6172576263c2dafe88c793ed",
        "createdAt": "2021-10-22T06:17:06.951Z",
        "updatedAt": "2021-10-22T06:17:06.951Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: existing receipt

```
{
    "success": false,
    "message": "Receipt already taken"
}
```

> NOTE: Booking not found

```
{
    "success": false,
    "message": "Booking not found"
}
```

### READ All Receipt

link: https://dth-soft-app.herokuapp.com/api/receipt

> GET

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "receipts": [
        {
            "_id": "6170d4c57f30f9eedc6f78cb",
            "booking": {
                "_id": "6167e36720a3682f18d5dbfa",
                "code": "DTH1634198375753",
                "rooms": [
                    {
                        "_id": "615facd1b13b84515abed925",
                        "roomNumber": "203",
                        "floor": 2,
                        "price": 250,
                        "roomType": "DOUBLE",
                        "status": "CLEANING"
                    }
                ],
                "checkInDate": "2021-10-14T00:00:00.000Z",
                "checkOutDate": "2021-10-16T00:00:00.000Z",
                "services": [
                    {
                        "quantity": 4,
                        "_id": "615fb4e1e9996df23eaf8670"
                    }
                ],
                "customer": {
                    "_id": "6158199ec61a9b03d090067b",
                    "name": "Customer1234 ",
                    "email": "cus@gmail.com",
                    "phone": "0123456789"
                },
                "deposit": 1000000,
                "roomCharge": 250,
                "serviceCharge": 10000000,
                "discount": 400000,
                "VAT": 10,
                "totalPrice": 11000275,
                "status": "CHECK OUT",
                "__v": 0
            },
            "paidOut": 300000,
            "refund": 0,
            "status": "PAID",
            "createBy": {
                "_id": "615fac7cb13b84515abed908",
                "name": "employee"
            },
            "updateBy": {
                "_id": "615fa4c70362be08899638f6",
                "name": "admin tai"
            },
            "isActive": true,
            "createdAt": "2021-10-21T02:47:33.509Z",
            "updatedAt": "2021-10-22T01:59:49.159Z",
            "__v": 0
        },
         ...
}
```

### READ 1 Receipt

link: https://dth-soft-app.herokuapp.com/api/receipt/6172576263c2dafe88c793ed

> GET

> NOTE: 6172576263c2dafe88c793ed is receiptId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "booking": {
        "_id": "6172576263c2dafe88c793ed",
        "booking": {
            "_id": "6167e7c2ba63c56806f61b6e",
            "code": "DTH1634199490562",
            "rooms": [
                {
                    "_id": "615facd1b13b84515abed925",
                    "roomNumber": "203",
                    "floor": 2,
                    "price": 250,
                    "roomType": "DOUBLE",
                    "status": "CLEANING"
                }
            ],
            "checkInDate": "2021-10-14T00:00:00.000Z",
            "checkOutDate": "2021-10-20T00:00:00.000Z",
            "services": [
                {
                    "quantity": 4,
                    "_id": "615fb4e1e9996df23eaf8670"
                }
            ],
            "customer": {
                "_id": "6158199ec61a9b03d090067b",
                "name": "Customer1234 ",
                "email": "cus@gmail.com",
                "phone": "0123456789"
            },
            "deposit": 3000000,
            "roomCharge": 1500,
            "serviceCharge": 10000000,
            "discount": 400000,
            "VAT": 10,
            "totalPrice": 11001650,
            "status": "CHECK OUT",
            "__v": 0
        },
        "paidOut": 11000275,
        "refund": 10000,
        "status": "PAID",
        "createBy": {
            "_id": "615fa4c70362be08899638f6",
            "name": "admin tai"
        },
        "updateBy": null,
        "isActive": true,
        "createdAt": "2021-10-22T06:17:06.951Z",
        "updatedAt": "2021-10-22T06:17:06.951Z",
        "__v": 0
    }
}
```

### UPDATE Receipt

link: https://dth-soft-app.herokuapp.com/api/receipt/update/6172576263c2dafe88c793ed

> PUT

> Having a form to do this

> NOTE: paid-out is required

> NOTE: 6172576263c2dafe88c793ed is receiptId

#### Request

```
{
    "paidOut": 300000,
    "refund":0
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Receipt updated successfully",
    "updatedReceipt": {
        "_id": "6172576263c2dafe88c793ed",
        "booking": "6167e7c2ba63c56806f61b6e",
        "paidOut": 300000,
        "refund": 0,
        "status": "PAID",
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "isActive": true,
        "createdAt": "2021-10-22T06:17:06.951Z",
        "updatedAt": "2021-10-22T06:37:30.863Z",
        "__v": 0
    }
}
```

=======================================================================================

## ==================>> MANAGER API <<=========================

### LOGIN

link: http://dth-soft-app.herokuapp.com/api/auth/login

> POST

#### Request

```
{
    "email":"manager@gmail.com",
    "password":"12345678"
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "User logged in successfully",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTVmYWM5M2IxM2I4NDUxNWFiZWQ5MGMiLCJpYXQiOjE2MzQ4ODU4MTR9.PLPYfxhN9CgXBakWnNfRkH5tIeL3PQHhz8jO8bh_SlM",
    "user": {
        "id": "615fac93b13b84515abed90c",
        "name": "manager",
        "email": "manager@gmail.com",
        "role": "MANAGER"
    }
}
```

##### Failure:

```
{
    "success": false,
    "message": "Incorrect email or password"
}
```

### CREATE Service

link: https://dth-soft-app.herokuapp.com/api/service

> POST

> Having a form to do this

> NOTE: name, price is required

#### Request

```
{
    "name":"A nice morning",
    "price": 1000000
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Service created successfully",
    "service": {
        "name": "A nice morning",
        "price": 1000000,
        "isActive": true,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": null,
        "_id": "6172347ff24904c216ca8086",
        "createdAt": "2021-10-22T03:48:15.193Z",
        "updatedAt": "2021-10-22T03:48:15.193Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: existing service

```
{
    "success": false,
    "message": "Service already taken"
}
```

### UPDATE Service

link: https://dth-soft-app.herokuapp.com/api/service/update/6172347ff24904c216ca8086

> PUT

> Having a form to do this

> NOTE: name, price is required

> NOTE: 6172347ff24904c216ca8086 is serviceId

#### Request

```
{
    "name": "A nice morning",
    "price": 5000000
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Service updated successfully",
    "updatedService": {
        "_id": "6172347ff24904c216ca8086",
        "name": "A nice morning",
        "price": 5000000,
        "isActive": true,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "createdAt": "2021-10-22T03:48:15.193Z",
        "updatedAt": "2021-10-22T03:55:42.021Z",
        "__v": 0
    }
}
```

### DELETE Service

link: https://dth-soft-app.herokuapp.com/api/service/delete/6172347ff24904c216ca8086

> PUT
> Desc: Change isActive property to **false**
> NOTE: 6172347ff24904c216ca8086 is serviceId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Service deleted successfully",
    "deletedService": {
        "_id": "6172347ff24904c216ca8086",
        "name": "A nice morning",
        "price": 5000000,
        "isActive": false,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "createdAt": "2021-10-22T03:48:15.193Z",
        "updatedAt": "2021-10-22T03:57:23.685Z",
        "__v": 0
    }
}
```

### CREATE User

link: https://dth-soft-app.herokuapp.com/api/user

> POST

> Having a form to do this

> NOTE: name, email, password is required

#### Request

```
{
    "name":"employee8",
    "email":"employee8@gmail.com",
    "password":"12345678",
    "phone":"0341234123",
    "address":"Binh Thanh, TP.HCM",
    "roles":"EMPLOYEE"
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "User created successfully",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTcyNjJkZTYzYzJkYWZlODhjNzk0MDUiLCJpYXQiOjE2MzQ4ODYzNjd9.SBk9E9nIw1ggtSxdl6iJ-5wyt1J899fg8R15lyVw8EM",
    "user": {
        "name": "employee8",
        "email": "employee8@gmail.com",
        "password": "$2a$10$7KCBMNXBX0hTQ/gO.I2bBe.QFtNeXtVjH994zN1ZS1v5qoDGVOBSS",
        "phone": "0341234123",
        "address": "Binh Thanh, TP.HCM",
        "image": "",
        "isActive": true,
        "roles": "EMPLOYEE",
        "createBy": "615fac93b13b84515abed90c",
        "updateBy": null,
        "_id": "617262de63c2dafe88c79405",
        "createdAt": "2021-10-22T07:06:06.816Z",
        "updatedAt": "2021-10-22T07:06:06.816Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: existing user

```
{
    "success": false,
    "message": "Email already taken"
}
```

### UPDATE User

link: https://dth-soft-app.herokuapp.com/api/user/update/617262de63c2dafe88c79405

> PUT

> Having a form to do this

> NOTE: email, password is required

> NOTE: 617262de63c2dafe88c79405 is userId

#### Request

```
{
   "name": "employee 8",
    "email": "employee88@gmail.com",
    "phone": "0341234123",
    "address": "Binh Thanh, TP.HCM",
    "image": ""
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "User updated successfully",
    "updatedUser": {
        "_id": "617262de63c2dafe88c79405",
        "name": "employee 8",
        "email": "employee88@gmail.com",
        "password": "$2a$10$7KCBMNXBX0hTQ/gO.I2bBe.QFtNeXtVjH994zN1ZS1v5qoDGVOBSS",
        "phone": "0341234123",
        "address": "Binh Thanh, TP.HCM",
        "image": "",
        "isActive": true,
        "roles": "EMPLOYEE",
        "createBy": "615fac93b13b84515abed90c",
        "updateBy": "615fa4c70362be08899638f6",
        "createdAt": "2021-10-22T07:06:06.816Z",
        "updatedAt": "2021-10-22T07:09:57.430Z",
        "__v": 0
    }
}
```

### DELETE User

link: https://dth-soft-app.herokuapp.com/api/user/delete/617262de63c2dafe88c79405

> PUT
> Desc: Change isActive property to **false**
> NOTE: 617262de63c2dafe88c79405 is userId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "User deleted successfully",
    "deletedUser": {
        "_id": "617262de63c2dafe88c79405",
        "name": "employee 8",
        "email": "employee88@gmail.com",
        "password": "$2a$10$7KCBMNXBX0hTQ/gO.I2bBe.QFtNeXtVjH994zN1ZS1v5qoDGVOBSS",
        "phone": "0341234123",
        "address": "Binh Thanh, TP.HCM",
        "image": "",
        "isActive": false,
        "roles": "EMPLOYEE",
        "createBy": "615fac93b13b84515abed90c",
        "updateBy": "615fa4c70362be08899638f6",
        "createdAt": "2021-10-22T07:06:06.816Z",
        "updatedAt": "2021-10-22T07:11:31.552Z",
        "__v": 0
    }
}
```

### CREATE Room

link: https://dth-soft-app.herokuapp.com/api/user

> POST

> Having a form to do this

> NOTE: roomNumber, floor, price is required

#### Request

```
{
    "roomNumber": "501",
     "floor": 5,
    "price": 250,
    "roomType":"DELUXE",
    "status":"READY"
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Room created successfully",
    "room": {
        "roomNumber": "501",
        "floor": 5,
        "price": 250,
        "roomType": "DELUXE",
        "status": "READY",
        "isActive": true,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": null,
        "_id": "617265a463c2dafe88c79418",
        "createdAt": "2021-10-22T07:17:56.275Z",
        "updatedAt": "2021-10-22T07:17:56.275Z",
        "__v": 0
    }
}
```

##### Failure:

> NOTE: existing room

```
{
    "success": false,
    "message": "Room already taken"
}
```

### UPDATE User

link: https://dth-soft-app.herokuapp.com/api/room/update/617265a463c2dafe88c79418

> PUT

> Having a form to do this

> NOTE: email, password is required

> NOTE: 617265a463c2dafe88c79418 is roomId

#### Request

```
{
    "roomNumber": "501",
     "floor": 5,
    "price": 350,
    "roomType":"DELUXE",
    "status":"CLEANING"
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Room updated successfully",
    "updatedRoom": {
        "_id": "617265a463c2dafe88c79418",
        "roomNumber": "501",
        "floor": 5,
        "price": 350,
        "roomType": "DELUXE",
        "status": "CLEANING",
        "isActive": true,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "createdAt": "2021-10-22T07:17:56.275Z",
        "updatedAt": "2021-10-22T07:20:49.858Z",
        "__v": 0
    }
}
```

### DELETE Room

link: https://dth-soft-app.herokuapp.com/api/room/delete/617265a463c2dafe88c79418

> PUT
> Desc: Change isActive property to **false**
> NOTE: 617265a463c2dafe88c79418 is roomId

#### Request

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "Room deleted successfully",
    "deletedRoom": {
        "_id": "617265a463c2dafe88c79418",
        "roomNumber": "501",
        "floor": 5,
        "price": 350,
        "roomType": "DELUXE",
        "status": "CLEANING",
        "isActive": false,
        "createBy": "615fa4c70362be08899638f6",
        "updateBy": "615fa4c70362be08899638f6",
        "createdAt": "2021-10-22T07:17:56.275Z",
        "updatedAt": "2021-10-22T07:21:56.357Z",
        "__v": 0
    }
}
```

## ==================>> ADMIN API <<=========================

### LOGIN

link: http://dth-soft-app.herokuapp.com/api/auth/login

> POST

#### Request

```
{
    "email":"admin@gmail.com",
    "password":"12345678"
}
```

#### Response

##### Success

status: 200

```
{
    "success": true,
    "message": "User logged in successfully",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTVmYTRjNzAzNjJiZTA4ODk5NjM4ZjYiLCJpYXQiOjE2MzQ4ODk1OTZ9.sCBFDzfo3VJaHRmASsYgno3mSO6BF5E3DnWZVvt3KD0",
    "user": {
        "id": "615fa4c70362be08899638f6",
        "name": "admin tai",
        "email": "admin@gmail.com",
        "role": "ADMIN"
    }
}
```

##### Failure:

```
{
    "success": false,
    "message": "Incorrect email or password"
}
```
