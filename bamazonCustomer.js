//how do we manually change the values in data such as price and qty??? mysql or from .sql file?? 
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "danniboi82",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected on: " + connection.threadId);
  showAllProducts();
  // runSearch();
});

function showAllProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
      // + " | " + res[i].stock_qty
    }
    console.log("-----------------------------------");
    productSearch();
  });
}

function productSearch() {
  inquirer
    .prompt([
      {
        name: "selectID",
        type: "input",
        message: "Enter ID of product you want to purchase.",
      },

    ])
    .then(function (user) {
      console.log(user.selectID);
      connection.query("SELECT * FROM products WHERE ?", { id: user.selectID }, function (err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Product_ID: " +
            res[0].id +
            " || Product_Name: " +
            res[0].product_name +
            " || Department_name: " +
            res[0].department_name +
            " || Price: " +
            res[0].price
          )
        }
        inquirer
          .prompt([
            {
              name: "selectAmount",
              type: "input",
              message: "Enter the quanity."
            }
          ])
          .then(function (howMany) {
            console.log(howMany.selectAmount);
            connection.query("SELECT * FROM products WHERE ?", { id: howMany.selectAmount }, function (err, res) {
              for (var i = 0; i < res.length; i++) {               
                if (res[i].stock_qty >= howMany.selectAmount) {
                  console.log("you're in luck we have " + howMany.selectAmount + " stock");
                  //i don't understand why the else if statement below is not working properly.
                } else if (res[i].stock_qty < howMany.selectAmount){
                  console.log("OUT OF STOCK, Please check back later");
              
                }  
              }

            })
          });
      });

    }
    )
}
