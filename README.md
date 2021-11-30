# The Registry

The Registry is a Javascript application for saving your favorite links on the Internet!

## Installation

No installation is required, please see usage for the link to The Registry app.

## Usage

<a href="https://the-registry.netlify.app/">Click here to use The Registry</a>

## Component Tree

<img src="./registrycomponents.png" alt="component tree">

React Router Table 

    -> App
    -> Global
      -> Header
        -> Switch
          ->Route exact path="/"
            ->Home
          ->Route path="/signup"
            ->Signup
            state={state}
          ->Route path="/login"
            ->Login
            state={state}
          ->Route path="/registry"
            ->Registry
            state={state}
          ->Route path="wed-registry"
            ->WeddingMain
            state={state}
            WeddingItem={WeddingItem}
            ApiResponse={ApiResponse}
            createWeddingItem={createWeddingItem} 
            deleteWeddingItem={deleteWeddingItem}
          -> Route path: "/wed-registry/:id
            ->WeddingEdit
              WeddingItem={WeddingItem}
              updateWeddingItem={updateWeddingItem} 
            ->Route path="hol-registry"
            ->HolidayMain
            state={state}
             HolidayItem={HolidayItem}
             ApiResponse={ApiResponse}
             createHolidayItem={createHolidayItem} 
             deleteHolidayItem={deleteHolidayItem}
           -> Route path="hol-registry/:id
            ->HolidayEdit
              HolidayItem={HolidayItem}
              updateHolidayItem={updateHolidayItem}

## Technologies used

- Javascript

- HTML

- CSS

- React

- Bootstrap

- mdb-react-ui-kit


## Backend Repository

[The Registry Backend Repository link](https://github.com/katiepestotnik/the-registry-backend)

Created with care by Gianelle, Katie, Lydia
