import React, { useState } from 'react';
import { NavWrapper, ListWrapper } from './components/styled';
import { TopNavItem } from './components/TopNavItem';
import { SearchBox } from './components/SearchBox';

const TopNav = (prop: string) => {
    // SideNavのタグ押したときに色情報受けとってTopNavに反映させたい為のprop！！！！
    return (
        <NavWrapper>
            <ListWrapper>
                <SearchBox></SearchBox>
                <TopNavItem
                    titles={['title1', 'title2', 'title3']}
                    urls={['url1', 'url2', 'url3']}
                />
            </ListWrapper>
        </NavWrapper>
    );
};

export { TopNav };
