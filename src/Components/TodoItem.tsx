import { TodoProps } from "./Interfaces";
import EditedTodoItem from "./EditedTodoItem";
import NotEditedTodoItem from "./NotEditedTodoItem";

function TodoItem(props: { item: TodoProps }) {
	if (props.item.isBeingEdited) {
		return <EditedTodoItem item={props.item} />;
	} else {
		return <NotEditedTodoItem item={props.item} />;
	}
}
export default TodoItem;
