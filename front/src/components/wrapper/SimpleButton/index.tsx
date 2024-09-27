import * as S from "./styles";

interface ButtonProps {
    children: JSX.Element;
    style?: Object;
    black?: boolean;
    onClick?: () => {};
}

const SimpleButton = ({ children, style, black, onClick }: ButtonProps) => {
    if (black) {
        return (
            <S.BodyBlack style={style} onClick={onClick}>
                {children}
            </S.BodyBlack>
        );
    }

    return (
        <S.BodyWhite style={style} onClick={onClick}>
            {children}
        </S.BodyWhite>
    );
};

export default SimpleButton;
