export const FontFamilyHeader = {
    fontFamily: 'Rosatom-Bold',
}

export const FontFamilySimpleText = {
    fontFamily: 'Rosatom-Regular',
}

export const FontFamilyLightText = {
    fontFamily: 'Rosatom-Light',
}

export const TextColorFirm = {
    color: '#003274'
}


export const BtnStyle = (matches) => {
    return {
        zIndex: 1,
        height: matches ? '20px' : '',
        margin: '0 1%',
        //background: 'linear-gradient(to top, #003274, #416eb1)',
        background: '#003274',
        border: '1px solid #003274',
        //boxShadow: '3px 3px 3px gray',
        //'&:active': { boxShadow: '3px 3px 3px transparent', }
        '&:hover': { background: '#003274', }
    }
}