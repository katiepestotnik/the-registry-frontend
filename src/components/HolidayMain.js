import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import HolidayShow from '../pages/HolidayShow';
import HolidayEdit from "../pages/HolidayEdit";
import { Context } from "../Global";


const Main = (props) => {
        //Global State
    const [state, setState] = useContext(Context);
    const { url, token } = state;
    //STATE to hold API data
    const [HolidayItem, setHolidayItem] = useState(null);
    //const URL = "http://localhost:4000/hol-registry/";
    const getHolidayItem = async () => {
        const response = await fetch(url + "/hol-registry/", {
            method: "get",
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "application/json",
                "Accept":"application/json"
            }
        });
        const data = await response.json();
        setHolidayItem(data);
    };
    //Create with POST RegistryItem
    const createHolidayItem = async (item) => {
        fetch(url + "/hol-registry/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        }).then(response => response.json()).then(data => {
            getHolidayItem();
        });
    };
    //Update with PUT Registry Item
    const updateHolidayItem = async (item, id) => {
        fetch(url + "/hol-registry/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            },
            body: JSON.stringify(item)
        }).then(response => response.json()).then(data => {
            getHolidayItem();
        });
    };
    //Delete with DELETE RegistryItem
    const deleteHolidayItem = async id => {
        fetch(url + "/hol-registry/" + id, {
            method: "delete",
            headers: {
                Authorization: `bearer ${token}` 
            }
        }).then(response => response.json()).then(data => {
            getHolidayItem();
        });
    };
    useEffect(() => {
        if (state.token === null) {
            alert('Login not verified: Register or Reenter Login')
            props.history.push('/')
        }
        getHolidayItem()
    }, []);
    return (
        <main>
            <Switch>
                <Route exact path="/hol-registry">
                    <HolidayShow
                        HolidayItem={HolidayItem}
                        createHolidayItem={createHolidayItem} 
                        deleteHolidayItem={deleteHolidayItem}
                        />
                </Route>
                <Route 
          path="/hol-registry/:id"
          render={(rp) => (
            <HolidayEdit 
              {...rp}
              HolidayItem={HolidayItem}
              updateHolidayItem={updateHolidayItem}
            />
          )}
        />
            </Switch>
        </main>
    );
};
export default Main;