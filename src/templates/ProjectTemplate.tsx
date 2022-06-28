
import * as React from "react"
//import { container } from "../styles/templates/ProjectTemplate.module.css"

import * as projectTemplateStyles from '../styles/templates/ProjectTemplate.module.css'

//styles 



const ProjectTemplate = (props: any) => {
    return (
        <div className={projectTemplateStyles.projectContainer}>
            {/* <img src={props.props.image} alt="Project image" className={projectTemplateStyles.projectImage} /> */}
            <h2>{props.props.title}</h2>
            <p>{props.props.description}</p>
            <p>{props.props.technologiesUsed}</p>
        </div>
    );
}

export default ProjectTemplate;