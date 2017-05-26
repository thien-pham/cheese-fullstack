import React from 'react';
// import App from '../app';
import {connect} from 'react-redux';
import {GET_CHEESES, REQUEST_CHEESES,fetchCheeses} from '../actions';

export class CheeseList extends React.Component {
    const initialState = {
        data: [
        "Bath Blue",
        "Barkham Blue",
        "Buxton Blue"]
    };
    // componentDidMount() {
    //     props.dispatch(fetchCheeses());
    render(){
        const cheeseList = this.props.cheeses.map((cheese, index) => {
        <li key={index}>{cheese.type}</li>
    })
        return(
            <ul>
                {cheeseList}
            </ul>
            );
    }
}

const mapStateToProps = state => ({
    cheeses: state.cheeses.data,
    loading: state.loading,
    error: state.error
});

export default connect(state => ({mapStateToProps}, {GET_CHEESES, REQUEST_CHEESES,fetchCheeses})(CheeseList));

