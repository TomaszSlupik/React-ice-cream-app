import React from "react";
import { Component } from "react";
import { PageButton } from "./styled/PageButton";

export default class Button extends Component {
render () {
    return (
        <PageButton onClick={this.props.onClick}>
            {this.props.children}
        </PageButton>
        )
}
}