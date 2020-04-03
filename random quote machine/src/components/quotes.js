import React, { Component } from 'react';

class Quotes extends Component {

    generatequote(quotes) {
	if(quotes.length !== 0) {
	    let num = Math.floor(Math.random() * quotes.length) % quotes.length;
	    let quote = quotes[num];
	    return ({
		quote: quote.quote,
		author: quote.author
	    });
	} else {
	    return({
		quote: '',
		author: ''
	    });
	}
    }
    
    render() {
	if(this.props.errmess) {
	    return (
		<div className="quotes">
		  <div className="row">
		    <div className="col-12 text-center">
		      <i className="fa fa-quote-left fa-lg"></i>
		      <span className="quote">
			{this.props.errmess} </span>
		      <i className="fa fa-quote-right fa-lg"></i>
		    </div>
		  </div>
		</div>
	    );
	}
	return(
	    <div className="quotes">
	      <div className="row">
		<div className="col-12 text-center">
		  <i className="fa fa-quote-left fa-lg"></i>
		  <span className="quote">
		    {this.generatequote(this.props.quotes).quote} </span>
		  <i className="fa fa-quote-right fa-lg"></i>
		</div>
	      </div>
	      <div className="row">
		<div className="col text-right">
		  <p className="author">
		    -- {this.generatequote(this.props.quotes).author}
		  </p>
		</div>
	      </div>
	    </div>
	);
    }
}

export default Quotes;
