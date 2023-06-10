import axios from "axios";
import Header from "../components/header";
import { useEffect, useState } from "../lib";

const projectDetail = ({ id }) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/project/${id}`).then(({ data }) => setProject(data))
    }, [])


    return `
    ${Header()}
    ComponentContent projectDetail:
    <h1>${project.name}</h1>
    <h3 style="color: red;">${project.price}</h3>`
}

export default projectDetail;