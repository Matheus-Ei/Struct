// Libraries
import React from "react";

export interface PasswordButtonProps {
    showPassword: boolean;
    toggleShowPassword: () => React.ComponentState;
    isPassword: boolean;
}
