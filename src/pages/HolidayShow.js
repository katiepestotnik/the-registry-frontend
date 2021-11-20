// Show.js
import { useState } from 'react';

function HolidayShow(props) {
    console.log("test")
    console.log(props);
    const id = props.match.params.id;
    const items = props.registryHolidayItem;
    const registryHolidayItem = items.find(p => p._id === id);
    const [editHolidayRegistryItem, setEditHolidayRegistryItem] = useState(registryHolidayItem);

    const handleChange = (event) => {
        setEditHolidayRegistryItem({
        ...editHolidayRegistryItem, [event.target.name]: event.target.value
        });
    };

    //handle submit function
    const handleSubmit = (event) => {
        event.preventDefault() //prevents page refresh
        props.updateHolidayRegistryItem(editHolidayRegistryItem, registryHolidayItem._id);
        props.history.push('/'); //back to index
    }

    //remove a registry item
    const removeHolidayRegistryItem = () => {
        props.deleteHolidayRegistryItem(registryHolidayItem._id);
        props.history.push('/'); //back to index
    }

    //goals - create div that can be targeted for styling, 
    //with displayed registry item info, i.e. a few static headers
    //add a button option for removing registry item
    //on submit, want to edit values of title and url to update registry item
    return <section className='full-page-style'>
        <form onSubmit={handleSubmit}>
            <input
                className="input-style"
                type="text"
                value={editHolidayRegistryItem.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input
                className="input-style"
                type="text"
                value={editHolidayRegistryItem.url}
                name="url"
                placeholder="url"
                onChange={handleChange}
            />
            <input
                className="button-style"
                type="submit"
                value="Update"
                name="submit"
            />
        </form>
        <div className="show-background">
        <h1 className="show-headers">{registryHolidayItem.itemName}</h1>
        <h2 className="show-headers">{registryHolidayItem.url}</h2>
        </div>
        <button onClick={removeHolidayRegistryItem}id="delete" className="button-style">Delete</button>
        
    </section>
} 
    
export default HolidayShow

