import React, { useState } from 'react';
import './CSS/TabletBox.css';
import { Tablet } from './Tablet';

export interface ITablet {
    id: number
    name: string
    notes: string
}

interface ITabletBoxProps {

}

export function TabletBox(props: ITabletBoxProps) {

    const [tablets, setTablets] = useState([{ id: 0, name: "Ежедневные заметки", notes: "notes 0" },
                                            { id: 1, name: "Идеи", notes: "notes 1" },
                                            { id: 2, name: "Долгосрочные покупки", notes: "notes 1" },
                                            { id: 3, name: "Важное", notes: "notes 1" }]);

    function addTabletClick() {
        let newTablet = { id: Date.now(), name: "New header", notes: "new" };
        setTablets([...tablets, newTablet]);
    }

    function removeTabletClick(id: number) {
        let newTablets = tablets.filter(t => t.id !== id);
        setTablets(newTablets);
    }

    return (
        <div className='TabletBox'>
            <button className='Add-new-item-button' onClick={addTabletClick}> Добавить список </button>
            {tablets.map(item =>
                <Tablet tablet={item} onRemovedTablet={removeTabletClick} key={item.id} />)}
        </div>
    );
}
