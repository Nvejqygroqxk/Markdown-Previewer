import React from 'react';
import './App.css';
import marked from 'marked';

class TextArea extends React.Component {
	render() {
		return (
      <>
			<div dangerouslySetInnerHTML={{__html: this.props.value}} />
      <div>{this.props.value}</div>
      </>
		);
	}
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "One  \nTwo  \nThree  \nFour"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <>
      <div>
				<textarea id="editor" onChange={this.handleChange} defaultValue={this.state.value}>
        </textarea>
				<TextArea id="preview" value={marked(this.state.value,{sanitize: true})} />
			</div>
      </>
    );
  }
}

export default NameForm;
