import { Box } from "@mantine/core"
import { useSelector } from "react-redux"
import { GetAdminListPhotos } from "../slice/AdminSlice"
import { useLayoutEffect } from "react";
import { DynamicTable } from "../../../components/dynamicTable/DynamicTable";


export const ListContent = () => {
    const listPhoto = useSelector(GetAdminListPhotos);

    return(
        <DynamicTable listItems={listPhoto} color='white' displayColumns={['title', 'path', 'category_id']}/>
    )
}