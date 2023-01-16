export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children: JSX.Element[] | JSX.Element | string;
    className?: string;
  }