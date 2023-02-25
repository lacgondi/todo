export interface TodoHandler{
    id:number;
    name:string,
    isDone:boolean;
    isBeingEdited:boolean;
    editingInput:string;
    onCheckHandler:(id:number)=>void;
    onModifyHandler:(id:number)=>void;
    onEditChangeHandler:(e:React.SyntheticEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
    onAcceptEditHandler:(id:number)=>void;
    onDeclineEditHandler:(id:number)=>void;
    onDeleteHandler:(id:number)=>void;
}

export interface TodoListHandler{
    list:TodoHandler[];
    idCounter:number;
    addInput:string;
    modifyInput?:string;
}