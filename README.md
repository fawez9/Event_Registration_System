
# Event Registration System

This is a simple event registration system built with Express.js, Node.js, and MongoDB. It manages events and user registrations through a RESTful API.



## Features

- Event Management:

    - Add new events.
    - Update event details.
    - Delete events.
- User Registration:

    - Register users for events.
    - Update user registration details.
    - Delete user registrations.


## Technologies Used

- Backend:

    - Node.js
    - Express.js
    - MongoDB (with Mongoose ORM)
## Installation

### Step 1 : Clone the repository

```bash
  git clone https://github.com/fawez9/Event_Registration_System.git
  cd Event_Registration_System
```

### Step 2 :Install dependencies

```bash
  npm install
```

### Step 3 : Set up environment variables

- Create a **.env** file based on .env.example and configure it with your MongoDB connection string and Port needed to run the app.

### Step 4 : Run the application

```bash
  npm run dev
```

### Testing:

- You can test the API endpoints using tools like **Postman** or any other API testing tool of your choice.



    
## API Endpoints
- Events:

    - GET /events: Get all events.
    - POST /events: Create a new event.
    - GET /events/:eventId: Get details of a specific event.
    - PUT /events/:eventId: Update an event.
    - DELETE /events/:eventId: Delete an event.

- Registrations:

    - GET /events/:eventId/registrations: Get all registrations for a specific event.
    - POST /events/:eventId/registrations: Register a user for an event.
    - GET /events/:eventId/registrations/:registrationId: Get details of a specific registration.
    - PUT /events/:eventId/registrations/:registrationId: Update a user's registration details.
    - DELETE /events/:eventId/registrations/:registrationId: Delete a user's registration.
## Contributing

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change.
## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)
 License
