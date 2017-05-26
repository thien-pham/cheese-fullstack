import React from 'react';
// import App from '../app';
import {connect} from 'react-redux';
import {GET_CHEESES, REQUEST_CHEESES,fetchCheeses} from '../actions';

export const CheeseList = (props) => {
    // const cheeseList = props.cheeses.map((cheese, index) => {
    //     <li key={index}>{cheese.type}</li>
    // })
    // componentDidMount() {
    //     props.dispatch(fetchCheeses());
    // }
         return(
            <ul>
                {props.cheeses.map((cheese, index) => 
                    <li key={index}>{cheese.type}</li>
                    )}
            </ul>
        );
   
}

const mapStateToProps = state => ({
    cheeses: state.cheeses.data
});

export default connect(mapStateToProps)(CheeseList);

