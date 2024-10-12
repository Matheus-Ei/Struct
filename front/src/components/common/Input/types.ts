export interface InputProps {
    text: string;
    setInput: (event: Event) => any;
    isPassword: boolean;

    width?: number;
    height?: number;
}
