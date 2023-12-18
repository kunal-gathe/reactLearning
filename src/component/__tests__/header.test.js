import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from 'react-router-dom/server'

test("Logo should load on rendering header", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    // Check if logo is loaded
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummy.jpg")

  });
test("online Status Detect", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    // Check if logo is loaded
    const online = header.getAllByTestId("online");
    expect(online[0].innerHTML).toBe("online ")

  });
test("zero item in cart", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    // Check if logo is loaded
    const cart = header.getAllByTestId("cart");
    expect(cart[0].innerHTML).toBe("Cart - 0")

  });
