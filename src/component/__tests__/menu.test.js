import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA_CART } from "../../mocks/data";
import RestaurantMenu from "../RestaurentMenu.js";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA_CART);
    },
  });
});



test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=> expect(body.getByTestId('menu')))
  const addMenuBtn = body.getAllByTestId('addMenuBtn');

  fireEvent.click(addMenuBtn[0])

  const cart = body.getByTestId('cart')
  console.log(cart);
  expect(cart.innerHTML).toBe("cart - 1")


});
