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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";

function ConfigPanel({
  selectedNode,
  setSelectedNode,
  onInputChange,
  drawerStatus,
  onClose,
}) {
  const regions = [
    { name: "US East (N. Virginia)", label: "eu-east-1" },
    { name: "US East (Ohio)", label: "us-east-2" },
    { name: "US East (N. Virginia)", label: "us-east-1" },
    { name: "US West (N. California)", label: "us-west-1" },
    { name: "US West (Oregon)	", label: "us-west-2" },
    { name: "Africa (Cape Town)", label: "af-south-1" },
    { name: "Asia Pacific (Hong Kong)", label: "ap-east-1" },
    { name: "Asia Pacific (Hyderabad)", label: "ap-south-2" },
    { name: "Asia Pacific (Jakarta)", label: "ap-southeast-3" },
    { name: "Asia Pacific (Malaysia)", label: "ap-southeast-5" },
    { name: "Asia Pacific (Melbourne)", label: "ap-southeast-4" },
    { name: "Asia Pacific (Mumbai)", label: "ap-south-1" },
    { name: "Asia Pacific (Osaka)", label: "ap-northeast-3" },
    { name: "Asia Pacific (Seoul)", label: "ap-northeast-2" },
    { name: "Asia Pacific (Singapore)", label: "ap-southeast-1" },
    { name: "Asia Pacific (Sydney)", label: "ap-southeast-2" },
    { name: "Asia Pacific (Tokyo)", label: "ap-northeast-1" },
    { name: "Canada (Central)", label: "ca-central-1" },
    { name: "Canada West (Calgary)", label: "ca-west-1" },
    { name: "Europe (Frankfurt)", label: "eu-central-1" },
    { name: "Europe (Ireland)", label: "eu-west-1" },
    { name: "Europe (London)", label: "eu-west-2" },
    { name: "Europe (Milan)", label: "eu-south-1" },
    { name: "Europe (Paris)", label: "eu-west-3" },
    { name: "Europe (Spain)", label: "eu-south-2" },
    { name: "Europe (Stockholm)", label: "eu-north-1" },
    { name: "Europe (Zurich)", label: "eu-central-2" },
    { name: "Israel (Tel Aviv)", label: "il-central-1" },
    { name: "Middle East (Bahrain)", label: "me-south-1" },
    { name: "Middle East (UAE)", label: "me-central-1" },
    { name: "South America (São Paulo)", label: "sa-east-1" },
    { name: "AWS GovCloud (US-East)", label: "us-gov-east-1" },
    { name: "AWS GovCloud (US-West)", label: "us-gov-west-1" },
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
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
          </Box>

          {Object.keys(selectedNode?.data?.settings ?? "").map(
            (name, index) => {
              if (name === "region") {
                return (
                  <Autocomplete
                    disablePortal
                    key={selectedNode?.id.concat(index)}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    options={regions}
                    onChange={(event, newValue) => {
                      onInputChange(newValue);
                      setSelectedNode((prevNode) => ({
                        ...prevNode,
                        data: {
                          ...prevNode.data,
                          settings: {
                            ...prevNode.data.settings,
                            region: newValue,
                          },
                        },
                      }));                  
                    }}
                    sx={{ width: 300 }}
                    value={selectedNode?.data?.settings[name]?.value}
                    renderOption={(props, option) => {
                      const { key, ...optionProps } = props;
                      return (
                        <Box
                          key={key}
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...optionProps}
                        >
                          {option.name} ({option.label})
                        </Box>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label={name} />
                    )}
                  ></Autocomplete>
                );
              } else if (
                selectedNode?.data?.settings[name].elementType === "radio"
              ) {
                const obj = selectedNode?.data?.settings[name];
                const selectedName = "selected".concat(name).toString();

                return (
                  <div key={selectedNode?.id.concat(index)}>
                    <FormLabel key={"demo-row-radio-buttons-group-label"}>
                      {name}
                    </FormLabel>

                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name={selectedName}
                      onChange={(e, v) => {
                        onInputChange(e);
                        setSelectedNode((prevNode) => ({
                          ...prevNode,
                          data: {
                            ...prevNode.data,
                            settings: {
                              ...prevNode.data.settings,
                              selectedName: e.target.value,
                            },
                          },
                        }));
                      }}
                      value={selectedNode?.data?.settings[selectedName]?.value}
                      key={selectedNode?.id.concat(index)}
                    >
                      {obj.options.map((option, index2) => (
                        <FormControlLabel
                          key={selectedNode?.id.concat(index * index2 + 1)}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </div>
                );
              } else if (
                selectedNode?.data?.settings[name].elementType === "tag"
              ) {
                return (
                  
                  <Box key={selectedNode?.id.concat(index)}>
                    <TextField
                      key={selectedNode?.id.concat(index + 1)}
                      label="key"
                    ></TextField>
                    <TextField
                      key={selectedNode?.id.concat(index + 2)}
                      label="value"
                    ></TextField>
                    <Button variant="text">add new tag</Button>
                  </Box>
                );
              } else if (
                selectedNode?.data?.settings[name].elementType === "textField"
              ) {
                const obj = selectedNode?.data?.settings[name];
                return (
                  <TextField
                    key={selectedNode?.id.concat(index)}
                    label={name}
                    variant="outlined"
                    name={name}
                    defaultValue={obj.value}
                    onChange={onInputChange}
                  ></TextField>
                );
              } else {
                return null;
              }
            }
          )}
        </Box>
      </Drawer>
    </ClickAwayListener>
  );
}

export default ConfigPanel;
