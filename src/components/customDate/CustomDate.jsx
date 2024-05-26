import { DateTimePicker } from "@mantine/dates";
import 'dayjs/locale/ru'
import { useEffect, useState } from "react";
import { FontFamilyHeaderText } from "../../style/commonStyle";
//import { FontFamilySimpleText } from "../../styles/styles";
//import { funcCall, smExt } from "../../until/DefineExtention";


Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

export const CustomDate = ({getValue, label, placeHolder, dateValue, colorLable}) => {
    //const [matches, setMatches] = useState(window.matchMedia(smExt).matches);

    const [date, setDate] = useState(dateValue === null || dateValue === undefined ? new Date() : new Date(dateValue));

    // useEffect(() => {
    //     const matchMedia = window.matchMedia(smExt)
    //     matchMedia.addEventListener('change', e => funcCall(setMatches, e.matches));
    
    //     return () => matchMedia.removeEventListener('change', funcCall);
    //   }, []);

    // return(
    //     <DateTimePicker styles={{
    //         root: { display: 'flex', alignItems: 'center', width: matches ? '150px' : '', height: matches ? '35px' : '' },
    //         label: { marginRight: '5px', color: colorLable ? colorLable : '#003274', ...FontFamilySimpleText, fontSize: matches ? '0.8em' : '1.2em' },
    //         wrapper: { margin: '0 5px' },
    //         input: { fontSize: matches ? '0.7em' : '1em' }
    //     }}
    //         label={label}
    //         placeholder={placeHolder}
    //         locale="ru-ru"
    //         value={date}
    //         dropdownType="modal"
    //         size="xs"
    //         onChange={(e) => {
    //             setDate(e);
    //             getValue(new Date(e).addHours(3)?.toISOString().replace('Z', '').split('.')[0]);
    //         }}
    //     />
    // )
    return(
        <DateTimePicker styles={{
            root: { display: 'flex', alignItems: 'center' },
            label: { marginRight: '5px', color: colorLable ? colorLable : '#003274', fontSize: '1em' },
            wrapper: { margin: '0 5px' },
            input: { fontSize: '1em' }
        }}
            label={label}
            placeholder={placeHolder}
            locale="ru-ru"
            value={date}
            dropdownType="modal"
            size="xs"
            radius="xl"
            onChange={(e) => {
                setDate(e);
                getValue(new Date(e).addHours(3)?.toISOString().replace('Z', '').split('.')[0]);
            }}
        />
    )
}