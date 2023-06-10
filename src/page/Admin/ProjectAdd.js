import axios from "axios";
import Header from "../../components/header";
import { router, useEffect } from "../../lib";

const ProjectAdd = () => {
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
                axios.post(`http://localhost:3000/project`, project)
                alert("add thanh cong")
                router.navigate('/admin/projects')
            }
        })
    })

    return `
    ${Header()}
      <div class="container">
        <h1>Admin Project Add</h1>

        <form id="form">
        <div class="mb-3">
            <input type="text" name="name" id="name" class="form-control" placeholder="Name Project">
        </div>
        <div class="mb-3">
            <input type="text" name="price" id="price" class="form-control" placeholder="Price">
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>`
}

export default ProjectAdd;