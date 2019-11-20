import React from 'react';
import { rename } from 'fs';
import { render } from 'react-dom';
import styled from 'styled-components';

function contents() {
    return (
        <div>
            <form>
                <input type="text" />
                <img src="Vector.png" alt="検索" />
            </form>
            <a href="#">グループ</a>
            <a href="#">チャンネル</a>
            <a href="#">コメント</a>
        </div>
    );
}

const searchBox = styled.input`
    float: left;
    border-radius: 45px;
    background-size: contain;
    padding: 0.7em;
    width: 180px;
`;
const button = styled.img`
    top: 1em;
    height: 1.5em;
    position: absolute;
    left: 1em;
    &:hover {
        color: black;
    }
`;
const a = styled.a`
    float: left;
    border-left: solid 1px black;
    position: relative;
    display: block;
    width: 150px;
    padding: 0.7em;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    color: dimgrey;
    background: darkgray;
    transition: 0.4s;
`;

//ReactDOM.render(contents, document.getElementById("root"));
export default contents;
