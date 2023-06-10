import axios from "axios";
import Header from "../../components/header";
import { router, useEffect, useState } from "../../lib";

const ProjectEdit = ({ id }) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/project/${id}`).then(({ data }) => setProject(data))
    }, [])

    useEffect(() => {
        document.querySelector("#form").addEventListener('submit', (e) => {
            e.preventDefault();

            const project = {
                name: document.querySelector("#name").value,
                price: document.querySelector("#price").value,
            }

            if (project.name == "") {
                alert("Name null !!!")
            }
            else if (project.price == "") {
                alert("Price null!!!")
            }
            else if (project.price < 0) {
                alert("Price < 0 !!!")
            }
            else {
                axios.put(`http://localhost:3000/project/${id}`, project)
                alert("edit thanh cong")
                router.navigate('/admin/projects')
            }
        })
    })

    return `
    ${Header()}
      <div class="container">
        <h1>Admin Project Edit</h1>

        <form id="form">
        <div class="mb-3">
            <input type="text" name="name" id="name" class="form-control" placeholder="Name Project" value="${project.name}">
        </div>
        <div class="mb-3">
            <input type="text" name="price" id="price" class="form-control" placeholder="Price" value="${project.price}">
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>`
}

export default ProjectEdit;