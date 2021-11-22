import { useState } from 'react';

function WeddingShow(props) {
    console.log("test")
    console.log(props);
    const id = props.match.params.id;
    const items = props.registryWeddingItem;
    const registryWeddingItem = items.find(p => p._id === id);
    const [editWeddingRegistryItem, setEditWeddingRegistryItem] = useState(registryWeddingItem);

    const handleChange = (event) => {
        setEditWeddingRegistryItem({
        ...editWeddingRegistryItem, [event.target.name]: event.target.value
        });
    };

    //handle submit function
    const handleSubmit = (event) => {
        event.preventDefault() //prevents page refresh
        props.updateWeddingRegistryItem(editWeddingRegistryItem, registryWeddingItem._id);
        props.history.push('/'); //back to index
    }

    //remove a registry item
    const removeWeddingRegistryItem = () => {
        props.deleteWeddingRegistryItem(registryWeddingItem._id);
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
                value={editWeddingRegistryItem.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input
                className="input-style"
                type="text"
                value={editWeddingRegistryItem.url}
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
        <h1 className="show-headers">{registryWeddingItem.itemName}</h1>
        <h2 className="show-headers">{registryWeddingItem.itemDescription}</h2>
        </div>
        <button onClick={removeWeddingRegistryItem}id="delete" className="button-style">Delete</button>
        
    </section>
} 
    
export default WeddingShow

