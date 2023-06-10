import axios from "axios";
import Header from "../../components/header";
import { useEffect, useState } from "../../lib";

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/project`).then(({ data }) => setProjects(data))
    }, [])

    useEffect(() => {
        const btnDelete = document.querySelectorAll(".btn-danger")
        for (const btn of btnDelete) {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id
                const tb = window.confirm('Are your sure')
                if (tb) {
                    axios.delete(`http://localhost:3000/project/${id}`)
                        .then(() => setProjects(projects.filter(pro => pro.id != id)))
                }
            })
        }
    })

    return `
    ${Header()}
      <div class="container">
        <h1>Admin Project List</h1>
        <a href="/admin/projects/add"><button class="btn btn-primary">Add</button></a>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${projects.map((pro, index) => {
        return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${pro.name}</td>
                            <td>${pro.price}</td>
                            <td>
                                <a href="/admin/projects/${pro.id}/edit"><button class="btn btn-warning">Edit</button></a>
                                <button class="btn btn-danger" data-id="${pro.id}">Delete</button>
                            </td>
                        </tr>`
    }).join("")}
            </tbody>
        </table>
    </div>`
}

export default ProjectList;