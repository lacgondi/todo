import { Button, TextField } from "@mui/material";

const AddItemInput = (props: {
	value: string;
	valueOnChangeHandler: (
		e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	onAddHandler: () => void;
}) => {
	return (
		<div>
			<TextField
				id="outlined-basic"
				label="Type what you need to do"
				variant="outlined"
				value={props.value}
				onChange={props.valueOnChangeHandler}
			/>
			<Button variant="contained" onClick={props.onAddHandler}>
				Add Todo
			</Button>
		</div>
	);
};

export default AddItemInput;
