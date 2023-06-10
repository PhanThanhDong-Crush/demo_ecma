import axios from "axios";
import Header from "../components/header";
import { useEffect, useState } from "../lib";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/project`).then(({ data }) => setProjects(data))
    }, [])

    useEffect(() => {
        const btnDelete = document.querySelectorAll(".btn-danger")
        for (const btn of btnDelete) {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id

                axios.delete(`http://localhost:3000/project/${id}`)
                    .then(() => setProjects(projects.filter(pro => pro.id != id)))
            })
        }
    })

    return /*html*/`
    ${Header()}
      <div class="container">
        <h1>Project List</h1>

        <div>
                ${projects.map(pro => {
        return /*html*/`
            <div>
                <a href="/projects/${pro.id}">
                <h3>${pro.name}</h3>
                </a>
                <p>${pro.price}</p>
            </div>
        `
    })}
        </div>`
}

export default Projects;