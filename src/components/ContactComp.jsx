import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Button } from '@mui/material';


const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

  const ContactComp = () => {
    const outerTheme = useTheme();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
        email:'',
	});


    const[formError, setFormError] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email) {
            setFormError('Please fill in all required fields.');
            return;
          }

		console.log(formData);
        setFormData({ firstName: '', lastName: '', email: '' });
        setFormError('');
	};

  return (
    <form onSubmit={handleSubmit}>
    <Container>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr 1fr' },
          gap: 2,
          
        }}
      >
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField label="First Name" type= 'firstName'value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} name='firstName' variant="filled" helperText="Please enter your First Name" required/>
          <TextField label="Last Name" type= 'lastName' value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} name='lastName' variant="filled"  helperText="Please enter your Last Name" required/>
          <TextField label="Email" type= 'email' value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} name='email' variant="filled" helperText="Please enter your Email"  required/>
        </ThemeProvider>
      </Box>
      <div style={{display:'flex', justifyContent:'center'}}>
          <Button variant="contained" type='submit'>SUBMIT</Button>
          </div>
      <Container>
        <div style={{marginTop:'40px'}}>
          We deeply value our customers and their satisfaction is our top priority. At [Your Company Name], we believe in fostering strong relationships and open lines of communication. We genuinely love to hear from you and are always eager to assist you in any way we can. Whether you have a question, feedback, or require support, we are here to lend a helping hand.
          Our dedicated team is committed to providing excellent customer service and ensuring that your needs are met. We understand that every customer is unique, and we strive to tailor our assistance to your specific requirements. Whether you prefer to reach out via email, phone, or through our website, we are more than willing to connect with you using your preferred mode of communication.
          We encourage you to share your thoughts, suggestions, or concerns with us. Your feedback is invaluable, as it helps us continuously improve our products and services. We are eager to listen to your experiences, address any issues you may encounter, and exceed your expectations.
          Please do not hesitate to contact us at any time. Our friendly and knowledgeable customer support team is ready to assist you and provide the necessary guidance. We truly value your trust in us and we are committed to making your interaction with [Your Company Name] a positive and enjoyable one.
          Thank you for choosing [Your Company Name]. We look forward to communicating with you and providing the assistance you need, as we work together to meet your requirements and ensure your satisfaction.
        </div>
       </Container>
    </Container>
    {formError && <p>{formError}</p>}
    </form>
  );
}

export default ContactComp