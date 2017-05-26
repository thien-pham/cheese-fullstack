import React from 'react';
import App from './app';
import {connect} from 'react-redux';

export class CheeseList extends React.Component (props){
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }
    render() {
         return(
            <ul>
                {this.props.cheeses.map((cheese, index) => 
                    <li key={index}>{cheese.type}</li>
                    )}
            </ul>
        );
    }
   
}

const mapStateToProps = state => ({
    cheeses: state.cheeses.data
});

export default connect(mapStateToProps)(CheeseList);

