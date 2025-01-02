import React from "react";
import Label from "./Label";

const defaultProps = {
  type: "text",
};

type Props = {
  error?: any;
  label?: string;
  helpText?: string;
  height?: string;
  width?: string;
  rounded?: string;
} & typeof defaultProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

export default function FormInputField(props: Props) {
  props = { ...defaultProps, ...props };

  const { error, label, helpText, ...standardProps } = {
    ...props,
    className: `


      block py-1.5 text-gray-900 shadow-sm 
                               ${props.width ?? "w-full"} ${
      props.height ?? "h-[50px]"
    } ${
      props.rounded ?? "rounded-[15px]"
    } border-[1px] border-[#DFEAF2] placeholder:text-[#718EBF] 
                               placeholder:text-[16px] placeholder:font-[400px] leading-[18.15px]
                               text-[15px] pl-[20px]
      ${
        props.error
          ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500"
          : "border-gray-300 focus:ring-purple-500 focus:border-purple-500"
      } ${props.className}`,
  };

  return (
    <div>
      <Label htmlFor={props.name}>{props.label}</Label>
      <div className={`${props.label ? "mt-2" : ""}`}>
        <input {...standardProps} />
        {props.error || props.helpText ? (
          <p
            className={`${
              props.error ? "text-[#EC1414]" : "text-gray-500"
            } font-[400] text-[12px] leading-[16px] mt-2`}
          >
            {props.error ? props.error.message : props.helpText}
          </p>
        ) : null}
      </div>
    </div>
  );
}
