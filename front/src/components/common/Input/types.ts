export interface InputProps {
    text: string;
    setInput: (event: Event) => any;

    width?: number;
    borderRadius?: number;
    height?: number;

    isPassword: boolean;
}
