
import { InputValues } from "./InputValues";
import { InputType } from "./inputType";


const InputPane = (props : InputValues) => {
    const { inputValue, setInputValue, inputType, setInputType } = props;

    const inputValueHandler = (value: number) => {
        if (value < 1) {
            setInputValue!(1);
        } else if (inputType === InputType.BPM && value > 300) {
            setInputValue!(300);
        } else if (inputType === InputType.MS && value > 10000) {
            setInputValue!(10000);
        } else {
            setInputValue!(value);
        }
    }

    return (
        <div className="section">
            <div>
                <input onChange={event => inputValueHandler(Number(event.target.value))} type="number" id="numberValue" value={inputValue} />
            <div>
                <input name="inputType" type="radio" value="BPM" checked={inputType === InputType.BPM} onChange={event => setInputType!(InputType.BPM)}/> BPM
                <input name="inputType" type="radio" value="MSs" checked={inputType === InputType.MS} onChange={event => setInputType!(InputType.MS)}/> MS
            </div>
            </div>
        </div>
    );
}

export default InputPane;