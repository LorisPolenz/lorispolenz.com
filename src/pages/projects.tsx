import * as React from "react"
import ProjectTemplate from "../templates/ProjectTemplate"

interface Project {
    title: String,
    description: String,
    image?: URL,
    link?: URL,
    technologiesUsed: Array<String>
}

//data
let projects: Project[] = [
    {
        title: "Pwn-pass",
        description: "Pwm-pass is a joke project leaning to the fact that some people use very insecure passwords. To help these people find their perfect insecure password I created pwn-pass based on a leaked password list.",
        link: new URL("https://github.com/lorispolenz/pwn-pass"),
        technologiesUsed: ["React", "Go", "MongoDB"]
    },
    {
        title: "Gym Tracker",
        description: "My gym has a public API with the people currently in the gym. This project harvests this data every 5 minutes and saves it to a CSV file. This data then can be used to determine the best time of the day for a good gym session.",
        link: new URL('https://github.com/lorispolenz/gym-tracker'),
        technologiesUsed: ["Python", "Docker"]
    },
    {
        title: "Traily",
        description: "At Traily my main job was to manage the team and support then during the whole Scrum process. ",
        link: new URL('https://traily.ch'),
        technologiesUsed: ['Scrum']

    }
]




// markup
const ProjectPage = () => {
    return (
        <main>
            <title>Projects</title>
            <h1>These are the sick page projects</h1>
            {projects.map((project, index) =>
                <ProjectTemplate props={project} key={index}></ProjectTemplate>
            )}
        </main>
    )
}

export default ProjectPage