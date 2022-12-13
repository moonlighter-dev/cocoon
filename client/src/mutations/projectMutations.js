import {gql} from "@apollo/client";

const ADD_PROJECT = gql`
    mutation AddProject($name: String!, $description: String!, $status: ProjectStatus!, $dueDate: String!, $clientId: ID!) {
        addProject(name: $name, description: $description, status: $status, dueDate: $dueDate, clientId: $clientId) {
            id
            name
            description
            status
            dueDate
            client {
                id
                name
                email
                phone
            }
        }
    }
`

const UPDATE_PROJECT = gql`
    mutation UpdateProject($id: ID!, $name: String!, $description: String!, $status: ProjectStatusUpdate!, $dueDate: String!) {
        updateProject(id: $id, name: $name, description: $description, status: $status, dueDate: $dueDate) {
            id
            name
            description
            status
            dueDate
            client {
                id
                name
                email
                phone
            }
        }
    }
`

const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID!) {
        deleteProject(id: $id) {
            id
        }
    }
`

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };