import React from 'react';
import GoodsItem from './goods-item';

const GoodsList = ({goods = []}) => {

    if (goods.length === 0) {
        return (<h2>Товары отсутствуют</h2>);
    }

    return (
        <div className="goods">
            {goods.map((item) =>
                <GoodsItem item={item} key={item.mainId} />
            )}
        </div>
    );
};

export default GoodsList;