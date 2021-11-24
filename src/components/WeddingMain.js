import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import WeddingShow from '../pages/WeddingShow';
import WeddingEdit from "../pages/WeddingEdit"

const Main = (props) => {
    //STATE to hold API data
    const [WeddingItem, setWeddingItem] = useState(null);
    const URL = "http://localhost:4000/wed-registry/";
    const getWeddingItem = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setWeddingItem(data);
    };
    //Create with POST RegistryItem
    const createWeddingItem = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        getWeddingItem();
    };
    //Update with PUT Registry Item
    const updateWeddingItem = async (item, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        getWeddingItem();
    };
    //Delete with DELETE RegistryItem
    const deleteWeddingItem = async id => {
        await fetch(URL + id, {
            method: "delete",
        });
        getWeddingItem();
    };

    useEffect(() => getWeddingItem(), []);
    return (
        <main>
            <Switch>
                <Route exact path="/wed-registry">
                    <WeddingShow
                        WeddingItem={WeddingItem}
                        createWeddingItem={createWeddingItem} 
                        deleteWeddingItem={deleteWeddingItem}
                        />
                </Route>
                <Route 
          path="/wed-registry/:id"
          render={(rp) => (
            <WeddingEdit 
              {...rp}
              WeddingItem={WeddingItem}
              updateWeddingItem={updateWeddingItem}
            />
          )}
        />
            </Switch>
        </main>
    );
};
export default Main; 