import React from 'react';
import App from './app';
import {connect} from 'react-redux';
import {GET_CHEESES, REQUEST_CHEESES,fetchCheeses} from './actions';

export function CheeseList(props){
    componentDidMount() {
        props.dispatch(fetchCheeses());
    }
         return(
            <ul>
                {this.props.cheeses.map((cheese, index) => 
                    <li key={index}>{cheese.type}</li>
                    )}
            </ul>
        );
   
}

const mapStateToProps = state => ({
    cheeses: state.cheeses.data
});

export default connect(mapStateToProps)(CheeseList);

