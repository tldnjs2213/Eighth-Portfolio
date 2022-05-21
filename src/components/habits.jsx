import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
	constructor(props) {
		super(props);
	}
	handleIncrement = (habit) => {
		this.props.onIncrement(habit);
	};
	handleDecrement = (habit) => {
		this.props.onDecrement(habit);
	};
	handleDelete = (habit) => {
		this.props.onDelete(habit);
	};
	handleAdd = (name) => {
		this.props.onAdd(name);
	};
	render() {
		return (
			<div className="habitContainer">
				<HabitAddForm onAdd={this.handleAdd} />
				<ul className="ulHabitsContainer">
					{this.props.habits.map((habit) => (
						<Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
					))}
				</ul>
				<button className="buttonHabitReset" onClick={this.props.onReset}>
					ResetAll
				</button>
			</div>
		);
	}
}

export default Habits;
