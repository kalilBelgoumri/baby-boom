import TextField from "@mui/material/TextField";

const InputAll = ({
  label,
  variant,
  required,
  rows,
  id,
  value,
  onChange,
  type,
  sx = [],
  height,
}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-4">
      <TextField
        required={required}
        type={type}
        id={id}
        rows={rows}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        sx={sx}
        height={height}
      />
    </div>
  );
};

export default InputAll;
