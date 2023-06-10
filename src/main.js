import { router, render } from './lib'
import ProjectAdd from './page/Admin/ProjectAdd'
import ProjectEdit from './page/Admin/ProjectEdit'
import ProjectList from './page/Admin/ProjectList'
import Home from './page/Home'
import PageNotFound from './page/PageNotFound'
import Projects from './page/Projects'
import projectDetail from './page/projectDetail'

const app = document.querySelector("#app")

router.on('/', () => {
    return render(Home, app)
})
router.on('/projects', () => {
    return render(Projects, app)
})
router.on('/projects/:id', ({ data }) => render(() => projectDetail(data), app))

// Admin
router.on('/admin/projects', () => {
    return render(ProjectList, app)
})
router.on('/admin/projects/add', () => {
    return render(ProjectAdd, app)
})
router.on('/admin/projects/:id/edit', ({ data }) => render(() => ProjectEdit(data), app))

router.notFound(() => {
    return render(PageNotFound, app)
})

router.resolve()