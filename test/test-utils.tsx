import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

const Providers = ({ children }: any) => {
  return <Provider store={store}> {children}</Provider>;
};

const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
