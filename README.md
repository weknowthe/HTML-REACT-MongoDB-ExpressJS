# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### ` npm run deployment`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `About Project`

Application is created using REACT no other lib like MaterialUI and Bootstrap used
App allows to fetch data from MongoDB's customer collection and and display it according to coustomerId.

User is provided with ability to sort the result and to search according to name, table also has an column as 
Picture which has the Customer image as Thumbnail on clicked can be viwed in actual size.

Sample Data is under '/Components/samplejson/samplejson.json file.

App hosts two API's which has capability to connect to MongoDB.

1. Method Type: GET.
   API Name: /api/customers : Retrieve list of customers
   
2. Method Type: POST.
   API Name: /api/customers : To add a customer
   sample body
   body:
   {
    "address": "16- High Street , Nong",
    "email": "16-email@email.com",
    "phonenumber": "16- 1625600001",
    "fullName": "16-AK Dren",
    "userName": "16-Ajesh",
    "gender": "M",
    "picture": "https://source.unsplash.com/user/c_v_r/600x500",
    "customerId": 1000016
}

Application Image:
![image](https://user-images.githubusercontent.com/22475585/160049625-21c6bd30-6c88-4c7d-bf0b-349d80dd7935.png)

   
   

