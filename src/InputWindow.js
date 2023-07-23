import InputBox from './InputBox';

function InputWindow(props) {
	const id = props.id || 'SET THIS ID';
	const styles = props.style || null;
	return (
		<div className="inputwindow" style={styles} id={id} >
			<InputBox id="username"/>
			<InputBox id="password" styles={{top:49+"px"}}/>
		</div>
	);
}

export default InputWindow;

