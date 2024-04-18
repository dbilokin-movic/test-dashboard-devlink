"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormCheckbox({
  as: _Component = _Builtin.FormCheckboxWrapper,
  chProps = {},
  label = "Checkbox",
  formCheckboxValue = "false",
}) {
  return (
    <_Component className="form-checkbox" test={formCheckboxValue} {...chProps}>
      <_Builtin.FormCheckboxInput
        className="form-checkbox-icon"
        type="checkbox"
        name="Checkbox-2"
        data-name="Checkbox 2"
        required={false}
        checked={false}
        id="Checkbox-2"
        form={{
          type: "checkbox-input",
          name: "Checkbox 2",
        }}
        inputType="custom"
        customClassName="w-checkbox-input--inputType-custom"
        {...chProps}
      />
      <_Builtin.FormInlineLabel className="form-checkbox-label" {...chProps}>
        {label}
      </_Builtin.FormInlineLabel>
    </_Component>
  );
}
