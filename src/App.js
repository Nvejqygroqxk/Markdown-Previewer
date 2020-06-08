import React from 'react';
import './App.css';
//import marked from 'marked';

const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, language) {
    const hljs = require('highlight.js');
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

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
    this.state = {value: "h1\n==\nh2\n--\n[Link]\n\n`Inline code`\n\n[Link]: https://github.com/markedjs/marked/\n```\nCode block\n```\n* List\n* List\n>Blockquote\n>Blockquote\n\n![Image](https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)\n\n**Bold**"};
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
