import React, { PureComponent } from 'react';

class Habit extends PureComponent {
	constructor(props) {
		super(props);
	}
	handleIncrement = () => {
		this.props.onIncrement(this.props.habit);
	};
	handleDecrement = () => {
		this.props.onDecrement(this.props.habit);
	};
	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};
	render() {
		const { name, count } = this.props.habit;
		return (
			<li className="liHabitContainer">
				<div className="divHabitContainer">
					<span className="spanHabitName">{name}</span>
					<span className="spanHabitCount">{count}</span>
				</div>
				<div className="divButtonContainer">
					<button className="buttonPlusContainer" onClick={this.handleIncrement}>
						<i className="fas fa-plus-square iPlusIcon"></i>
					</button>
					<button className="buttonMinusContainer" onClick={this.handleDecrement}>
						<i className="fas fa-minus-square iMinusIcon"></i>
					</button>
					<button className="buttonDeleteContainer" onClick={this.handleDelete}>
						<i className="fas fa-trash iTrashIcon"></i>
					</button>
				</div>
			</li>
		);
	}
}

export default Habit;
