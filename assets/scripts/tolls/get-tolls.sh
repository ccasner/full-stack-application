#!/bin/bash

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/tolls"
curl "${API}${URL_PATH}" \
  --include \
  --request GET

echo
