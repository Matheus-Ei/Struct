import { ComponentType } from "react";
import { motion } from "framer-motion";

interface WithAnimationProps {
    onClick?: () => void;
}

function scale<T extends WithAnimationProps>(
    WrappedComponent: ComponentType<T>,
    scale: number,
    type: "click" | "hover"
) {
    return (props: T) => {
        const handleClick = () => {
            if (props.onClick) {
                props.onClick();
            }
        };

        const animation = { scale };

        switch (type) {
            case "click":
                return (
                    <motion.div
                        whileTap={animation}
                        onClick={handleClick}
                    >
                        <WrappedComponent {...props} />
                    </motion.div>
                );
            case "hover":
                return (
                    <motion.div
                        whileHover={animation}
                    >
                        <WrappedComponent {...props} />
                    </motion.div>
                );
        }
    };
}

export default scale;
