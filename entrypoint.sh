#!/bin/bash

set -e

export NEXT_PUBLIC_API_PREFIX=${CONSOLE_API_URL}
export NEXT_PUBLIC_PUBLIC_API_PREFIX=${APP_API_URL}

pm2 start ./pm2.json --no-daemon
