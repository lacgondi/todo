import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemButton,
	TextField,
} from "@mui/material";
import { TodoProps } from "./Interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckSharp, Close } from "@mui/icons-material";

const EditedTodoItem = (props: { item: TodoProps }) => {
	return (
		<ListItem
			key={props.item.id}
			secondaryAction={
				<>
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
				<TextField
					placeholder={props.item.editingInput}
					onChange={props.item.onEditChangeHandler}
				/>
				<IconButton
					edge="start"
					aria-label="accept"
					onClick={() => props.item.onAcceptEditHandler(props.item.id)}
				>
					<CheckSharp />
				</IconButton>
				<IconButton
					edge="start"
					aria-label="decline"
					onClick={() => props.item.onDeclineEditHandler(props.item.id)}
				>
					<Close />
				</IconButton>
			</ListItemButton>
		</ListItem>
	);
};

export default EditedTodoItem;
