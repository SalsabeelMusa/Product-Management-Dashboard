import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: IProps) => {
  return <input {...rest} />;
};
