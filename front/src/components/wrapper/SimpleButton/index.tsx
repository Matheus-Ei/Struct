import * as S from "./styles";

interface ButtonProps {
    children: JSX.Element;
    style?: Object;
    onClick?: () => {};
}

const SimpleButton = ({ children, style, onClick }: ButtonProps) => {
    return (
        <S.Body style={style} onClick={onClick}>
            {children}
        </S.Body>
    );
};

export default SimpleButton;
