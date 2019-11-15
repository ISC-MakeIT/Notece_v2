import React from 'react';
import styled from 'styled-components';
import Tag from './Component/Tag'

const SideNav: React.FC = () => {
  const Navlist: any[] = [
    {
      id: 'newnote-tag',
      src: 'img/redTag.png',
    },
    {
      id: 'file-tag',
      src: 'img/yellowTag.png',
    },
    {
      id: 'file-tag',
      src: 'img/blueTag.png',
    },
    {
      id: 'profile-tag',
      src: 'img/orangeTag.png',
    },
  ]

  return (
    <Navstyle id="SideNav">
      <Tag Navlist={Navlist} />
    </Navstyle>
  );
}

//↓styled-component

const Navstyle = styled.nav`
`;



export default SideNav;