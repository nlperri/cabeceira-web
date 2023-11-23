interface ButtonProps {
  className: string;
  content: string | React.ReactNode;
  type: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  onClick,
  className,
  content,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
