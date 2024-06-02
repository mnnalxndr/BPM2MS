import Calculations from "./Calculations";
import { InputValues } from "./InputValues";
import { InputType } from "./inputType";

export default (props: InputValues) => {

    const { inputType, inputValue } = props;

    let inputTypeDiv;
    switch (inputType) {
        case InputType.BPM:
            inputTypeDiv = <div>BPM selected</div>;
            break;
        case InputType.MS:
            inputTypeDiv = <div>MS selected</div>;
            break;
    }

    

    return (
        <div className="section">
            {inputTypeDiv}
            <div>{inputValue} {InputType[inputType]}</div>
            <Calculations inputType={inputType} inputValue={inputValue} />
        </div>
    )
};