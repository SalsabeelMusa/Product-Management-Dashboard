import { HTMLAttributes } from "react";

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: string;
  onClick: () => void;
}

const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      style={{
        display: "inline-block",
        width: "20px",
        height: "20px",
        backgroundColor: color,
        border: "1px solid #ccc",
        borderRadius: "50%",
        margin: "2px",
      }}
      {...rest}
    />
  );
};

export default CircleColor;
