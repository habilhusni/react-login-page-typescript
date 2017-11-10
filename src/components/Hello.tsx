// Container Component
import * as React from 'react';

const logo = require('../../public/img/ic_logo_kudo_white.png');

export interface HelloProps { compiler: string; framework: string; }

const styles = {
  textTitle: {
    marginTop: 34,
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: 'Open Sans, sans-serif',
    textAlign: 'left',
    color: '#FFFFFF'
  }
}

// 'HelloProps' describe the shape of the props
// State is never set so we use the '{}' type
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div className='container-mobile'>
        <div className='login-container'>
          <div className='login-wrapper'>
            <img src={logo} alt='logoKudo'/>
            <p style={styles.textTitle}>
              Masukkan nomor HP atau email Anda untuk mulai menggunakan Kudo
            </p>
          </div>
        </div>
      </div>
    )
  }
}