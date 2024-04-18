"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Input({
  as: _Component = _Builtin.FormTextInput,
  inputProps = {},
}) {
  return (
    <_Component
      autoFocus={false}
      maxLength={256}
      name="field-2"
      data-name="Field 2"
      placeholder="Example Text"
      type="text"
      disabled={false}
      required={true}
      id="field-2"
      {...inputProps}
    />
  );
}
