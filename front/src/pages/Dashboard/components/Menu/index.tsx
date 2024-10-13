// Modules
import * as S from "./styles";
import * as T from "./types";
import routes from "../routes";

// Hooks
import { useTheme } from "../../../../hooks/useTheme";

// Utils
import File from "../../../../utils/file";

// Components
import Selector from "../../../../components/common/Selector";
import Image from "../../../../components/common/Image";

const Menu = ({ selectedName, setSelected }: T.MenuProps) => {
    const theme = useTheme();

    return (
        <S.Body>
            <Image
                width={60}
                src={File.get(`images/logo-1920x1080-2-${theme.style}.png`)}
            />
            <S.Content>
                {routes.map((item: T.SingleRouteType, index: number) => {
                    return (
                        <Selector
                            name={item[0]}
                            icon={item[1]}
                            repository={item[2]}
                            isSelected={item[0] === selectedName ? true : false}
                            setSelected={setSelected}
                            key={index}
                        />
                    );
                })}
            </S.Content>
        </S.Body>
    );
};

export default Menu;
