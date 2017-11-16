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
            <form className='mtop34'>
              <div className='input-box-login mui-row mleft0'>
                <div className='mui-textfield mui-textfield--float-label'>
                  <i className='top-15 material-icons color-grey-2 mtop16 mui-col-xs-2'>account_circle</i>
                  <input id='email-field' name='email' type='text' className='mtop14 mui--is-empty mui--is-dirty width-80persen bg-color-white' />
                  <label className='login-label mtop14 mui-col-xs-12 mui-col-xs-offset-2 mui-col-md-12 mui-col-md-offset-2 text-left no-pleft'>No. HP atau Email</label>
                </div>
              </div>
              <button type='submit' id='btnSubmit' className='login-lanjut-btn btn-block primary-white btn-login-registration'>MULAI BERJUALAN</button>
            </form>
          </div>
        </div>
      </div>  
    )
  }
}