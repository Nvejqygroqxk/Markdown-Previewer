import React from 'react';
import './App.css';
import marked from 'marked';

class MarkdownExample extends React.Component {
  getMarkdownText() {
    var rawMarkup = marked('This is _Markdown_.', {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} />
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
      <form >
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
      <div>{this.state.value}
        {marked('>**lol**')}
        <strong>lol</strong>
      </div>
      
      </>
    );
  }
}

export default NameForm;
