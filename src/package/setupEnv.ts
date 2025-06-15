/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { INITIAL_SETTINGS, Settings } from './appSettings';

export default (() => {
  if (typeof window === 'undefined') {
    // Prevent execution during SSR
    return INITIAL_SETTINGS;
  }

  const urlSearchParams = new URLSearchParams(window.location.search);

  for (const param of Object.keys(INITIAL_SETTINGS)) {
    if (urlSearchParams.has(param)) {
      try {
        const value = JSON.parse(urlSearchParams.get(param) ?? 'true');
        INITIAL_SETTINGS[param as keyof Settings] = Boolean(value);
      } catch (error) {
        console.warn(`Unable to parse query parameter "${param}"`);
      }
    }
  }

  if (INITIAL_SETTINGS.disableBeforeInput) {
    // @ts-expect-error
    delete window.InputEvent.prototype.getTargetRanges;
  }

  // @ts-ignore
  window.EXCALIDRAW_ASSET_PATH = process.env.EXCALIDRAW_ASSET_PATH;

  return INITIAL_SETTINGS;
})();
