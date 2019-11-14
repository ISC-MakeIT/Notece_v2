import React, { Component } from "react";

export interface style{
    id: any;
    src: any;
}

export interface styleprops {
    Navlist: style[];
}

class Tag extends Component<styleprops>{

    render() {
        const {Navlist} = this.props;


        return (
                Navlist.map(n => (
                    <Component id={n.id} src={n.src}></Component>
                ))
            );
    }
}


export default Tag;