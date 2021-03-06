import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs/react";
import centerDecorator from "../../../.storybook/decorators/centerDecorator";

import Checkbox from "./Checkbox";

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .addDecorator(centerDecorator)
  .add("Props", () => {
    const sizeOpts = {
      small: "small",
      normal: "normal",
      large: "large"
    };

    const colorOpts = {
      default: "default",
      success: "success",
      danger: "danger",
      warning: "warning"
    };

    const props = {
      text: text("text", "Option 1"),
      value: text("value", "amazing"),
      checked: boolean("checked", false),
      disabled: boolean("disabled", false),
      onChange: action("onChange"),
      // Variants
      size: select("size", sizeOpts, "normal"),
      checkboxColor: select("checkboxColor", colorOpts, "default")
    };

    return <Checkbox {...props} groupName="cbox" />;
  });
