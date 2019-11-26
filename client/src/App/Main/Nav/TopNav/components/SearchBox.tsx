import React from 'react';
import { ListItem, TextHolder, SearchButton } from './styled';

const SearchBox = () => {
    return (
        <ListItem>
            <TextHolder type={'text'} placeholder={'search'} />
            <SearchButton></SearchButton>
        </ListItem>
    );
};

export { SearchBox };
