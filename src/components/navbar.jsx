import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
	render() {
		return (
			<header className="headerNavbarContainer">
				<i className="fas fa-leaf iNavbarLogo"></i>
				<span className="spanNavbarName">Habit Tracker</span>
				<span className="spanTotalCount">{this.props.totalCount}</span>
			</header>
		);
	}
}

export default Navbar;
