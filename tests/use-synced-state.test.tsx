import React, { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SyncedStateProvider } from "../src";
import ControlledModals from "../docs-source/CodeSamples/ControlledModals";
import { ProviderWrapper } from "./ProviderWrapper";
import QueueDemo from "../docs-source/CodeSamples/QueueDemo";
import PriorityQueueDemo from "../docs-source/CodeSamples/PriorityQueueDemo";

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

  it("Allows only one state update at once", async () => {
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

  it("Processes state updates in FIFO oder", async () => {
    render(<QueueDemo />, { wrapper: ProviderWrapper });

    const getCheckbox1 = () => screen.getByLabelText("State 1") as HTMLInputElement;
    const getCheckbox2 = () => screen.getByLabelText("State 2") as HTMLInputElement;
    const getCheckbox3 = () => screen.getByLabelText("State 3") as HTMLInputElement;

    const getSyncedCheckbox1 = () => screen.getByLabelText("Synced State 1") as HTMLInputElement;
    const getSyncedCheckbox2 = () => screen.getByLabelText("Synced State 2") as HTMLInputElement;
    const getSyncedCheckbox3 = () => screen.getByLabelText("Synced State 3") as HTMLInputElement;

    // For three boolean variables (values represented by a 3 bit number)
    async function makeValue(state1: boolean, state2: boolean, state3: boolean) {
      const checkbox1 = getCheckbox1();
      const checkbox2 = getCheckbox2();
      const checkbox3 = getCheckbox3();

      if (checkbox1.checked !== state1) {
        await userEvent.click(checkbox1);
      }

      if (checkbox2.checked !== state2) {
        await userEvent.click(checkbox2);
      }

      if (checkbox3.checked !== state3) {
        await userEvent.click(checkbox3);
      }
    }

    // 000 - None checked
    await makeValue(false, false, false);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 001 - 3
    await makeValue(false, false, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();

    // 011 - 3
    await makeValue(false, true, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();

    // 111 - 3
    await makeValue(true, true, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();

    // 101 - 3
    await makeValue(true, false, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();

    // 100 - 1
    await makeValue(true, false, false);
    expect(getSyncedCheckbox1()).toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 110 - 1
    await makeValue(true, true, false);
    expect(getSyncedCheckbox1()).toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 010 - 2
    await makeValue(false, true, false);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 011 - 2
    await makeValue(false, true, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 111 - 2
    await makeValue(true, true, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();
  });

  it("Processes state updates along with priority", async () => {
    render(<PriorityQueueDemo />, { wrapper: ProviderWrapper });

    const getCheckbox1 = () => screen.getByLabelText("State 1") as HTMLInputElement;
    const getCheckbox2 = () => screen.getByLabelText("State 2") as HTMLInputElement;
    const getCheckbox3 = () => screen.getByLabelText("State 3") as HTMLInputElement;

    const getSyncedCheckbox1 = () => screen.getByLabelText("Synced State 1") as HTMLInputElement;
    const getSyncedCheckbox2 = () => screen.getByLabelText("Synced State 2") as HTMLInputElement;
    const getSyncedCheckbox3 = () => screen.getByLabelText("Synced State 3") as HTMLInputElement;

    // For three boolean variables (values represented by a 3 bit number)
    async function makeValue(state1: boolean, state2: boolean, state3: boolean) {
      const checkbox1 = getCheckbox1();
      const checkbox2 = getCheckbox2();
      const checkbox3 = getCheckbox3();

      if (checkbox1.checked !== state1) {
        await userEvent.click(checkbox1);
      }

      if (checkbox2.checked !== state2) {
        await userEvent.click(checkbox2);
      }

      if (checkbox3.checked !== state3) {
        await userEvent.click(checkbox3);
      }
    }

    // 000 - None checked
    await makeValue(false, false, false);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 100 - 1
    await makeValue(true, false, false);
    expect(getSyncedCheckbox1()).toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 101 - 3
    await makeValue(true, false, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();

    // 111 - 3
    await makeValue(true, true, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();

    // 110 - 2
    await makeValue(true, true, false);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 010 - 2
    await makeValue(false, true, false);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).toBeChecked();
    expect(getSyncedCheckbox3()).not.toBeChecked();

    // 011 - 3
    await makeValue(false, true, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();

    // 001 - 3
    await makeValue(false, false, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();

    // 101 - 3
    await makeValue(true, false, true);
    expect(getSyncedCheckbox1()).not.toBeChecked();
    expect(getSyncedCheckbox2()).not.toBeChecked();
    expect(getSyncedCheckbox3()).toBeChecked();
  });
});
