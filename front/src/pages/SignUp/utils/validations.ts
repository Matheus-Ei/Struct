// Local
import { SignUpContextType } from "./types";
import Request from "modules/Request";
import { ErrorType, SetStateType } from "types/global";

class Validations {
    private context: SignUpContextType;
    private setNickError: SetStateType<ErrorType>;
    private setMailError: SetStateType<ErrorType>;

    constructor(
        context: SignUpContextType,
        setNickError: SetStateType<ErrorType>,
        setMailError: SetStateType<ErrorType>
    ) {
        this.context = context;
        this.setMailError = setMailError;
        this.setNickError = setNickError;
    }

    private emptyFields() {
        const { name, nickname, mail } = this.context;

        if (!name || !nickname || !mail) {
            this.context.setError({
                isError: true,
                message: "Please fill all fields",
            });
            return false;
        }

        return true;
    }

    private async nickname() {
        const nickname = this.context.nickname;
        if (!nickname) return false;

        // Nickname validation
        if (nickname.length < 3 || nickname.search(" ") >= 1) {
            this.setNickError({ message: "Invalid nickname", isError: true });
            return false;
        }

        // Check if nickname is available
        const response = await Request.post("user/check/nickname", {
            nickname: nickname,
        });
        if (response.isAvailable === false) {
            this.setNickError({
                message: "This nickname is not avaliable",
                isError: true,
            });
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
            this.setMailError({
                message: "This mail is already in use",
                isError: true,
            });
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
            this.setMailError({ message: "Invalid mail", isError: true });
            return false;
        }

        return true;
    }

    private resetErrors() {
        this.context.setError({ message: "", isError: false });
        this.setNickError({ message: "", isError: false });
        this.setMailError({ message: "", isError: false });
    }

    async verify() {
        this.resetErrors();

        const isNotEmpty = this.emptyFields();

        const mailValid = await this.mail();

        const nickValid = await this.nickname();

        if (!isNotEmpty || !mailValid || !nickValid) return false;

        this.resetErrors();
        return true;
    }
}

export default Validations;
