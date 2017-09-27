#ID=3 TOKEN=BAhJIiUzMmFhZGNhZjk5NTIyYTI3ZDM4MzJjN2I1ZmIyYzM4NwY6BkVG--456aa73cbc0d9515913b481302dbae42f22394f3 LOCATION=WESTON sh scripts/charges/update-charges.sh

curl --include --request PATCH "http://localhost:4741/charges/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "charge": {
      "location": "'"${LOCATION}"'"
    }
  }'
