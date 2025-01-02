import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Soar | Settings",
  description:
    "This project was created by Ankit Singh as an assessment for Soar company. If you find it well-structured and impressive, feel free to contact me via GitHub: https://github.com/AnkitSingh60 or email: ankitanwar730@gmail.com.",
};

export default function SettingLayout(props: Props) {
  return <>{props.children}</>;
}
