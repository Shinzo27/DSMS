Dsms - Dryfruit Store Management System

First Major Project Using Mern Stack

Here Are Some Key Features that are included in this project:

- Customers:
    - Wishlist
    - Push Notification
    - Sorting/Filtering
    - Customer Login
    - Customer Support
    - Secure Payment
    - Shopping Cart
    - Customer Reviews
    - Easy Navigations
    - Product Gallery
    - Searching
    - Delivery Status Tracking
    - Payment Option
    - Easy Checkout
    - Registration With Email Verification
    - Order Summery
    - Product Description
    - Invoice Mailling
    - Product Reviews
    - Discount Coupons
    - Item Availability
    - Google Login

- Admin:
    - Categories
        - Add Categories
        - Remove Categories
        - Edit Categories
    - Products
        - Add Products
        - Remove Products
        - Edit Products
        - Manage Stocks
    - Orders:
        - Track Status
        - Edit Order
        - Delete Order
        - Edit Tracking Status of Order
    - Customers
        - View Customers
    - Push Notification
    - Authentication:
        - Login
        - Logout
    - Reports:
        - Piecharts
        - linecharts
        - Barcharts
    - Payment Tracking
    - Feedbacks
    - Manage Coupons
    - Manage Landing Page Images

Tech Stack Used:
- MongoDB
- Express.js
- React.js
- Node.js

Code Flow : 

Registration : Enter Email,Password => check if exist (if yes => show error) => send otp (will return otp, email, password, username) => show msg (otp sent) => pass props with useNavigate => navigate to otpVerify => enter otp (if doesn't match show error) => if matched (show success and register user) => generate token and redirect to home

