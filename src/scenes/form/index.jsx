import { Box, Button, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import InputAdornment from '@mui/material/InputAdornment';
// export default function InputAdornments() {
//   const [showPassword, setShowPassword] = React.useState(false);
// }
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Company Creation" subtitle="Create Company" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
 
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                 
                fullWidth
                variant="filled"
                type="text"
               label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="Name"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}   
              />
            
             <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
             <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contactno"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mobile Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="mobileno"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fax Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="fax_number"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="Pin code"
                label="Pin Code :"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="pincode"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address :"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Currency"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="currency"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Website"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="website"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Books and Financial Year Details :"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="books_financial_year_details"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                  <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Financial Year begins From :"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="financial_year_begins_from"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                  <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Books beginning from  :"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="books_beginning_from"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
          {/* </Box>
          <Box> */}
          <div></div><br></br>
              <h1>Base Currency Information</h1> <div></div><br></br>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Base Currency Symbol  :"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="basecurrencycymbol"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Formal Name  :"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="formalname"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Suffix Symbol to amount  :"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="suffixsymboltoamount"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Add space between amount and symbol:"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="add_space_between_amount_and_symbol"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                  <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Show amount in millions:"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="Show_amount_in_millions"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Number of decimal spaces:"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="no_of_decimal_spaces"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                   <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Word Representing amount after decimal:"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="word_representing_amount"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
                   <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Number of decimal places for amount in words:"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="No_of_decimal_places"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />

  </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
               Submit
              </Button>
            </Box>
          </form>
          
        )}
      </Formik>
    
    </Box>
    
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
