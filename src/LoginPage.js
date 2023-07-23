import './LoginPage.css';
import InputBox from './InputBox';
import InputWindow from './InputWindow'

function LoginPage(props) {
	return (
		<div className="LoginPage">
			<InputWindow/>
			<InputBox id="username"/>
			<InputBox id="username" styles={{top:50+"px"}}/>
		</div>
	);
}

export default LoginPage;
