import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


// Container type of component
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 15" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store results</button>
                <ul>
                    {
                        this.props.storedResults.map(storedResult => (
                            <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapDisptachToProps = dispatch => {
    // dispatch is a redux function passed as an argument and it will call the dispatch function of redux on the store
    // return an object that will hold some properties which hold reference to some functions that will dispatch some actions
    return {
        //mapping of prop property to an anonymous function
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 15}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 15}),
        onStoreResult: result => dispatch({type: 'STORE_RESULT', result: result}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElementId: id})
    };
}

const mapStateToProps = state => {
    // here we define prop names initialized with the slice of the state we are interested
    // Redux will handle passing the following object as part of the props to our component
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

// connect is a higher order component 
// we need to specify which part (slice) of the global application state is relevant to our component
// and which actions we want to dispatch from our component
export default connect(mapStateToProps, mapDisptachToProps)(Counter);

// different variations
//export default connect(mapStateToProps)(Counter);
//export default connect(null, mapDisptachToProps)(Counter);