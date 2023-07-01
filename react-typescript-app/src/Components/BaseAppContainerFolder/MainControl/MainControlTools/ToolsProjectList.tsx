import { IProject } from "../MainControl";
import { ToolsProjectListItem } from "./ToolsProjectListItem";


interface IToolsProjectListProps{
    projects: IProject[]
}


export function ToolsProjectList(props: IToolsProjectListProps){
    return (
        <div className="ToolsProjectList">
            {props.projects.map(project =>
                 <ToolsProjectListItem key={project.id} projectName={project.name}/>)}
        </div>
    );
}