# e-commerce
e-commerce project using (nodejs, expressjs, ejs, mongodb )



## start the server 


```
$ sudo systemctl status mongod
$ sudo systemctl start mongod
$ mongosh 
```

## environment variable
```
DB_CONNECTION_STRING=mongodb://localhost:27017/e-commerce
```


## running the project 

```
$ npm install 
$ npm start 

```


## file structure 
```
├── controllers
│   └── order.js
├── index.js
├── models
│   ├── db.js
│   └── order.js
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   ├── carousel.css
│   │   └── style.css
│   ├── img
│   │   ├── carousel
│   │   │   ├── slide1.jpeg
│   │   │   ├── slide2.jpeg
│   │   │   └── slide3.jpeg
│   │   ├── fruits
│   │   │   ├── fruit1.jpeg
│   │   │   ├── fruit2.jpeg
│   │   │   ├── fruit3.jpeg
│   │   │   ├── fruit4.jpeg
│   │   │   ├── fruit5.jpeg
│   │   │   └── fruit6.jpeg
│   │   ├── juice
│   │   │   ├── juice1.jpeg
│   │   │   ├── juice2.jpeg
│   │   │   └── juice3.jpeg
│   │   └── salads
│   │       ├── salad1.jpeg
│   │       ├── salad2.jpeg
│   │       └── salad3.jpeg
│   └── js
│       ├── cart.js
│       └── main.js
├── routes
│   └── order.js
└── views
    ├── admin.ejs
    ├── cart.ejs
    ├── components
    │   └── navbar.ejs
    ├── mainLayout.ejs
    ├── menu.ejs
    └── orders.ejs

13 directories, 32 files





