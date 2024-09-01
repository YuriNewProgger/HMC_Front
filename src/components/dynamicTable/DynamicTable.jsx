import { Box, Table } from "@mantine/core"
import { useLayoutEffect, useState } from "react"
import uniqid from 'uniqid';

export const DynamicTable = ({ listItems, color, displayColumns }) => {

    const [rows, setRows] = useState();
    const [head, setHead] = useState();

    useLayoutEffect(() => {
        try {
            if (listItems == null || listItems == undefined || listItems.lemgth == 0) {
                return;
            }

            const keys = Object.keys(listItems[0]);


            const tmpHeads = [];
            for (let i = 0; i < keys.length; i++) {
                if(displayColumns.includes(keys[i])){
                    tmpHeads.push(
                        <td key={uniqid()} style={{
                            color: color
                        }}>{keys[i]}</td>
                    );
                }
            }
            setHead(<tr key={uniqid()}>{tmpHeads}</tr>);

            const tmpRows = [];
            listItems.forEach(item => {
                tmpRows.push(
                    <tr key={uniqid()}>
                        {
                            keys.map(key => {
                                if(displayColumns.includes(key)){
                                    return(
                                        <td key={uniqid()} style={{
                                            color: color
                                        }}>{item[key]}</td>
                                    )
                                }
                            })
                        }
                    </tr>
                );
            });

            setRows(tmpRows);

        } catch (error) {
            console.log("DynamicTable ERROR");
            console.log(error);
        }
    }, [listItems]);

    if (listItems == null || listItems == undefined || listItems.lemgth == 0) {
        return (
            <Box sx={{
                color: color
            }}>Пусто</Box>
        )
    }
    else {
        return (
            <Table>
                <thead>{head}</thead>
                <tbody>{rows}</tbody>
            </Table>
        )
    }
}