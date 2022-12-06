# cocoon
A project manager with Express, GraphQL, and React

**Link to project:** http://cocoon.onrender.com/

![demo of Cocoon in browser](https://github.com/moonlighter-dev/cocoon/blob/main/client/public/cocoon-demo.gif)

## How It's Made:

**Tech used:** Express, GraphQL, MongoDB, Mongoose, React, Apollo Client, Bootstrap

I wanted to play with GraphQL's targeted functionality - I had heard that the queries resulted in much leaner results than REST API's, so I created a simple project management application that would help myself and colleagues at the agency to track our projects and client related data without having to look them up in separate areas. The first iteration of this project allows the user to create clients and projects, with full CRUD functionality on the projects aspect.

The highlight of this experiment was using GraphiQL to make queries and mutations that returned only specific data. I had previously used Postman for this task, and it was a refreshing change to have it built in to the backend (used in development only). Consolidating the endpoints with GraphQL made it noticeably easier to reference and access routes once I established them.

## Optimizations
*(optional)*

Features to add: Adding due dates to the schema will provide additional functionality for the app itself. In the front end, I could create a color scheme that responds differently if the due date is close (say within one week or one day), also the ability to sort projects by their due date.

On the front end, it would help with the usability of the app to add visuals to the status representation. Adding circles of green, blue, and pink could indicate the status of a project as well.

I want to clear up the enum blocking access to the status values in the schema. Once I fix this discrepancy, I can populate the Project Form Update field for Status. As is, it can be updated but cannot populate with the current value.

## Lessons Learned:

I got to trace some bugs all the way from the front end to the back end. It's a rewarding experience to track an error to its core, and in the process I create a kind of internal map for the passing of props, variables, and data types throughtout the application.

Needless to say I learned a lot about GraphQL, its functionality and its advantages as a more customized query solution.



