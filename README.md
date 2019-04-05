## ReactJS Shop Admin


[![version](https://img.shields.io/badge/version-v0.0.1-orange.svg?style=flat)](https://github.com/sartim/react_shop_admin/issues)

React Shop Admin Dashboard. Content management system for managing an online shop for products which is also a web socket client. To run the server source code locally which is also the web socket client use [this](https://github.com/sartim/flask_shop_api.git) repo

#### Features

* Dashboard stats showing order counts: For today, yesterday, this month, last month, this year
* Dashboard databased graph using Armcharts4 for visualizing daily orders
* Dashboard & stats for high performing products
* Dashboard & stats for income from products
* Tracking login & logout events using Socket.io: Events trigger a notification & view change
* Real-time notification using Socket.io
* Role based access control
* Profile management
* Settings management
* Viewing order progress & changing order status
* List, Add, Update & Delete Products
* List, Add, Update & Delete Product Categories
* List, Add, Update & Delete Users
* List, Add, Update & Delete User Roles


**Setup and running project on dev**

    $ bower install
    $ npm install
    $ npm start

**Build Dev/Prod**
    
    $ npm run build:dev
    $ npm run build:prod


**Demo URL**

`https://react-shop-admin.firebaseapp.com`

###### Login Credentials

email: `demo@mail.com`

password: `qwertytrewq`
