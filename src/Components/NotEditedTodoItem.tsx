import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { TodoProps } from "./Interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

const NotEditedTodoItem = (props: { item: TodoProps }) => {
	return (
		<ListItem
			key={props.item.id}
			secondaryAction={
				<>
					<IconButton
						edge="start"
						aria-label="delete"
						onClick={() => props.item.onModifyHandler(props.item.id)}
					>
						<Edit />
					</IconButton>
					<IconButton
						edge="start"
						aria-label="delete"
						onClick={() => props.item.onDeleteHandler(props.item.id)}
					>
						<DeleteIcon />
					</IconButton>
					<Checkbox
						edge="end"
						onChange={() => props.item.onCheckHandler(props.item.id)}
						value={props.item.isDone}
					/>
				</>
			}
			disablePadding
		>
			<ListItemButton>
				<ListItemText id={"" + props.item.id} primary={props.item.name} />
			</ListItemButton>
		</ListItem>
	);
};

export default NotEditedTodoItem;
