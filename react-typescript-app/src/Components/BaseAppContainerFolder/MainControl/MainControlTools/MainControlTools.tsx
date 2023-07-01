import { IProject } from '../MainControl';
import './MainControlTools.css';
import { ToolsProjectList } from './ToolsProjectList';


export interface IMainControlToolsProps{
    projects: IProject[],
    onAddNewProject: () => void
}

export function MainControlTools(props: IMainControlToolsProps){

    return(
        <div className="MainControlTools">
            <div className='main-button-container'>
                <button className='add-project-button' onClick={props.onAddNewProject}> Добавить проект </button>
            </div>

            <ToolsProjectList projects={props.projects}/>

        </div>
    )
}