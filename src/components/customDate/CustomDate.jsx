import { DateTimePicker } from "@mantine/dates";
import 'dayjs/locale/ru'
import { useEffect, useState } from "react";
import { FontFamilyHeaderText } from "../../style/commonStyle";
import { funcCall, smExt } from "../../utils/DefineExtention";


Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

export const CustomDate = ({getValue, label, placeHolder, dateValue, colorLable}) => {
    //#region 
    const [matches, setMatches] = useState(window.matchMedia(smExt).matches);
    useEffect(() => {
        const matchMedia = window.matchMedia(smExt)
        matchMedia.addEventListener('change', e => funcCall(setMatches, e.matches));

        return () => matchMedia.removeEventListener('change', funcCall);
    }, []);
    //#endregion
    

    const [date, setDate] = useState(dateValue === null || dateValue === undefined ? new Date() : new Date(dateValue));

    return(
        <DateTimePicker styles={{
            root: { display: 'flex', alignItems: 'center', margin: '0 5px' },
            label: { marginRight: '5px', color: colorLable ? colorLable : '#003274', fontSize: matches ? '0.8em' : '1em' },
            wrapper: { fontSize: matches ? '0.8em' : '1em' },
            input: { fontSize: '1em' }
        }}
            label={label}
            placeholder={placeHolder}
            locale="ru-ru"
            value={date}
            dropdownType="modal"
            size="xs"
            radius="xl"
            valueFormat="DD MMM YYYY"
            onChange={(e) => {
                setDate(e);
                getValue(new Date(e).addHours(3)?.toISOString().replace('Z', '').split('.')[0]);
            }}
        />
    )
}