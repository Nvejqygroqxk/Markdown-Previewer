import React from 'react';
import './App.css';
import marked from 'marked';

class TextArea extends React.Component {
	render() {
		return (
      <>
			<div id="preview" dangerouslySetInnerHTML={{__html: this.props.value}} />
      </>
		);
	}
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "One\n==\nTwo\n--\n[Three]\n\n`Four`\n\n[Three]: https://github.com/markedjs/marked/\n```\nFive\n```\n* Six\n* Seven\n>Eight\n>Nine\n\n![Google Logo](http://www.google.com/images/errors/logo_sm.gif)\n\n**Ten**"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
				<textarea id="editor" onChange={this.handleChange} defaultValue={this.state.value}>
        </textarea>
          <TextArea value={marked(this.state.value,{sanitize: true})} />
      </div>
    );
  }
}

export default NameForm;
