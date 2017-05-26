import React from 'react';
// import App from '../app';
import {connect} from 'react-redux';
import {GET_CHEESES, REQUEST_CHEESES,fetchCheeses} from '../actions';

export class CheeseList extends React.Component {
    // const initialState = {
    //     data: [
    //     "Bath Blue",
    //     "Barkham Blue",
    //     "Buxton Blue"]
    // };
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }
    render(){
        const cheeseList = this.props.data.map((cheese, index) => {
        <li key={index}>{cheese}</li>
    })
        return(
            <ul>
                {cheeseList}
            </ul>
            );
    }
}
CheeseList.defaultProps = {
    data: [
        "Bath Blue",
        "Barkham Blue",
        "Buxton Blue"]
    
};

const mapStateToProps = state => ({
    cheeses: state.cheeses,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(CheeseList);
// export default connect(state => ({mapStateToProps}, {GET_CHEESES, REQUEST_CHEESES,fetchCheeses})(CheeseList));

