import React from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Cal = () => {

    const [value, setValue]  = React.useState(new Date());

    return <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker 
            orientation="landscape"
            openTo="day"
            value={value}
            onChange={(newValue) =>{
                setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
}

export default Cal;