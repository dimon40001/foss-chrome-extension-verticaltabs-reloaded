# Vertical Tabs Reloaded

This is a fork of original **Vertical Tabs** by Norio Shimizu extension.
It didn't receive updates after version 2.0.2 and at some point became incompatible with the current version of 
Google Chrome.

Chrome Store (Vertical Tabs original version):
https://chromewebstore.google.com/detail/verticaltabs/imimolldggofidcmfdkcffpjcgaggoaf

GitHub:
https://github.com/dimon40001/foss-chrome-extension-verticaltabs-original

# TODO

- [ ] MV3 vs MV2: Firefox stops the background script for Temporary Add-ons. So MV2 should be used. Or signing add-on by Mozilla.

# Description

Simple & Quick Vertical Tab Extension. Search(filter) Tabs, Drag&Drop Rearrange Tabs, Tabs Counter,
Keyboard Control, Vertical View

Simple Vertical Tabs for power user.

Version 2026.02
- based on original version 2.0.2 by Norio Shimizu
- support Chrome version > 67
- badge color represents badge count level (normal, warning (>20 tabs), critical (>50 tabs))
- updated Manifest version to 3.0

# How to install

The code is maintained separately for Google Chrome and Mozilla Firefox.

Chrome uses `.crx`, Firefox uses `.xpi` extension for their AddOns.

Clone the repository locally then proceed with installation.

1. Chrome

- open `chrome://extensions/`
- use `Load unpacked` and point to the `chrome` extension directory.

Once installed the extension is there until deleted manually.

1. Firefox

3 options available:

- `about:debugging#/runtime/this-firefox` for loading add-on as temporary (will be removed on next start)
- `about:addons` install the .xpi file signed by Mozilla
- install normally from `addons.mozilla.org` if available
