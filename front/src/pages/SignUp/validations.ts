// Libraries
import { Dispatch, SetStateAction } from "react";

// Local
import { SignUpContextType } from "./types";
import Request from "services/Request";

class Validations {
    private context: SignUpContextType;
    private toggleNicknameError: (value: boolean) => void;
    private setNickErrorType: Dispatch<SetStateAction<string>>;
    private toggleMailError: (value: boolean) => void;
    private setMailError: Dispatch<SetStateAction<string>>;

    constructor(
        context: SignUpContextType,
        toggleNicknameError: (value: boolean) => void,
        setNickErrorType: Dispatch<SetStateAction<string>>,
        toggleMailError: (value: boolean) => void,
        setMailError: Dispatch<SetStateAction<string>>
    ) {
        this.context = context;
        this.toggleNicknameError = toggleNicknameError;
        this.setNickErrorType = setNickErrorType;
        this.toggleMailError = toggleMailError;
        this.setMailError = setMailError;
    }

    private emptyFields() {
        const { name, nickname, mail } = this.context;

        if (!name || !nickname || !mail) {
            this.context.toggleError(true);
            this.context.setErrorMessage("Please fill all fields");
            return false;
        }

        return true;
    }

    private async nickname() {
        const nickname = this.context.nickname;
        if (!nickname) return false;

        // Nickname validation
        if (nickname.length < 3 || nickname.search(" ") >= 1) {
            this.setNickErrorType("Invalid nickname");
            this.toggleNicknameError(true);
            return false;
        }

        // Check if nickname is available
        const response = await Request.post("user/check/nickname", {
            nickname: nickname,
        });
        if (response.isAvailable === false) {
            this.setNickErrorType("This nickname is not avaliable");
            this.toggleNicknameError(true);
            return false;
        }

        return true;
    }

    private async mail() {
        const mail = this.context.mail;
        if (!mail) return false;

        // Check if mail registered already
        const response = await Request.post("user/check/mail", {
            mail: mail,
        });
        if (response.isAvailable === false) {
            this.setMailError("This mail is already in use");
            this.toggleMailError(true);
            return false;
        }

        // Mail validation
        const mailUser = mail.substring(0, mail.indexOf("@"));
        const mailDomain = mail.substring(mail.indexOf("@") + 1);
        if (
            mailUser.length < 1 ||
            mailDomain.length < 1 ||
            mailUser.search(" ") >= 1 ||
            mailDomain.search(" ") >= 1 ||
            mail.search(" ") >= 1
        ) {
            this.setMailError("Invalid mail");
            this.toggleMailError(true);
            return false;
        }

        return true;
    }

    private resetErrors() {
        this.context.toggleError(false);
        this.toggleNicknameError(false);
        this.toggleMailError(false);
    }

    async verify() {
        this.resetErrors();

        const isNotEmpty = this.emptyFields();

        const mailValid = await this.mail();

        const nickValid = await this.nickname();

        if (!isNotEmpty || !mailValid || !nickValid) {
            return false;
        }

        this.resetErrors();
        return true;
    }
}

export default Validations;
