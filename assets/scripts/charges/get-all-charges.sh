#!/bin/bash

#TOKEN=BAhJIiUzMmFhZGNhZjk5NTIyYTI3ZDM4MzJjN2I1ZmIyYzM4NwY6BkVG--456aa73cbc0d9515913b481302dbae42f22394f3 sh scripts/charges/get-all-charges.sh


API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/charges"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
