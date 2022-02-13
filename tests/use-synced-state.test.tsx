import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SyncedStateProvider } from "../src";
import ControlledModals from "../docs-source/CodeSamples/ControlledModals";

describe("Use synced state hook", () => {
  it("Works as normal state hook if only single component used", () => {
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
    userEvent.type(input, "0");
    expect(entry).toHaveTextContent("0");

    userEvent.type(input, "25");
    expect(entry).toHaveTextContent("25");

    userEvent.type(input, "100");
    expect(entry).toHaveTextContent("100");
  });

  it("It allows only one state update at once", () => {
    render(<ControlledModals />, { wrapper: ({ children }) => <SyncedStateProvider>{children}</SyncedStateProvider> });

    let closeButtons = screen.queryAllByLabelText("close");
    expect(closeButtons.length).toBe(0);
    const clickButton = screen.getByRole("button", { name: "Click Me" });
    userEvent.click(clickButton);
    closeButtons = screen.queryAllByLabelText("close");
    expect(closeButtons.length).toBe(1);
  });
});
