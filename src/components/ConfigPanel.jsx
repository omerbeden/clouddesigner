import {
  Autocomplete,
  Drawer,
  TextField,
  Box,
  Typography,
  IconButton,
  ClickAwayListener,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

function ConfigPanel({ selectedNode, onInputChange, drawerStatus, onClose }) {

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
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={() => {
        onClose();
      }}
    >
      <Drawer open={drawerStatus} anchor="right" variant="persistent">
        <Box
          sx={{
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "start",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onClose}
            edge="start"
          >
            <ArrowRight />
          </IconButton>

          <Typography variant="h6" gutterBottom>
            {selectedNode?.data.label}
          </Typography>
          <TextField
            key={selectedNode?.id}
            id="outlined-basic"
            label={"Resource name"}
            variant="outlined"
            name="resourceName"
            value={selectedNode?.data?.settings?.resourceName}
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
    </ClickAwayListener>
  );
}

export default ConfigPanel;
