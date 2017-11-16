import * as React from 'react';

const styles = {
  
}

export interface NavbarProps {
  some: string
}

export default class Navbar extends React.Component <NavbarProps, {}> {
  render() {
    return (
      <div style={styles}>Hello navbar</div>
    );
  }
} 