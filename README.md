# Vinayak Snacks and Tea

* Its a web application representing my college's snacks and tea shop - Vinayak Snacks & Tea.

### 👀 [Live Link](https://vinayak-snacks-and-tea.herokuapp.com/) 

* Deployed at [Heroku](https://heroku.com).

### 👌 Features
*  Inventory of daily available items on front page.
*  Easily Managable Ordering System.
*  Admin View for staff members to update order status, menu items and employee details.
*  Handles different frontend and backend dynamic routes in `React` and `NodeJS`.
*  Long Time saving of Employees, Products and Orders in `Google Cloud` using `MongoDB` as database.

## :rocket: Technologies Used

* ReactJS
* NodeJS
* ExpressJS
* MongoDB
* Mongoose

## 🧰 Installation

First follow these commands and mentioned steps to get your app ready with installation.

* Fork this repository.

```bash
git clone https://github.com/<your_github_username>/Snacks-and-Tea-Shop.git
```

```bash
yarn install 
```

```bash
cd client
yarn install 
```

After installations, make a file `.env` in the root directory of the project. 
* First add `PORT` as 5000 to handle api requests. 
* Second add `MONGO_URI` which is the mongodb database link.
Visit [Mongo DB](https://www.mongodb.com/) and sign up for the free API Key. Then go back to your [Mongo DB](https://www.mongodb.com/) account and must create a database cluster as your server for this application. Here is a [guide](https://docs.mongodb.com/manual/tutorial/atlas-free-tier-setup/) on how to create
* Third one is `NODE_ENV` which could be 'development' or 'production' based on your app's status.
* Fourth add a secured password for the shop as `SHOPPASS`
* Fifth add a `JWTSECRET` which could be any long string that we use for creating json web tokens.

Then start the react app on localhost and start the backend server using these command.

```bash
yarn run server
```

```bash
cd client
yarn start 
```

##  🎇 Contributing

If you find bugs with this project, pull requests are always welcome. You can [create an issue here](https://github.com/ShwetKhatri2001/Snacks-and-Tea-Shop/issues/new).
Your :star: is also greatly appreciated.

[Checkout my GitHub profile and view more awesome projects](https://github.com/ShwetKhatri2001)
