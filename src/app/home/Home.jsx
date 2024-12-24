import React from 'react';
import fkData from "../../data/products.json";

export default function Home() {
    const data = fkData;
    const sortData = data.map((item) => ({
        id: item.id,
        product: item.name,
        image: item.image,
        description: item.description,
        price: item.price,
        category: item.category.name,
        stock: item.stock,
        sold: item.sold,
        supplier: item.supplier.name,
        createdAt: item.createdAt,
    }));

    return (
        <div className="container mx-auto text-6xl">
            <h1 className="text-center text-4xl font-semibold py-10">Welcome, Mizan!</h1>

            <div className="scrollable-area">
                <div className="text">
                    <a className="logo" href="https://joostweddepohl.com">
                        If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.

                    </a>

                </div>
                <div className="text">
                    If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.
                </div>
                <div className="text">
                    If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.
                </div>
            </div>
            <div className="scrollable-area">
                <div className="text">
                    <a className="logo" href="https://joostweddepohl.com">
                        If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.

                    </a>

                </div>
                <div className="text">
                    If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.
                </div>
                <div className="text">
                    If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.
                </div>
            </div>
            <div className="scrollable-area">
                <div className="text">
                    <a className="logo" href="https://joostweddepohl.com">
                        If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.

                    </a>

                </div>
                <div className="text">
                    If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.
                </div>
                <div className="text">
                    If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.
                </div>
            </div>
        </div>
    )
}
