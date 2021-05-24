import React from "react";
import {Provider} from "react-redux";
import App from './todo/App'

export const Root = ({store}) => (
    <Provider store={store}> 
        <App />
    </Provider>
)

export default Root 