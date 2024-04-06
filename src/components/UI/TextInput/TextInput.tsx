import React from "react";
import "./TextInput.scss";
import { TextField } from "@mui/material";

interface Props {
  label?: string;
  width?: string;
  errorMessage?: string;
  name?: string;
  ref?: any;
  value?: string;
  handleChange?: any;
  type?: string;
  placeholder?: string;
  onKeyDown?: any;
}

export const TextInput: React.FC<Props> = React.forwardRef(
  (
    {
      label,
      width,
      errorMessage = "",
      name,
      value,
      handleChange,
      type = "text",
      placeholder = "",
      onKeyDown,
    },
    ref
  ) => {
    return (
      <div className={`text-input ${width ? width : ""}`}>
        <TextField
          type={type}
          value={value}
          inputRef={ref}
          label={label}
          helperText={errorMessage}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  }
);
