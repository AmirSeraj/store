"use client";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const CustomInput = ({
  isRequired,
  type,
  label,
  className,
  password,
  name,
  placehoder,
  isInvalid,
  color,
  value,
  onChange,
  errorMessage,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      name={name}
      value={value}
      isRequired={isRequired}
      isInvalid={isInvalid}
      type={password ? (isVisible ? "text" : "password") : type}
      label={label}
      variant="bordered"
      placehoder={placehoder}
      color={color}
      size="md"
      onChange={onChange}
      errorMessage={errorMessage}
      endContent={
        password && (
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? <IoEyeOff size={20} /> : <IoEye size={20} />}
          </button>
        )
      }
      className={`max-w-sm text-xs ${className}`}
    />
  );
};

export default CustomInput;
