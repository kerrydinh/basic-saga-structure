import React, { Component } from 'react';
import history from '../../history';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const CaretIcon = styled.i`
    padding-left: 5px;
`;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  buildElementTree(items, previousRef, isContainer = true) {
    if (previousRef && previousRef.current) {
      previousRef.current.style.display = 'none';
    }

    return (
      <ul className={isContainer ? "sidebar navbar-nav nav-container" : "navbar-nav nav-container"} ref={previousRef}>
            {
          items.map((item, index) => {
            const currentItemRef = React.createRef();
            return (
              <li key={index.toString()} className="nav-item dropdown">
                <Link to={item.router ? item.router : ""} className={"nav-link" + (!isContainer ? " nav-link--child" : "")} href="" onClick={(e) => {
                  if (currentItemRef.current) {
                    e.preventDefault();
                    const displayValue = currentItemRef.current.style.display === 'none' ? 'block' : 'none';
                    currentItemRef.current.style.display = displayValue;
                  } else {
                    history.push(item.router);
                  }
                }}>
                  { item.icon && <FontAwesomeIcon icon={item.icon}/> } <span>{item.name}</span>
                  {(item.elements && item.elements.length) && <CaretIcon><FontAwesomeIcon icon={faCaretDown}/></CaretIcon>}
                </Link>
                {(item.elements && item.elements.length) && this.buildElementTree(item.elements, currentItemRef, false)}
              </li>
            )
          }
          )}
      </ul>
    );
  }

  render() {
    return (
      <div>
          {this.buildElementTree(this.props.items)}
      </div>
    );
  }

 
}

export default SideBar;