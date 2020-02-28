import "@babel/polyfill"
import { Provider } from "react-redux"
import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import ReactDOM from "react-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import * as theme from "./theme"
import store from "./store"
import graphqlClient from "./api/graphqlClient"
import AppRouter from "./components/Routing/AppRouter"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    html,body,#app{
        font-family: 'Roboto', sans-serif !important;
        width:100%;
        height:100%;
    }
    html,body{
        margin:0;
        padding:0;
    }
`
ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={graphqlClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <AppRouter />
            </ThemeProvider>
        </ApolloProvider>
    </Provider>,
    document.getElementById("app")
)
