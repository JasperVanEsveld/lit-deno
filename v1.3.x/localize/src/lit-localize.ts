/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {defaultMsg} from './internal/default-msg.ts';

import type {MsgFn} from './internal/types.ts';

export * from './internal/locale-status-event.ts';
export * from './internal/str-tag.ts';
export * from './internal/types.ts';

// TODO(aomarks) In a future breaking version, remove these imports so that the
// bulk of the code isn't included in bundles by default. In particular imagine
// the component library use-case where msg() calls are made, but there is no
// need to actually initialize any of the localization runtime.
export * from './internal/localized-controller.ts';
export * from './internal/localized-decorator.ts';
export * from './init/runtime.ts';
export * from './init/transform.ts';

/**
 * Make a string or lit-html template localizable.
 *
 * @param template A string, a lit-html template, or a function that returns
 * either a string or lit-html template.
 * @param options Optional configuration object with the following properties:
 *   - id: Optional project-wide unique identifier for this template. If
 *     omitted, an id will be automatically generated from the template strings.
 *   - desc: Optional description
 */
export let msg: MsgFn = defaultMsg;

let installed = false;

/**
 * Internal only. Do not use this function.
 *
 * Installs an implementation of the msg function to replace the default
 * identity function. Throws if called more than once.
 *
 * @internal
 */
export function _installMsgImplementation(impl: MsgFn) {
  if (installed) {
    throw new Error('lit-localize can only be configured once');
  }
  msg = impl;
  installed = true;
}
