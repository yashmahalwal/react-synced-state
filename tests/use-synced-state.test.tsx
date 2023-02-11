import React, { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SyncedStateProvider } from "../src";
import ControlledModals from "../docs-source/CodeSamples/ControlledModals";
import { ProviderWrapper } from "./ProviderWrapper";

describe("Use synced state hook", () => {
  it("Works as normal state hook if only single component used", async () => {
    const Component: React.FC = () => {
      const [value, setValue] = useState(100);
      return (
        <main>
          <p>{value}</p>
          <label htmlFor="Input">
            Input{" "}
            <input
              type="number"
              id="Input"
              name="Input"
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
            />
          </label>
        </main>
      );
    };
    render(<Component />, { wrapper: ({ children }) => <SyncedStateProvider>{children}</SyncedStateProvider> });

    const entry = document.getElementsByTagName("p")[0];
    const input = screen.getByLabelText("Input");

    expect(entry).toHaveTextContent("100");
    await userEvent.type(input, "0");
    expect(entry).toHaveTextContent("0");

    await userEvent.type(input, "25");
    expect(entry).toHaveTextContent("25");

    await userEvent.type(input, "100");
    expect(entry).toHaveTextContent("100");
  });

  it("It allows only one state update at once", async () => {
    render(<ControlledModals />, { wrapper: ProviderWrapper });

    const getDialog1 = () => screen.queryByText("Dialog 1 title");
    const getDialog2 = () => screen.queryByText("Dialog 2 title");
    const getDrawer = () => screen.queryByText("Drawer title");
    const getAlert = () => screen.queryByText("Alert title", { exact: false });

    const close = async () => {
      const button = screen.queryByRole("button", { name: /close/i });
      expect(button).toBeTruthy();
      await userEvent.click(button!);
    };

    const clickButton = screen.getByRole("button", { name: "Click Me" });
    await userEvent.click(clickButton);

    await waitFor(() => expect(getDialog1()).toBeTruthy());
    expect(getDrawer()).toBeFalsy();
    expect(getAlert()).toBeFalsy();
    expect(getDialog2()).toBeFalsy();
    await close();

    await waitFor(() => expect(getDrawer()).toBeTruthy());
    expect(getDialog1()).toBeFalsy();
    expect(getAlert()).toBeFalsy();
    expect(getDialog2()).toBeFalsy();
    await close();

    await waitFor(() => expect(getAlert()).toBeTruthy());
    expect(getDialog1()).toBeFalsy();
    expect(getDrawer()).toBeFalsy();
    expect(getDialog2()).toBeFalsy();
    await close();

    await waitFor(() => expect(getDialog2()).toBeTruthy());
    expect(getDialog1()).toBeFalsy();
    expect(getDrawer()).toBeFalsy();
    expect(getAlert()).toBeFalsy();
    await close();

    expect(getDialog1()).toBeFalsy();
    expect(getDrawer()).toBeFalsy();
    expect(getAlert()).toBeFalsy();
    expect(getDialog2()).toBeFalsy();
  });
});
