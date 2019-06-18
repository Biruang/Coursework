import React from 'react';
import './tasksControl.css';
import BtnGroup1 from './btnGroup1/btnGroup1';
import BtnSelect from './btnSelect';
import BtnGroup2 from './btnGroup2/btnGroup2';

class TasksButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var body;
    if (this.props.selected.length > 0) {
      body = (
        <React.Fragment>
          <BtnSelect />
          <BtnGroup1 />
          <BtnGroup2 />
        </React.Fragment>
      );
    } else {
      body = <BtnSelect />;
    }
    return <div className="btn-toolbar">{body}</div>;
  }
}

export default TasksButtons;
