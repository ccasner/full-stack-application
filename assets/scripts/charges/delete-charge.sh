#ID=3 TOKEN=BAhJIiUzMmFhZGNhZjk5NTIyYTI3ZDM4MzJjN2I1ZmIyYzM4NwY6BkVG--456aa73cbc0d9515913b481302dbae42f22394f3 sh scripts/charges/delete-charge.sh
curl --include --request DELETE "http://localhost:4741/charges/${ID}" \
  --header "Authorization: Token token=$TOKEN"
