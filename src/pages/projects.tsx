import * as React from "react"
import ProjectTemplate from "../templates/ProjectTemplate"

interface Project {
    title: String,
    description: String,
    image: URL,
    technologiesUsed: Array<String>
}

//data
let projects: Project[] = [
    // {
    //     title: "",
    //     description: "",
    //     image: new URL("https://images.pexels.com/photos/12405196/pexels-photo-12405196.jpeg"),
    //     technologiesUsed: ["TS", "React", "Docker"]
    // },
    // {
    //     title: "ProjectTitle",
    //     description: "ProjectDescription",
    //     image: new URL("https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"),
    //     technologiesUsed: ["TS", "React", "Docker"]
    // }
]

// markup
const ProjectPage = () => {
    return (
        <main>
            <h1>These are the sick page projects</h1>
            {projects.map((project, index) =>
                <ProjectTemplate props={project} key={index}></ProjectTemplate>
            )}
        </main>
    )
}

export default ProjectPage