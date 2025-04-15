import { Typography, Container, Box, TextField, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import backgroundImageUrl from '../image/orignal.jpg';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          'service_bko45nn',
          'template_kuu4qem',
          {
            to_name: 'IYEF',
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          'Gpm47Cw5Xb3Vf2MI3'
        )
        .then((result) => {
          console.log('Email successfully sent:', result.text);
          alert('Message sent successfully!');
          resetForm();
        })
        .catch((error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send the message, please try again.');
        });
    },
  });

  return (
    <Container sx={{ p: { xs: 2, md: 4 }, maxWidth: 'lg' }}>
      <Box
        sx={{
          height: { xs: '200px', sm: '300px' },
          width: '100%',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: '40%',
          backgroundPosition: 'center',
          borderRadius: 2,
          backgroundRepeat: 'no-repeat',
          mb: 4,
        }}
      />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <EmailIcon fontSize="large" color="primary" />
            <Typography variant="h6">Email</Typography>
            <Typography variant="body2">iyefofficial@gmail.com</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <PhoneIcon fontSize="large" color="primary" />
            <Typography variant="h6">Phone</Typography>
            <Typography variant="body2">+923445254658</Typography>
            <Typography variant="body2">+923450881428</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <LocationOnIcon fontSize="large" color="primary" />
            <Typography variant="h6">Address</Typography>
            <Typography variant="body2">IQRA YOUTH EDUCATIONAL FOUNDATION</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <ScheduleIcon fontSize="large" color="primary" />
            <Typography variant="h6">Services</Typography>
            <Typography variant="body2">24/7</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          Send us a Message
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          sx={{ mt: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{
            mt: 2,
            py: 1.5,
            fontSize: '1rem',
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;