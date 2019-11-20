import React from 'react';
import styled from 'styled-components';
import { TopNavItem } from './Component/TopNavItem';
import { SearchBoxItem } from './Component/SearchBox';

const TopNav = () => {
    return (
        <Wrapper>
            <SearchBoxItem />
            <TopNavItem
                urls={[
                    'http://unko.com',
                    'http://yahooo.unko',
                    'http://make.it'
                ]}
                titles={['グループ', 'チャンネル', 'コメント']}
            />
        </Wrapper>
    );
};

const Wrapper = styled.section``;

export { TopNav };
