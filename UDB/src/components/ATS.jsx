import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Box, TextField, Button, Typography, Grid, Container } from "@mui/material";

const validationSchema = Yup.object({
    PageAccessToken: Yup.number().required("Roll no is required"),
    UserToken: Yup.number().min(0, "Minimum 0").max(100, "Maximum 100"),
    apptoken: Yup.number().min(0, "Minimum 0").max(100, "Maximum 100"),
  
});

const ArtsResult = () => {
  const location = useLocation();
  const { userId } = location.state || {};

  const formik = useFormik({
    initialValues: {
        PageAccessToken: "",
        UserToken: "",
        apptoken: "",
     
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      

        const response = await axios.post(
          `http://localhost:8000/user/marksheet/${userId}`,
        
        );

        console.log("Response:", response.data);
        alert("Tokens submitted successfully!");
        resetForm();
      } 
    
  });

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          mt: 2,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Add the Tokens in Respective Fields 
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            {Object.keys(formik.initialValues).map((field) => (
              <Grid item xs={12} sm={6} key={field}>
                <TextField
                  fullWidth
                  id={field}
                  name={field}
                  label={field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                  type={field === "EntryYear" ? "number" : "number"}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ marginTop: 3, textAlign: "center" }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ArtsResult;