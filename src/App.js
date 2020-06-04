import React from 'react';
import './App.css';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <>
      <form >
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
      <div>{this.state.value}</div>
      </>
    );
  }
}

export default NameForm;
