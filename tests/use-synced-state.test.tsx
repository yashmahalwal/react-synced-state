import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SyncedStateProvider } from "../src";
import ControlledModals from "../docs-source/CodeSamples/ControlledModals";

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
    render(<ControlledModals />, { wrapper: ({ children }) => <SyncedStateProvider>{children}</SyncedStateProvider> });

    const clickButton = screen.getByRole("button", { name: "Click Me" });
    await userEvent.click(clickButton);

    expect(screen.queryByText("Dialog 1", { exact: false })).toBeTruthy();
    expect(screen.queryByText("Dialog 2", { exact: false })).toBeFalsy();
    expect(screen.queryByText("Alert 1", { exact: false })).toBeFalsy();
    expect(screen.queryByText("Drawer 1", { exact: false })).toBeFalsy();

    await userEvent.click(screen.getByLabelText("Close Dialog 1"));

    // expect(screen.queryByText("Dialog 1", { exact: false })).toBeFalsy();
    // expect(screen.queryByText("Dialog 2", { exact: false })).toBeFalsy();
    // expect(screen.queryByText("Alert 1", { exact: false })).toBeFalsy();
    // expect(screen.queryByText("Drawer 1", { exact: false })).toBeTruthy();
  });
});
