/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

export * from "../../reactive-element/src/reactive-element.ts";
export * from "../../lit-html/src/lit-html.ts";
export * from "./lit-element.ts";
export * from "./decorators.ts";

// TODO: link to docs on the new site
console.warn(
  "The main 'lit-element' module entrypoint is deprecated. Please update " +
    "your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' " +
    "or import from 'lit-element/lit-element.ts'.",
);
