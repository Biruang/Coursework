import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank } from '@fortawesome/free-solid-svg-icons';
import './userMenu.css';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="userMenu btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faMehBlank} className="userMenu-icon" />
        </button>
        <nav className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default UserMenu;
