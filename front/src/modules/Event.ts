import { SetStateType } from "types/global";

interface KeyActivity {
    key: string;
    callback: ((event?: any) => void | Promise<void>) | undefined;
    notActivate?: boolean;
}

class Event {
    private event: any;

    public constructor(event: any) {
        this.event = event;
    }

    public static onClickCallback(
        callback?: Function,
        condition: boolean = true
    ) {
        condition && callback && callback();
    }

    public static onChangeSet<T>(
        newValue: T,
        setValue: SetStateType<T> | undefined,
        condition: boolean = true
    ) {
        setValue && condition && setValue(newValue);
    }

    public static onKeyDown(event: any, keyActivities: KeyActivity[]) {
        keyActivities.forEach((keyActivity) => {
            if (event.key === keyActivity.key) {
                !keyActivity.notActivate &&
                    keyActivity.callback &&
                    keyActivity.callback(event);
            }
        });
    }

    set targetValue(value: string) {
        this.event.target.value = value;
    }

    get targetValue() {
        return this.event.target.value;
    }

    set currentTargetValue(value: string) {
        this.event.currentTarget.value = value;
    }

    get currentTargetValue() {
        return this.event.currentTarget.value;
    }

    set targetInnerText(value: string) {
        this.event.target.innerText = value;
    }

    get targetInnerText() {
        return this.event.target.innerText;
    }

    public stopPropagation() {
        this.event.stopPropagation();
    }

    public preventDefault() {
        this.event.preventDefault();
    }

    public static addListener(
        eventName: string,
        callback: (event?: any) => void
    ) {
        window.addEventListener(eventName, callback);
    }

    public static removeListener(
        eventName: string,
        callback: (event?: any) => void
    ) {
        window.removeEventListener(eventName, callback);
    }
}

export default Event;
