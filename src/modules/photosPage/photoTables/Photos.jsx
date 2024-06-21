import { Box, Button, Checkbox, Image, Select, Tooltip } from "@mantine/core";
import React, { memo, useEffect, useState } from "react";
import { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { useQuery } from "@tanstack/react-query";
//import { ASSET_LIST_PANEL_LOCALIZATION } from "../../localization/assetLostTable/AssetListTableLocalization";
import uniqid from 'uniqid';
import { CustomDate } from "../../../components/customDate/CustomDate";
import {DTFormat, DateFormating} from '../../../utils/DateForming'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetPhotoUrl } from "../api/api";
import { setSelectedPhoto } from "../slice/PhotoSlice";
import { FontFamilyHeaderText } from "../../../style/commonStyle";

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

//custom react-query hook
const useGetUsers = ({
    serachFilter,
    sorting,
    pagination,
    dateStart,
    dateEnd,
    categories
}) => {



    const defineColumnsOrders = (() => {
        
        if(sorting.length === 0)
        {
            return {
                fieldOrder: '',
                typeOrder: ''
            }
        }
        
        return {
            fieldOrder: sorting[0].id,
            typeOrder: sorting[0].desc ? 'desc' : 'asc'
        }
    })()

    const fetchURL = GetPhotoUrl(DTFormat(dateStart), DTFormat(dateEnd), `${pagination.pageIndex * pagination.pageSize}`, `${pagination.pageSize}`,
        serachFilter ?? '', defineColumnsOrders.fieldOrder, defineColumnsOrders.typeOrder, categories);


    return useQuery({
        queryKey: ['photos', serachFilter, sorting, pagination, dateStart, dateEnd, categories], //refetch whenever the URL changes (globalFilter, globalFilter, sorting, pagination)        
        queryFn: () => fetch(fetchURL).then((res) => res.json()),        
        keepPreviousData: true, //useful for paginated queries by keeping data from previous pages on screen while fetching the next page
        staleTime: 30_000, //don't refetch previously viewed pages until cache is more than 30 seconds old
    });
};

