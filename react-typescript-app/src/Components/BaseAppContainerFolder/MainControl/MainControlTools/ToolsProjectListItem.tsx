
export interface IToolsProjectListItem{
    projectName: string
}

export function ToolsProjectListItem(props: IToolsProjectListItem) {
    return (
        <div className="ToolsProjectListItem">
            <p>{props.projectName}</p>
        </div>
    );
}