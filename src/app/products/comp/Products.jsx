import React from 'react';

import Tbl from '@/components/table/Tbl';
import { useProductCtx } from '../ctx/ProductCtx';


export default function Products() {
    const { products } = useProductCtx();
    return (
        <div>
            <Tbl header='products' data={products} />
        </div>
    )
}
