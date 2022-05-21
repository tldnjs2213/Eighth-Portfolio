import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
	constructor(props) {
		super(props);
		this.formRef = React.createRef();
		this.inputRef = React.createRef();
	}
	onSubmit = (event) => {
		event.preventDefault();
		const name = this.inputRef.current.value;
		name && this.props.onAdd(name);
		this.formRef.current.reset();
	};
	render() {
		return (
			<form ref={this.formRef} className="formHabitAddContainer" onSubmit={this.onSubmit}>
				<input ref={this.inputRef} type="text" className="inputHabitAdd" maxLength="9" placeholder="Habit" />
				<button className="buttonHabitAdd">Add</button>
			</form>
		);
	}
}

export default HabitAddForm;
