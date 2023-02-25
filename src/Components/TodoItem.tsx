import {Checkbox, IconButton, ListItem, ListItemButton, ListItemText, TextField} from "@mui/material";
import {TodoHandler} from '../Interfaces'
import DeleteIcon from '@mui/icons-material/Delete';
import {CheckSharp, Close, Edit, ImportContactsOutlined} from "@mui/icons-material";


function TodoItem(props: { item: TodoHandler }) {
    if (props.item.isBeingEdited) {
        return (<ListItem
            key={props.item.id}
            secondaryAction={
                <>
                    <IconButton edge="start" aria-label="delete"
                                onClick={() => props.item.onDeleteHandler(props.item.id)}>
                        <DeleteIcon/>
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
                <TextField placeholder={props.item.editingInput} onChange={props.item.onEditChangeHandler}/>
                <IconButton edge="start" aria-label="accept"
                            onClick={() => props.item.onAcceptEditHandler(props.item.id)}>
                    <CheckSharp/>
                </IconButton>
                <IconButton edge="start" aria-label="decline"
                            onClick={() => props.item.onDeclineEditHandler(props.item.id)}>
                    <Close/>
                </IconButton>
            </ListItemButton>
        </ListItem>)
    } else {

        return (
            <ListItem
                key={props.item.id}
                secondaryAction={
                    <>
                        <IconButton edge="start" aria-label="delete"
                                    onClick={() => props.item.onModifyHandler(props.item.id)}>
                            <Edit/>
                        </IconButton>
                        <IconButton edge="start" aria-label="delete"
                                    onClick={() => props.item.onDeleteHandler(props.item.id)}>
                            <DeleteIcon/>
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
                    <ListItemText id={'' + props.item.id} primary={props.item.name}/>
                </ListItemButton>
            </ListItem>
        );
    }

}

export default TodoItem