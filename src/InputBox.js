import './InputBox.css';

function InputBox(props) {
	const id = props.id || 'SET THIS ID';
	const styles = props.style || null;
	return (
		<div className="inputbox" style={styles} id={id} >

		</div>
	);
}

export default InputBox;
