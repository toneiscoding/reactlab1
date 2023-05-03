import React from 'react'

const ItemList = (props) => {
    const items = props.items;

    const itemList = items.map((item) => {
        return <li key={item.id}>{item.name}</li>
    });

  return (
    <div>
        <ul>{itemList}</ul>
    </div>
  )
}

export default ItemList