# MyLoginApp

This is a simple login application with Google Firebase integration and basic CRUD functionality for posts, built using Ionic.

## Hosted Application

The application is live at: [MyLoginApp](https://himanshumahajan67.github.io/myLoginApp/login)

## Running the Application Locally

To run this web application locally, follow these steps:

1. **Clone the repository** to your local machine.
2. **Add environment files** with your Firebase details for login functionality to work.
3. Navigate to the `login-ionic` folder:
    ```bash
    cd login-ionic
    ```
4. Run the following command:
    ```bash
    ionic serve
    ```
5. The application should start running locally on your browser.

## Features

- **Image Carousel**: Click to change the displayed images.
- **Google Firebase Integration**: User authentication is handled through Google Firebase.
- **Login & Welcome Page**: 
  - After logging in, you will be redirected to the Welcome page.
  - The Welcome page displays 3 mock posts fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com).
  - The mock API data is stored in the browser's local storage.
  
- **Post Management**:
  - Users can **delete** and **add** posts.
  - The browser maintains the state of added and deleted posts in local storage.

- **Profile Section**:
  - Users can reset local storage by clicking the **Delete User Data** button.
  - The **Logout** button allows users to log out of the application.

## Troubleshooting

If you experience a black screen, try the following steps:
- **Clear your browser cache**.
- **Open the website in incognito mode**.

## Development Time

This application was built in **2 days**.
