import React, {Component} from 'react';
import Quotes from './quotes';
import { connect } from 'react-redux';
import { fetchQuotes } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
	quotes: state.quotes
    };
};

const mapDispatchToProps = dispatch => ({
    fetchQuotes: () => dispatch(fetchQuotes())
});

class Main extends Component {
    
    componentDidMount() {
    	this.props.fetchQuotes();
    }
    
    render() {
	return (
	    <div className="container quotes-container">
	      <Quotes quotes={this.props.quotes.quotes}
		      errmess={this.props.quotes.errMess}/>
	    </div>
	);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
