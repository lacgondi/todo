import React from "react";
import TodoItem from "./TodoItem";
import {TodoHandler, TodoListHandler} from "../Interfaces";
import {Button, TextField} from "@mui/material";

class TodoList extends React.Component<{}, TodoListHandler> {
    constructor(props: any) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onCheckHandler = this.onCheckHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onModifyHandler=this.onModifyHandler.bind(this)
        this.onEditChangeHandler=this.onEditChangeHandler.bind(this)
        this.onAcceptEditHandler=this.onAcceptEditHandler.bind(this)
        this.onDeclineEditHandler=this.onDeclineEditHandler.bind(this)

        this.state = {addInput: '', idCounter:0, list: []}
    }

    //Input field
    onChangeHandler(e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.setState({addInput: e.currentTarget.value})
    }

    onAddHandler() {
        let array: TodoHandler[] = this.state.list.slice();
        array.push({
            isDone: false,
            isBeingEdited: false,
            onCheckHandler: this.onCheckHandler,
            onDeleteHandler: this.onDeleteHandler,
            onModifyHandler:this.onModifyHandler,
            id: this.state.idCounter,
            name: this.state.addInput,
            editingInput: "",
            onEditChangeHandler: this.onEditChangeHandler,
            onAcceptEditHandler: this.onAcceptEditHandler,
            onDeclineEditHandler: this.onDeclineEditHandler,
        })
        this.setState({list: array, idCounter: this.state.idCounter+1})
    }

    onCheckHandler(id: number) {
        const array: TodoHandler[] = this.state.list.map(x => x.id == id ? {...x, isDone: !x.isDone} : x);
        this.setState({
            list: array
        })
    }

    onDeleteHandler(id: number) {
        const array: TodoHandler[] = this.state.list.filter(x => x.id !== id);
        this.setState({
            list: array
        })
    }

    onModifyHandler(id:number){
        const array:TodoHandler[]=this.state.list.map(x=>x.id===id?{...x,isBeingEdited: true}: {...x,isBeingEdited:false});
        this.setState({list:array})
    }

    //TODO fix different input fields using the same input handler
    //Thus having the same input if you try editing 2 items at a time
    onEditChangeHandler(e:React.SyntheticEvent<HTMLInputElement|HTMLTextAreaElement>){
        const array:TodoHandler[]=this.state.list.map(x=>x.id===x.id?{...x,editingInput:e.currentTarget.value}:x);
        this.setState({list:array})
    }

    onAcceptEditHandler(id:number){
        const array:TodoHandler[]=this.state.list.map(x=>x.id===id?{...x,name:x.editingInput, editingInput: '', isBeingEdited:false}:x);
        this.setState({list:array})
    }
    onDeclineEditHandler(id:number){
        const array:TodoHandler[]=this.state.list.map(x=>x.id===id?{...x,editingInput:'', isBeingEdited:false}:x);
        this.setState({list:array})
    }

    render() {
        return <>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={this.state.addInput}
                           onChange={this.onChangeHandler}/>
                <Button variant="contained" onClick={this.onAddHandler}>Contained</Button>
            </div>
            {this.state.list.map(x => <TodoItem key={x.id} item={x} />)}</>
    }
}

export default TodoList