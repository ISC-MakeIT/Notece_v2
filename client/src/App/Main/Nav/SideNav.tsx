import React from 'react';
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
    <nav id="SideNav">
      <Tag Navlist={Navlist} />
    </nav>
  );
}

export default SideNav;