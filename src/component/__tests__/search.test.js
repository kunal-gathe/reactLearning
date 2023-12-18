import { render, waitFor } from "@testing-library/react"
import Body from "../Body"
import {StaticRouter} from 'react-router-dom/server'
import { Provider } from "react-redux"
import store from '../../utils/store'
import { RESTAURANT_DATA } from "../../mocks/data"

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(RESTAURANT_DATA);
      },
    });
  });

test("shimmer is rendered", ()=>{
    let body= render(
        <StaticRouter >
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    let shimmer = body.getByTestId("shimmer")
    expect(shimmer.children.length).toBe(15)
})
test("shimmer is rendered", async ()=>{
    let body= render(
        <StaticRouter >
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(body.getByTestId("searchBtn")));

    let restList = body.getByTestId("restList")
    expect(restList.children.length).toBe(9)
})