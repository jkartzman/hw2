import React from "react";

export default class Workspace extends React.Component {
    render() {
        const { currentList, editItemCallback } = this.props;
        let names = ["","","","",""];
        if (currentList) {
            names = currentList.items;
        }
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id="edit-items">
                        <div id='item-1' className="top5-item" onDoubleClick={() => editItemCallback(1)}>{names[0]}</div>
                        <div id='item-2' className="top5-item" onDoubleClick={() => editItemCallback(2)}>{names[1]}</div>
                        <div id='item-3' className="top5-item" onDoubleClick={() => editItemCallback(3)}>{names[2]}</div>
                        <div id='item-4' className="top5-item" onDoubleClick={() => editItemCallback(4)}>{names[3]}</div>
                        <div id='item-5' className="top5-item" onDoubleClick={() => editItemCallback(5)}>{names[4]}</div>
                    </div>
                </div>
            </div>
        )
    }
}