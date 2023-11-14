interface ButtonProps {
  className: string;
  content: string;
  type: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
}

const Button = ({ className, content, type, disabled }: ButtonProps) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
