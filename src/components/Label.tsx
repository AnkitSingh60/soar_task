import React from "react";

type Props = {
  children: React.ReactNode;
  hasNormalFontWeight?: boolean;
} & React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export default function Label(props: Props) {
  const { children, hasNormalFontWeight, ...standardProps } = {
    ...props,

    className: `block font-[400] text-[16px] leading-[19.36px] text-[#232323]  
    
    
    ${props.className ? props.className : ""}`,
  };

  return <label {...standardProps}>{props.children}</label>;
}
