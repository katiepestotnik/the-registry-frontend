// Show.js

// import dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';


//set show function to take in props
function Show(props) {
    //first, we need to set id variable, a registryItem variable, and an individual bookmark variable
    
    const id = props.match.params.id;

    //save registryItem as variable to make it easier
    const items = props.registryItem;

    //we are in the Show function, so now find the individual item to show
    const registryItem = items.find((singleItem) => {
        return singleItem._id === id //gives a boolean
    });
    //since we know the item to edit, we can pass that in
    const [editRegistryItem, setEditRegistryItem] = useState(registryItem);

    //handle change function
    const handleChange = (event) => {
        setEditRegistryItem({
        ...editRegistryItem, [event.target.name]: event.target.value
        });
    };

    //handle submit function
    const handleSubmit = (event) => {
        event.preventDefault() //prevents page refresh
        props.updateRegistryItem(editRegistryItem, registryItem._id);
        props.history.push('/'); //back to index
    }

    //remove a registry item
    const removeRegistryItem = () => {
        props.deleteRegistryItem(registryItem._id);
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
                value={editRegistryItem.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input
                className="input-style"
                type="text"
                value={editRegistryItem.url}
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
        <h1 className="show-headers">{registryItem.title}</h1>
        <h2 className="show-headers"><a href={registryItem.url} target="_blank" rel="noreferrer">{registryItem.url}</a></h2>
        </div>
        <button onClick={removeRegistryItem}id="delete" className="button-style">Delete</button>
        
    </section>
} 
    
export default Show

