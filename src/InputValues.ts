import { InputType } from "./inputType";

export interface InputValues {
    inputType: InputType;
    inputValue: number;
    setInputType?: (inputType: InputType) => void;
    setInputValue?: (newValue: number) => void;
}