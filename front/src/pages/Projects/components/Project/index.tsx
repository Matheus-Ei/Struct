// Modules
import * as T from "./types";
import * as S from "./styles";

// Libraries
import React from "react";
import Card from "../../../../components/common/Card";
import Text from "../../../../components/common/Text";

const Project = ({}: T.ProjectProps) => {
    return (
        <S.Body>
            <Card
                width={20}
                height={20}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Text text="Test" />
            </Card>
        </S.Body>
    );
};

export default React.memo(Project);
