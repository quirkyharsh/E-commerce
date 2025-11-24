import React from 'react'
import './NewCollecetions.css'
import new_collecetion from '../Assets/Frontend_Assets/new_collections'
import { Item } from '../Items/item'

export const NewCollecetions = () => {
  return (
    <div className='newcollecetions'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collecetion">
            {new_collecetion.map((item, i) => (
                <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
        </div>
    </div>
  )
}
