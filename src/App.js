import React from 'react';
import './App.css';
import marked from 'marked';

class TextArea extends React.Component {
	render() {
		return (
			<div dangerouslySetInnerHTML={{__html: this.props.value}} />
		);
	}
}

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
      <div>
				<textarea onChange={this.handleChange} />
				<TextArea value={marked(this.state.value,{sanitize: true})} />
			</div>
      </>
    );
  }
}

export default NameForm;
