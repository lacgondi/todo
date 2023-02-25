import React from "react";
import TodoItem from "./TodoItem";
import { TodoProps, TodoListState } from "./Interfaces";
import AddItemInput from "./AddItemInput";

class TodoList extends React.Component<{}, TodoListState> {
	constructor(props: any) {
		super(props);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onCheckHandler = this.onCheckHandler.bind(this);
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onAddHandler = this.onAddHandler.bind(this);
		this.onModifyHandler = this.onModifyHandler.bind(this);
		this.onEditChangeHandler = this.onEditChangeHandler.bind(this);
		this.onAcceptEditHandler = this.onAcceptEditHandler.bind(this);
		this.onDeclineEditHandler = this.onDeclineEditHandler.bind(this);

		this.state = { addInput: "", idCounter: 0, list: [] };
	}

	//Input field
	onChangeHandler(
		e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		this.setState({ addInput: e.currentTarget.value });
	}

	onAddHandler() {
		let array: TodoProps[] = this.state.list.slice();
		array.push({
			isDone: false,
			isBeingEdited: false,
			onCheckHandler: this.onCheckHandler,
			onDeleteHandler: this.onDeleteHandler,
			onModifyHandler: this.onModifyHandler,
			id: this.state.idCounter,
			name: this.state.addInput,
			editingInput: "",
			onEditChangeHandler: this.onEditChangeHandler,
			onAcceptEditHandler: this.onAcceptEditHandler,
			onDeclineEditHandler: this.onDeclineEditHandler,
		});
		this.setState({ list: array, idCounter: this.state.idCounter + 1 });
	}

	onCheckHandler(id: number) {
		const array: TodoProps[] = this.state.list.map((x) =>
			x.id === id ? { ...x, isDone: !x.isDone } : x
		);
		this.setState({
			list: array,
		});
	}

	onDeleteHandler(id: number) {
		const array: TodoProps[] = this.state.list.filter((x) => x.id !== id);
		this.setState({
			list: array,
		});
	}

	onModifyHandler(id: number) {
		const array: TodoProps[] = this.state.list.map((x) =>
			x.id === id
				? { ...x, isBeingEdited: true }
				: { ...x, isBeingEdited: false }
		);
		this.setState({ list: array });
	}

	//Thus having the same input if you try editing 2 items at a time
	onEditChangeHandler(
		e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const array: TodoProps[] = this.state.list.map((x) =>
			// eslint-disable-next-line
			x.id === x.id ? { ...x, editingInput: e.currentTarget.value } : x
		);
		this.setState({ list: array });
	}

	onAcceptEditHandler(id: number) {
		const array: TodoProps[] = this.state.list.map((x) =>
			x.id === id
				? { ...x, name: x.editingInput, editingInput: "", isBeingEdited: false }
				: x
		);
		this.setState({ list: array });
	}
	onDeclineEditHandler(id: number) {
		const array: TodoProps[] = this.state.list.map((x) =>
			x.id === id ? { ...x, editingInput: "", isBeingEdited: false } : x
		);
		this.setState({ list: array });
	}

	render() {
		return (
			<>
				<AddItemInput
					value={this.state.addInput}
					valueOnChangeHandler={this.onChangeHandler}
					onAddHandler={this.onAddHandler}
				/>
				{this.state.list.map((x) => (
					<TodoItem key={x.id} item={x} />
				))}
			</>
		);
	}
}

export default TodoList