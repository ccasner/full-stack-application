#!/bin/bash

#TOKEN=BAhJIiUzMmFhZGNhZjk5NTIyYTI3ZDM4MzJjN2I1ZmIyYzM4NwY6BkVG--456aa73cbc0d9515913b481302dbae42f22394f3 LOCATION=LEE PRICE=0.25 DATE=2017-09-09 sh scripts/charges/create-charge.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/charges"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "charge": {
      "location": "'"${LOCATION}"'",
      "price": "'"${PRICE}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
