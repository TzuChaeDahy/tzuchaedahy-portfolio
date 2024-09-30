export interface ButtonProps {
    title: string;
    handleOnClick: React.MouseEventHandler<HTMLButtonElement>
    isSecondary?: boolean;
}