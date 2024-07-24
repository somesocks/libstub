#!/usr/bin/env bash

# expects to be run from workspace root
ROOT_DIR=.

command -v pnpm >/dev/null 2>&1 || { npm install -g pnpm; }
