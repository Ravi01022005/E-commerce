import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from './wrapper/cartcount.jsx'
import Product_context from './wrapper/prouct_context.jsx'
import { Description_provider } from './wrapper/Cart_page_details_context'
import { BrowserRouter } from 'react-router-dom' 
 import { ItemsProvider } from './wrapper/context_from_json.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <ItemsProvider>
 <Product_context>
<Description_provider>
<Provider>
<BrowserRouter>      
<App/>
</BrowserRouter> 
</Provider>
</Description_provider>
</Product_context>
</ItemsProvider>
  )
