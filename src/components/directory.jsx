import React from "react";
import styled from "styled-components";
import MenuDashboardItem from "./menu-dashboard-item";

const DirectoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 7rem;
`;

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
        sections: [
            {
                title: "caps",
                imageURL: "https://images.unsplash.com/photo-1523480773376-9d46ea986a7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                id: 1
            },
            {
                title: "sets",
                imageURL: "https://images.unsplash.com/photo-1592878858320-cec76c56da82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                id: 2
            },
            {
                title: "jeans",
                imageURL: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                id: 3
            },
            {
                title: "shoes",
                imageURL: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                id: 4
            },
            {
                title: "jackets",
                imageURL: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                id: 5
            },
            {
                title: "suits",
                imageURL: "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                id: 5
            },
            {
                title: "pijamas",
                imageURL: "https://images.unsplash.com/flagged/photo-1553802922-28e2f719977d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                id: 6
            }
        ]
    }
  };

  render() {
     return (
        <DirectoryWrapper>
          {
              this.state.sections.map(({title, imageURL, id}) => (
                  <MenuDashboardItem key={id} title={title} imageURL={imageURL}/>
              ))}
        </DirectoryWrapper>
     )
  }
}


export default Directory;