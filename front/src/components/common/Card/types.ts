export interface CardProps {
    children: JSX.Element;

    width?: number;
    height?: number;

    justifyContent?: "center" | "flex-start" | "flex-end";
    alignItems?: "center" | "flex-start" | "flex-end";
    flexDirection?: "row" | "column";
}
