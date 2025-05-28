import React, {useState} from 'react'
import './Homepage.css'

export const FRPDrop = ({setSlab, slab}) => {
    return (
        <>
            <select className='slabitem' onChange={(e) => setSlab(e.target.value)} value={slab} >
                <option value='' >--SELECT--</option>
                <option value='slabretrofit' >SLAB RETROFIT</option>
                <option value='rcbeam'>RC BEAM</option>
                <option value='pscslab'>PSC SLAB</option>
                <option value='tbeam'>T BEAM</option>
                <option value='noncircularcolumn'>NON CIRCULAR COLUMN</option>
                <option value='interiorrcbeam'>INTERIOR RC BEAM</option>
                <option value='shearexterior'>SHEAR EXTERIOR COLUMN</option>
            </select>
        </>
    )
}
