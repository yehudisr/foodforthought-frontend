# Front End
# Food for Thought

![Screen Shot 2021-05-11 at 6 14 55 PM](https://user-images.githubusercontent.com/77118499/118162973-62bc5f00-b3ef-11eb-8688-acf6334bfd27.png)



Table of Contents

* About
* General Usage
* Contributors


## Food for Thought
Food for Thought is an app that seeks to create a community partnership that brings everyone together, doing their part to feed the hungry and save food at the same time. Local eateries, cafes, markets and event caterers can post their leftover food. People seeking a fresh meal can login and order a meal.


### About The Project

Food For Thought was developed as the Flatiron Software Engineering capstone project by Yehudis Raitman. The client interface is built with React functional components. Redux is incorporated for global state management across the app, and custom Styled and Chakra framework were used for styling. 

The client interface interface connects to a Rails API server which is used to persist data to a PostgreSQL database. The repo link for the Rails API server can be found here: https://github.com/yehudisr/foodforthought-backend.

### General Usage

#### Food Vendor

- Create an account as a Food Vendor, after login the app will direct to the Food Vendor’s main page.
- You can post a new listing, including the times it is available and the amount available.
- You can view all your current and previous listings, along with their status and availability. Each listing is updated as soon as an order is placed.
- You can download an itemized monthly giving report to be used for tax purposes.
- You can delete listings.


#### Placing an Order

- Create an account to place an order, after login the app will direct to the main Listing page. A map which loads based on your location will show the location of vendors.
- Browse current listings and place an order. 
- The listings will grey out once the pick up window has passed.
- The availability updates when an order is placed.
- Upon filling out the order form you will receive an email notification confirming your order.



### Contributors

Yehudis Raitman

