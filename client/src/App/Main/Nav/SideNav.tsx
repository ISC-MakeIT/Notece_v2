import React from 'react';
import styled from 'styled-components';
import Tag from './Component/Tag'
import red from './Component/img/redTag.png';
import blue from './Component/img/blueTag.png';
import orange from './Component/img/orangeTag.png';
import yellow from './Component/img/yellowTag.png';

const SideNav: React.FC = () => {
  const Navlist: any[] = [
    {
      id: 'newnote-tag',
      src: 'img.src={red}',
    },
    {
      id: 'file-tag',
      src: 'img.src={yellow}',
    },
    {
      id: 'file-tag',
      src: 'img.src={blue}',
    },
    {
      id: 'profile-tag',
      src: 'img.src={orange}',
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