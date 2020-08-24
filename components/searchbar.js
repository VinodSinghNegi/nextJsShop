import Link from "next/link";
import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import data from "../utils/data.json";

export default function ComboBox() {
  const [value, setValue] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      <Autocomplete
        id="combo-box-demo"
        options={data}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search here..." variant="outlined" />
        )}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      {value && (
        <Link as={`/${value && value.title}`} href="/[product]">
          <Button variant="contained" color="primary">
            Go
          </Button>
        </Link>
      )}
    </div>
  );
}
