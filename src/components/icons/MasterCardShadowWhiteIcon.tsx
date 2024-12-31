type Props = {
  className?: string;
};

export default function MasterCardShadowWhiteIcon(props: Props) {
  return (
    <>
      <svg
        className={props.className}
        width="44"
        height="30"
        viewBox="0 0 44 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#9199AF" fillOpacity="0.5" />
        <circle cx="29" cy="15" r="15" fill="#9199AF" fillOpacity="0.5" />
      </svg>
    </>
  );
}
