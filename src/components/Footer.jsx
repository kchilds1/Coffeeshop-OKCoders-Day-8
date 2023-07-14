import {
    FooterClientList,
    FooterClientItem,
    FooterClient,
  } from '@axa-fr/react-toolkit-layout-footer-client';
  import '@axa-fr/react-toolkit-layout-footer-client/dist/af-footer-client.css';
  import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
      <MDBFooter bgColor='light' className='text-center text-lg-left'style={{
        position:'fixed',
        left:'0',
        bottom: '0',
        width: '100%',
        zIndex: '9999'}}>
        <div className='text-center p-3' style={{ backgroundColor: '#1976d2', color:'#fff',display:'flex', justifyContent:'center'}}>
          &copy; {new Date().getFullYear()} Kenneth Childs All Rights Reserved
        </div>
      </MDBFooter>
    );
  }
  export default Footer;