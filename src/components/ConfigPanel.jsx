import {
  Autocomplete,
  Drawer,
  TextField,
  Box,  
  Typography,
} from "@mui/material";

function ConfigPanel({
  nodeSettings,
  selectedNode,
  onInputChange,
  drawerStatus,
  onClose,
}) {
  const countries = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
    {
      code: "AG",
      label: "Antigua and Barbuda",
      phone: "1-268",
    },
  ];

  return (
    <Drawer open={drawerStatus} onClose={onClose} anchor="right">
      <Box
        sx={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {selectedNode?.data.label}
        </Typography>
        <TextField
          id="outlined-basic"
          label={"Resource name"}
          variant="outlined"
          name="resourceName"
          value={nodeSettings.resourceName}
          onChange={onInputChange}
        />
        <Autocomplete
          autoHighlight
          getOptionLabel={(option) => option.label}
          options={countries}
          sx={{ width: 300 }}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...optionProps}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            );
          }}
          renderInput={(params) => <TextField {...params} label="Region" />}
        ></Autocomplete>
      </Box>
    </Drawer>
  );
}

export default ConfigPanel;
