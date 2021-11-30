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

    const [ApiResponse, setApiResponse] = useState(null);
    // const URL = "http://localhost:4000/api";
    const getApiResponse = async () => {
        const response = await fetch(url + "/api", {
            method: "get",
        });
        const data = await response.json();
        setApiResponse(data);


    //function that can get a random number from 1-25, 
        //we'll use this to target a random result from our search results object!
        function randomNumber(){
            const randNum = Math.floor(Math.random() * 25)
            return randNum
            }
            //categories response is an array, let's loop through the categories
            let products = []
        
        for (let i=0; i<10; i++) {
            //get random number which we will use as index
            const randomIndex = randomNumber()

            //get product name from API response 
            const productName = data.results[randomIndex].title

            //get product URL from API response
            const productURL = data.results[randomIndex].url

    
            //get product image from API response
            const productImage = data.results[randomIndex].MainImage.url_fullxfull
            products[i] = {
                name: productName,
                image: productImage,
                url: productURL 
                };
            }
            setApiResponse(products) 
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
        
        getApiResponse()
        
    }, []);
    return (
        <main>
            <Switch>
                <Route exact path="/hol-registry">
                    <HolidayShow
                        HolidayItem={HolidayItem}
                        ApiResponse={ApiResponse}
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