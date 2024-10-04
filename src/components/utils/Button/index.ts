export interface ButtonProps {
    title: string;
    handleOnClick: React.MouseEventHandler<HTMLButtonElement>
    secondary?: boolean;
    icon?: JSX.Element;
}