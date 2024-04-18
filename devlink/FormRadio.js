"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormRadio({
  as: _Component = _Builtin.FormRadioWrapper,
  inputProps = {},
  label = "Radio",
}) {
  return (
    <_Component
      className="form-radio"
      id="w-node-_1d01ad80-f98e-4450-65c4-96e46e8f3bef-6e8f3bef"
      {...inputProps}
    >
      <_Builtin.FormRadioInput
        className="form-radio-icon"
        type="radio"
        data-name="Radio 2"
        name="radio-2"
        value="Radio 2"
        required={false}
        id="radio-2"
        form={{
          type: "radio-input",
          name: "Radio 2",
        }}
        inputType="custom"
        customClassName="w-form-formradioinput--inputType-custom"
      />
      <_Builtin.FormInlineLabel className="form-radio-label">
        {label}
      </_Builtin.FormInlineLabel>
    </_Component>
  );
}
