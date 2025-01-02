"use client";

import { Transition } from "@headlessui/react";
import React, { useEffect } from "react";

const defaultProps = {};

type Props = {
  children: React.ReactNode;
};

export default function TabPanelTransition(props: Props) {
  props = { ...defaultProps, ...props };

  const [show, setShow] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShow(true);
    }
  });

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-350"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-350"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex flex-1 flex-col h-full">{props.children}</div>
    </Transition>
  );
}