const PhotosTable = () => {
    const dispatch = useDispatch();
    const columns = useMemo(
        () => [
            {
                accessorKey: 'timestamp', //access nested data with dot notation
                header: 'Дата',
                size: 30
            },
            {
                accessorKey: 'title',
                header: 'Название',
                size: 70
            },
        ],
        [],
    );


    //Manage MRT state that we want to pass to our API
    const [serachFilter, setColumnFilters] = useState('');
    //const [sorting, setSorting] = useState([]);
    const [sorting, setSorting] = useState([
        {
          id: 'date', //sort by age by default on page load
          desc: true,
        }
      ]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });
    
    const [dateStart, _setDateStart] = useState(new Date());
    const [dateEnd, _setDateEnd] = useState(new Date());
    const [categories, setCategories] = useState('all');


    //call our custom react-query hook
    const { data, isError, isFetching, isLoading } = useGetUsers({
        serachFilter,
        sorting,
        pagination,
        dateStart, //дата начала выборки
        dateEnd, //дата конечной выборки
        categories
    });

    //this will depend on your API response shape    
    const fetchedMsg = data?.photos ?? [];
    const totalRowCount = data?.totalCounts ?? 0;


    const table = useMantineReactTable({
        columns,
        //data: [],
        data: fetchedMsg?.length > 0 ? fetchedMsg.map(item => ({ timestamp: item.timestamp.split('.')[0].replace('T', ' ').replace('Z', ''), title: item.link.split('/')[item.link.split('/').length - 1], link: item.link})) : fetchedMsg,        
        //localization: ASSET_LIST_PANEL_LOCALIZATION,
        columnFilterModeOptions: ['contains'],
        initialState: { showColumnFilters: false },
        enablePagination: true,
        enableColumnActions: false,
        enableColumnFilterModes: false,
        enableGlobalFilterModes: true,
        enableGlobalFilter: true,
        enableColumnFilters: false,
        enableHiding: false,
        enableFilters: false,
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        manualFiltering: true,
        manualPagination: true,
        manualSorting: true,
        onGlobalFilterChange: setColumnFilters,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        
        rowCount: totalRowCount.count,
        state: {
            serachFilter,
            isLoading,
            pagination,
            showAlertBanner: isError,
            showProgressBars: isFetching,
            sorting,
        },

        mantinePaperProps: {
            withBorder: false,
            sx: {
                height: '98%',
                overflowY: 'auto',
                borderRadius: '5px',
                color: 'white',
                backgroundColor: '#1e2747',
                border: '0px solid red',
                margin: '1%'                
            }
        },

        mantineTopToolbarProps: {
            sx: {
                background: '#1e2747',
                color: 'white',
            }
        },

        mantineBottomToolbarProps: {
            sx: {
                background: '#1e2747',
                color: 'white',

                '& label': {
                   color: 'white'
                }
            }
        },
        
        
        mantineTableProps: {
            highlightOnHover: false,
            withColumnBorders: false,
            sx: {
                'tbody': {
                    border: '0px solid #1B1B1B',
                },
                'thead > tr': {
                    backgroundColor: 'inherit',
                },
                'thead > tr > th': {
                    backgroundColor: 'inherit',
                    color: 'white',
                    fontSize: '1em',
                },
                'tbody > tr > td': {
                    backgroundColor: 'inherit',
                    color: '#white',
                    fontSize: '1em',
                    textAlign: 'left',
                    '&:hover': { cursor: 'pointer' }
                },
            },
        },

        mantineTableBodyCellProps: ({ cell }) => ({
            sx: {
                color: 'white',
            },
            onClick: (event) => {
                //console.log(cell.row.original);
                dispatch(setSelectedPhoto(cell.row.original.link))
            },
        }),

        // mantineTableBodyCellProps: ({ cell }) => ({
        //     onClick: (event) => {
        //         const asset = { ...psAssets.find(item => item.asset_id === cell.row.original.equipmentId), id: cell.row.original.equipmentId };

        //         dispatch(setSelectedEquipment({
        //             asset: asset.name,
        //             elementId: asset.asset_id,
        //             elementType: asset.asset_type,
        //             substId: substationId
        //         }));

        //         if (cell.column.id === 'message') {
        //             dispatch(setCodeTab(cell.row.original.tab));
        //             dispatch(setCodeSubTab('charts'));


        //             dispatch(setDateStart(DateFormating(new Date(cell.row.original.timestamp), 27)));
        //             dispatch(setDateEnd(DateFormating(new Date(cell.row.original.timestamp), -21)));

        //             navigate(`/substation/${substationId}/${cell.row.original.elementType}/${cell.row.original.equipmentId}/charts`);
        //         }
        //         else {
        //             navigate(`/substation/${substationId}/${cell.row.original.elementType}/${cell.row.original.equipmentId}`);
        //         }
        //     },
        //   }),

        renderTopToolbarCustomActions: ({table}) => (
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                margin: '0',
                padding: '0'
            }}>
                

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    //margin: '0 30px'
                }}>
                    <Select styles={{
                            input: { borderRadius: '25px' }
                        }}
                        //placeholder="Все"
                        data={[
                            { value: 'all', label: 'Все' },
                            { value: 'Kira', label: 'Кира' }
                        ]}
                        value={categories} onChange={(e) => setCategories(e)}
                    />
                    <CustomDate label={'От'} colorLable={'white'} getValue={(e) => _setDateStart(e)} dateValue={dateStart} />
                    <CustomDate label={'До'} colorLable={'white'} getValue={(e) => _setDateEnd(e)} dateValue={dateEnd} />

                </Box>
            </Box>
        )
    });
    

    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            overflowY: 'auto',
            display: 'flex',
            alignItems: 'center'
        }}>

            <MantineReactTable table={table} />
        </Box>
    )
};


export const Photos = memo(() => {
    return(
        <PhotosTable />
    )
})