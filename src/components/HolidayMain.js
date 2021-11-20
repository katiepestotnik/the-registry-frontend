import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/IndexHoliday';
import Show from '../pages/HolidayShow';
//comment
const Main = (props) => {
    //STATE to hold API data
    const [registryHolidayItem, setHolidayRegistryItem] = useState(null);
    const URL = "http://localhost:4000/hol-registry/";
    const getHolidayRegistryItem = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setHolidayRegistryItem(data);
    };
    //Create with POST RegistryItem
    const createHolidayRegistryItem = async (mark) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        });
        getHolidayRegistryItem();
    };
    //Update with PUT Registry Item
    const updateHolidayRegistryItem = async (mark, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        });
        getHolidayRegistryItem();
    };
    //Delete with DELETE RegistryItem
    const deleteHolidayRegistryItem = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        });
        getHolidayRegistryItem();
    };

    useEffect(() => getHolidayRegistryItem(), []);
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index registryHolidayItem={registryHolidayItem}
                        createHolidayRegistryItem={createHolidayRegistryItem} />
                </Route>
                <Route
                    path="/hol-registry/:id"
                    render={(rp) => (
                        <Show
                            {...rp}
                            registryHolidayItem={registryHolidayItem}
                            updateHolidayRegistryItem={updateHolidayRegistryItem}
                            deleteHolidayRegistryItem={deleteHolidayRegistryItem}
                        />
                    )}
                />
            </Switch>
        </main>
    );
};
export default Main;