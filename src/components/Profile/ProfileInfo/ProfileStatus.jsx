import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }
  activateEditMode = () => {
    debugger;
    console.log("this:", this);
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
  this.setState({
    editMode: false
  })
  }
  render() {
    return (
      <div>
        {!this.state.editMode &&
            <div>
              <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>}
        {this.state.editMode &&
            <div>
              <input onBlur={this.deactivateEditMode.bind(this)}
                     autoFocus={true}
                     value={this.props.status}/>
            </div>}
      </div>
    )
  }
}

export default ProfileStatus;
