import React from 'react';
import styled from 'styled-components';
import contents from './Component/SearchBox';
import SearchButton from './Vector.png';

class Root extends React.Component {
    render() {
        return (
            <Wrapper>
                <form>
                    SearchBox= {}
                    button={<img src={SearchButton} alt="" />}
                </form>
                contents1={'グループ'}
                contents2={'チャンネル'}
                contents3={'コメント'}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div``;

export default Root;
