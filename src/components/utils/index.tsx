import { Component } from "react";
// 高阶组件


const withWindowSize = (Comp) => {
    return props => {
        const windowSize = 1000
        return (
            <Comp size={windowSize} {...props}></Comp>
        )
    }
}


export default withWindowSize