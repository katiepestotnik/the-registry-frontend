import { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import WeddingShow from '../pages/WeddingShow';
import WeddingEdit from "../pages/WeddingEdit";
import { Context } from "../Global";


const Main = (props) => {
    //Global State
    const [state, setState] = useContext(Context);
    const { url, token } = state;
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
    };
    const [ApiResponse, setApiResponse] = useState(null);
    const getApiResponse = async () => {
        const response = await fetch(url + "/api", {
            method: "get",
        });
        const data = await response.json();
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

            const productID = data.results[randomIndex].listing_id

            //get product name from API response 
            const productName = data.results[randomIndex].title

            //get product URL from API response
            const productURL = data.results[randomIndex].url

    
            //get product image from API response
            const productImage = data.results[randomIndex].MainImage.url_fullxfull
            products[i] = {
                id: productID,
                name: productName,
                image: productImage,
                url: productURL 
                };
            }
            setApiResponse(products) 
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
        if (state.token === null) {
            alert('Login not verified: Register or Reenter Login')
            props.history.push('/')
        }
        getWeddingItem();
        getApiResponse();
    }, [])
    return (
        <main>
            <Switch>
                <Route exact path="/wed-registry">
                    <WeddingShow
                        WeddingItem={WeddingItem}
                        ApiResponse={ApiResponse}
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