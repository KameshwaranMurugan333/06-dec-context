import React, { Component } from "react";
import { CountContext, EmailContext } from "../contexts";

class MyClassComponent extends Component {
    static contextType = EmailContext
    constructor(props) {
        super(props);

        // State initialization
        this.state = { value: 0 }
        console.log("I am in constructor");
    }

    static getDerivedStateFromProps() {
        console.log("I am in getDerivedStateFromProps");
    }

    componentDidMount() {
        console.log("I am from componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("I am in shouldComponentUpdate");
        return true;
    }

    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState, state, props) {
        console.log("Executing getSnapshotBeforeUpdate");
        return { favoritecolor: "black", name: "Kamesh" };
    }

    // Updating
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Executing ComponentDidUpdate");
        console.log('snapshot:', snapshot)
        console.log('prevState:', prevState)
        console.log('prevProps:', prevProps)
    }

    componentWillUnmount() {
        console.log("I am in componentWillUnmount")
    }

    increment = () => {
        // State Updation
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        return <div>
            <h1>Class Component</h1>

            <h3>Count Context:</h3>
            <p>Count: {this.props.countContext.count}</p>

            <h3>Email Context:</h3>
            <p>Email: {this.props.emailContext.email}</p>
        </div>
    }
}

// MyClassComponent.contextType = CountContext

export default MyClassComponent;