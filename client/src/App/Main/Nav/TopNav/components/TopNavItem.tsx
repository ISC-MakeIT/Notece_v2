import React, { useState } from 'react';
import { ListItem, Link } from './styled';

const TopNavItem = (prop: any) => {
    return prop.titles.map((title: string, index: number) => {
        return (
            <ListItem key={index}>
                <Link href={prop.urls[index]}>{title}</Link>
            </ListItem>
        );
    });
};

export { TopNavItem };
