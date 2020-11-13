import React from 'react';
import { render } from "@testing-library/react";
import App from '../components/counter';
import { Provider } from "react-redux";
import userEvent from '@testing-library/user-event';
import store from "../redux/store";

const AppComponent = () => {
  return render(
    <Provider store={store} >
    <App />
  </Provider>
  )
}
describe("APP", () => {
  it("should render the component", () => {
      const { asFragment } = AppComponent();
      expect(asFragment(<App />)).toMatchSnapshot()
    });
 it("increment", () => {
    const { getByLabelText } = AppComponent();
    const incrementButton = getByLabelText("incrementButton")
    const value = getByLabelText("value")
    const before = parseInt(value.innerHTML, 10);
    userEvent.click(incrementButton)
    expect(parseInt(value.innerHTML)).toBe(before + 1)
  })
it("decrement", () => {
    const { getByLabelText } = AppComponent();
    const decrementButton = getByLabelText("decrementButton")
    const value = getByLabelText("value")
    const before = parseInt(value.innerHTML, 10);
    userEvent.click(decrementButton)
    expect(parseInt(value.innerHTML)).toBe(before - 1)
  })
})
