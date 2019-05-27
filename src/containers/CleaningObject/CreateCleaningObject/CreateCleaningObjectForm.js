import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import H1 from "../../../components/H1";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

export const CreateCleaningObjectForm = props => {
  const {
    values: {
      name,
      postcode,
      street,
      region,
      number,
      country,
      place,
      firstName,
      lastName,
      email,
      phone
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    isSubmitting,
    setFieldTouched
  } = props;
  const { t } = useTranslation();
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid item>
        <H1>Basic Information</H1>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={6}>
          <TextField
            required
            id="name"
            helperText={touched.name ? errors.name : ""}
            error={touched.name && Boolean(errors.name)}
            label={t("name")}
            value={name}
            onChange={change.bind(null, "name")}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            id="postcode"
            helpertext={touched.postcode ? errors.postcode : ""}
            error={touched.postcode && Boolean(errors.postcode)}
            label={t("postcode")}
            fullWidth
            value={postcode}
            onChange={change.bind(null, "postcode")}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            id="street"
            helpertext={touched.street ? errors.street : ""}
            error={touched.street && Boolean(errors.street)}
            label={t("street")}
            value={street}
            onChange={change.bind(null, "street")}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            id="region"
            helpertext={touched.region ? errors.region : ""}
            error={touched.region && Boolean(errors.region)}
            label={t("region")}
            fullWidth
            value={region}
            onChange={change.bind(null, "region")}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            id="number"
            helpertext={touched.number ? errors.number : ""}
            error={touched.number && Boolean(errors.number)}
            label={t("number")}
            value={number}
            onChange={change.bind(null, "number")}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <FormControl required fullWidth>
            <InputLabel htmlFor="country">{t("country")}</InputLabel>
            <Select
              id="country"
              helpertext={touched.country ? errors.country : ""}
              value={country}
              inputProps={{
                name: "country",
                id: "country"
              }}
              onChange={change.bind(null, "country")}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Viet Nam</MenuItem>
              <MenuItem value={2}>Duc</MenuItem>
              <MenuItem value={3}>Campuchia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            id="place"
            helpertext={touched.place ? errors.place : ""}
            error={touched.place && Boolean(errors.place)}
            label={t("place")}
            value={place}
            onChange={change.bind(null, "place")}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item>
        <H1>Contact Person</H1>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={6}>
          <TextField
            required
            id="firstName"
            helpertext={touched.firstName ? errors.firstName : ""}
            error={touched.firstName && Boolean(errors.firstName)}
            label={t("firstName")}
            value={firstName}
            onChange={change.bind(null, "firstName")}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            id="lastName"
            helperText={touched.lastName ? errors.lastName : ""}
            error={touched.lastName && Boolean(errors.lastName)}
            label={t("lastName")}
            fullWidth
            value={lastName}
            onChange={change.bind(null, "lastName")}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            id="email"
            helperText={touched.email ? errors.email : ""}
            error={touched.email && Boolean(errors.email)}
            label={t("email")}
            value={email}
            onChange={change.bind(null, "email")}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            id="phone"
            helpertext={touched.phone ? errors.phone : ""}
            error={touched.phone && Boolean(errors.phone)}
            label={t("phone")}
            fullWidth
            value={phone}
            onChange={change.bind(null, "phone")}
          />
        </Grid>
      </Grid>
      <br />
      <Grid item sm={6}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};
