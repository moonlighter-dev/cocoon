import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';
import { UPDATE_PROJECT } from '../mutations/projectMutations';

export default function EditProjectForm({ project }) {
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    // the useState of status is harder to get to because of the key/value structure on the backend
    // TODO: can fix this - get the key for the enum and pass it in
    const [status, setStatus] = useState('');
    const [dueDate, setDueDate] = useState(project.dueDate);

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { id: project.id, name, description, status, dueDate},
        refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
    })

    const onSubmit = (e) => {
        e.preventDefault();

        if( !name || !description || !status || !dueDate ) {
            return alert("Please fill out all fields")
        }

        // console.log(name, description, status, dueDate)

        updateProject(name, description, status, dueDate)
    }

    return (
        <div className='mt-5'>
            <h3>Update Project Details</h3>
            <form onSubmit={ onSubmit }>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={ (e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" id="description" value={description} onChange={ (e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select id="status" className="form-select" value={status} onChange={ (e) => setStatus(e.target.value)}>
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Due Date</label>
                    <input type="date" className="form-control" id="dueDate" value={dueDate} onChange={ (e) => setDueDate(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}