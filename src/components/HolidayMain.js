import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Show from '../pages/HolidayShow';

const Main = (props) => {
    //STATE to hold API data
    const [HolidayItem, setHolidayItem] = useState(null);
    const URL = "http://localhost:4000/hol-registry/";
    const getHolidayItem = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setHolidayItem(data);
    };
    //Create with POST RegistryItem
    const createHolidayItem = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        getHolidayItem();
    };
    //Update with PUT Registry Item
    const updateHolidayItem = async (item, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        getHolidayItem();
    };
    //Delete with DELETE RegistryItem
    const deleteHolidayItem = async id => {
        await fetch(URL + id, {
            method: "delete",
        });
        getHolidayItem();
    };

    useEffect(() => getHolidayItem(), []);
    return (
        <main>
                <Route path="/">
                    <Show
                        HolidayItem={HolidayItem}
                        createHolidayItem={createHolidayItem} 
                        updateHolidayItem={updateHolidayItem}
                        deleteHolidayItem={deleteHolidayItem}
                        />
                </Route>
        </main>
    );
};
export default Main;