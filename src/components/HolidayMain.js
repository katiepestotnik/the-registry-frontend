import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Index from '../pages/Index';
import Show from '../pages/HolidayShow';

const Main = (props) => {
    //STATE to hold API data
    const [registryItem, setRegistryItem] = useState(null);
    const URL = "https://the-registry-app-backend.herokuapp.com/the-registry/";
    const getRegistryItem = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setRegistryItem(data);
    };
    //Create with POST RegistryItem
    const createRegistryItem = async (mark) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        });
        getRegistryItem();
    };
    //Update with PUT Registry Item
    const updateRegistryItem = async (mark, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        });
        getRegistryItem();
    };
    //Delete with DELETE RegistryItem
    const deleteRegistryItem = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        });
        getRegistryItem();
    };
    useEffect(() => getRegistryItem(), []);
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index registryItem={registryItem}
                        createRegistryItem={createRegistryItem} />
                </Route>
                <Route
                    path="/registry/:id"
                    render={(rp) => (
                        <Show
                            {...rp}
                            registryItem={registryItem}
                            updateRegistryItem={updateRegistryItem}
                            deleteRegistryItem={deleteRegistryItem}
                        />
                    )}
                />
            </Switch>
        </main>
    );
};
export default Main;