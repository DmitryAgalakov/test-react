import { MainControlTools } from "./MainControlTools/MainControlTools";
import './MainControl.css'
import { Project } from "./Project/Project";
import { useState } from "react";

export interface IProject{
    id: string
    name: string
    notes: [ {
            id: string
            name: string
            status: number
            projectId: string
            todoitems: [ {
                    id: string,
                    name: string,
                    text: string,
                    isComplete: boolean
                    noteId: string
                }
            ]
        }
    ]
}
const dummyProject: IProject =
{
    id: "string",
    name: "string",
    notes: [
        {
            id: "string",
            name: "string",
            status: 0,
            projectId: "string",
            todoitems: [
                {
                    id: "string",
                    name: "string",
                    text: "string",
                    isComplete: false,
                    noteId: "string",
                }]
        }]
};

export function MainControl(){

    const [projects, setProjects] = useState([dummyProject]);

    // let guid = crypto.randomUUID();

    function addNewProject(){
        let newProject = dummyProject;
        newProject.id = crypto.randomUUID();
        setProjects([...projects, dummyProject]);
    }

    return(
        <div className="MainControl">
            <MainControlTools projects={projects} onAddNewProject={addNewProject}/>
            <Project/>
        </div>
    )
}