import { InputValues } from "./InputValues";
import { InputType } from "./inputType";

const SEC_PER_MIN = 60;
const MS_PER_SEC = 1000;

const BEATS_SEMIBREVE = 4;
const BEATS_DOTTED_MINIM = 3;
const BEATS_MINIM = 2;
const BEATS_DOTTED_CROTCHET = 1.5;
const BEATS_CROTCHET = 1;
const BEATS_DOTTED_QUAVER = 0.75;
const BEATS_QUAVER = 0.5;
const BEATS_SEMIQUAVER = 0.25;

const calculate = (inputType: InputType, inputValue: number) => {

    if (inputType === InputType.BPM) {
        // return MS values
        const bps = inputValue / SEC_PER_MIN;
        const msPerBeat = MS_PER_SEC / bps;

        return [
            { subdivision: 'semibrieve', value: Math.round(msPerBeat * BEATS_SEMIBREVE) },
            { subdivision: 'dotted minim', value: Math.round(msPerBeat * BEATS_DOTTED_MINIM) },
            { subdivision: 'minim', value: Math.round(msPerBeat * BEATS_MINIM) },
            { subdivision: 'dotted crotchet', value: Math.round(msPerBeat * BEATS_DOTTED_CROTCHET) },
            { subdivision: 'crotchet', value: Math.round(msPerBeat * BEATS_CROTCHET) },
            { subdivision: 'dottedquaver', value: Math.round(msPerBeat * BEATS_DOTTED_QUAVER) },
            { subdivision: 'quaver', value: Math.round(msPerBeat * BEATS_QUAVER) },
            { subdivision: 'semiquaver', value: Math.round(msPerBeat * BEATS_SEMIQUAVER) },
        ]

    } else {
        // input is MS, so return BPM values
        const crotchetBPM = MS_PER_SEC * SEC_PER_MIN / inputValue;

        return [
            { subdivision: 'semibrieve', value: Math.round(crotchetBPM * BEATS_SEMIBREVE) },
            { subdivision: 'dotted minim', value: Math.round(crotchetBPM * BEATS_DOTTED_MINIM) },
            { subdivision: 'minim', value: Math.round(crotchetBPM * BEATS_MINIM) },
            { subdivision: 'dotted crotchet', value: Math.round(crotchetBPM * BEATS_DOTTED_CROTCHET) },
            { subdivision: 'crotchet', value: Math.round(crotchetBPM) },
            { subdivision: 'dotted quaver', value: Math.round(crotchetBPM * BEATS_DOTTED_QUAVER) },
            { subdivision: 'quaver', value: Math.round(crotchetBPM * BEATS_QUAVER) },
            { subdivision: 'semiquaver', value: Math.round(crotchetBPM * BEATS_SEMIQUAVER) },
        ]

    }
}

export default (props: InputValues) => {

    const { inputType, inputValue } = props;

    const results = calculate(inputType, inputValue);

    return (
        <>
            {results.map(result => <div>
                {result.subdivision} : {result.value} {
            inputType === InputType.BPM ? InputType[InputType.MS] : InputType[InputType.BPM]
            }
            </div>)}
        </>
    );

}