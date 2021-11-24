import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import WeddingShow from '../pages/WeddingShow';
import WeddingEdit from "../pages/WeddingEdit";
import { Context } from "../Global";


const Main = (props) => {
    //Global State
    const [state, setState] = useContext(Context);
    const { url, token } = state;
    console.log("this is state", state)
    //STATE to hold API data
    const [WeddingItem, setWeddingItem] = useState(null);
    // const URL = "http://localhost:4000/wed-registry/";
    const getWeddingItem = async () => {
        const response = await fetch(url + "/wed-registry/", {
            method: "get",
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "application/json",
                "Accept":"application/json"
            }
        });
        const data = await response.json();
        setWeddingItem(data);
        console.log(data)
    };
    //Create with POST RegistryItem
    const createWeddingItem = async (item) => {
        fetch(url + "/wed-registry/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        }).then(response => response.json()).then(data => {
            getWeddingItem();
        });

    };
    //Update with PUT Registry Item
    const updateWeddingItem = async (item, id) => {
        fetch(url + "/wed-registry/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            },
            body: JSON.stringify(item)
        }).then(response => response.json()).then(data => {
            getWeddingItem();
        });
    };
    //Delete with DELETE RegistryItem
    const deleteWeddingItem = async id => {
        fetch(url + "/wed-registry/" + id, {
            method: "delete",
            headers: {
                Authorization: `bearer ${token}` 
            }
        }).then(response => response.json()).then(data => {
            getWeddingItem();
        });

    };
    useEffect(() => {
        getWeddingItem();
    }, [])
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