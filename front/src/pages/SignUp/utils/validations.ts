// Local
import { SetStateType } from 'types/global';
import { SignUpContextType } from '../context';
import Account from 'services/account';

class Validations {
  private useSignUpContext: SignUpContextType;
  private setNickError: SetStateType<string | null>;
  private setMailError: SetStateType<string | null>;

  constructor(
    useSignUpContext: SignUpContextType,
    setNickError: SetStateType<string | null>,
    setMailError: SetStateType<string | null>,
  ) {
    this.useSignUpContext = useSignUpContext;
    this.setMailError = setMailError;
    this.setNickError = setNickError;
  }

  private emptyFields() {
    const { name, nickname, mail } = this.useSignUpContext;

    if (!name.value || !nickname.value || !mail.value) {
      this.useSignUpContext.error.set('Please fill all fields');
      return false;
    }

    return true;
  }

  private async nickname() {
    const nickname = this.useSignUpContext.nickname;
    if (!nickname.value) return false;

    // Nickname validation
    const isAvaliable = await Account.checkAvailability(nickname.value);

    if (nickname.value.length < 3 || nickname.value.search(' ') >= 1) {
      this.setNickError('Invalid nickname');
      return false;
    } else if (!isAvaliable) {
      this.setNickError('This nickname is not avaliable');
      return false;
    }

    return true;
  }

  private async mail() {
    const mail = this.useSignUpContext.mail;
    if (!mail.value) return false;

    // Mail validation
    const mailResponse = await Account.checkAvailability(undefined, mail.value);

    const mailUser = mail.value.substring(0, mail.value.indexOf('@'));
    const mailDomain = mail.value.substring(mail.value.indexOf('@') + 1);
    if (
      mailUser.length < 1 ||
      mailDomain.length < 1 ||
      mailUser.search(' ') >= 1 ||
      mailDomain.search(' ') >= 1 ||
      mail.value.search(' ') >= 1
    ) {
      this.setMailError('Invalid mail');
      return false;
    } else if (!mailResponse) {
      this.setMailError('This mail is not avaliable');
      return false;
    }

    return true;
  }

  private resetErrors() {
    this.useSignUpContext.error.set(null);
    this.setNickError(null);
    this.setMailError(null);
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
