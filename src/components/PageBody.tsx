import React from "react";

type Props = {
  children: React.ReactNode;
  maxWidth?: string;
};

export default function PageBody(props: Props) {
  return (
    <div className="">
      <div className="m-8 flex-1">{props.children}</div>
    </div>
  );
}
