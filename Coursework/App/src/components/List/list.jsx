import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './list.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen ? true : false,
      isLoading: this.props.isLoading ? true : false
    };
  }

  D = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    var header = (
      <header
        onClick={this.D}
        className="shadow-sm list-group-item list-group-item-action"
      >
        <h5>{this.props.name}</h5>
        <FontAwesomeIcon
          icon={this.state.isOpen ? faAngleDown : faAngleRight}
        />
      </header>
    );

    var list = this.props.list.map(element => {
      return (
        <li
          key={element.id}
          className="list-group-item list-group-item-action text-truncate"
          onClick={() => this.props.clickFunction(element.id)}
        >
          {element.name}
        </li>
      );
    });
    if (this.state.isLoading) {
      list = null;
      header = (
        <header className="shadow-sm list-group-item list-group-item-action">
          <h5>{this.props.name}</h5>
          <li className="spinner-border spinner-border-sm">
            <span className="sr-only">Loading...</span>
          </li>
        </header>
      );
    }

    var body = this.state.isOpen ? (
      <ul className="list-group list-group-flush">{list}</ul>
    ) : (
      ''
    );

    return (
      <div className="listComponent">
        {header}
        {body}
      </div>
    );
  }
}

export default List;
