import React , { Component } from 'react';
import marked from 'marked';
import { Input, Form, FormGroup, Label} from 'reactstrap';

class Markdown extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    text: ''
	};
	this.renderPreview = this.renderMarkdown.bind(this);
	this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
	this.setState({
	    text: event.target.value
	});
    }

    renderMarkdown() {
	let rawMarkup = marked(this.state.text, {sanitize: true});
	return { __html: rawMarkup };
    }
    
    render() {
	return(
	    <div className="row">
	      <div className="col-6">
		<Form>
		  <FormGroup row>
		    <div className="col">
		      <Input type="textarea" name="text" id="markdown-text" rows={15}
			     onChange={this.handleChange}/>
		    </div>
		  </FormGroup>
		</Form>
	      </div>
	      <div className="col-6 preview">
		<div  dangerouslySetInnerHTML={this.renderMarkdown()}>
		</div>
	      </div>
	    </div>
	);
    }
}

export default Markdown;
