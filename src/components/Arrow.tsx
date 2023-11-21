export const Arrow = (props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) => {
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left
          ? "arrow--left left-[-60px]"
          : "arrow--right left-auto right-[-60px]"
      } w-8 top-48 absolute transform -translate-y-1/2 -webkit-transform -webkit-translate-y-1/2 fill-current text-gray-300 ${
        !props.disabled && "cursor-pointer"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
};
