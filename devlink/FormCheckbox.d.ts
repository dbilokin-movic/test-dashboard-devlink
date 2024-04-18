import * as React from "react";
import * as Types from "./types";

declare function FormCheckbox(props: {
  as?: React.ElementType;
  chProps?: Types.Devlink.RuntimeProps;
  label?: React.ReactNode;
  formCheckboxValue?: Types.Builtin.Text;
}): React.JSX.Element;
