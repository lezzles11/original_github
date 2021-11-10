const access_token =
  "MC5ZWWdSaFJJQUFDNEF2WEdM.Zu-_vT5m77-9CO-_ve-_ve-_vS_vv73vv73vv73vv73vv70X77-977-977-977-977-9T--_ve-_vX7vv73vv73vv70k77-9OCU";
const secret = "4a8bfa06422925378c7cd84dea0c8c2f";
const ref = "YYgRIxIAAC8AvW_L";
const URL = `https://lezzlesportfolio.cdn.prismic.io/api/v2/documents/search?ref=Your_Ref&access_token=${access_token}`;

const url2 = `https://lezzlesportfolio.cdn.prismic.io/api/v2/documents/search?ref=Your_Ref&access_token=${secret}`;
console.log(url2);

let tryThis = `https://lezzlesportfolio.prismic.io/api/v2/documents/search?ref=${ref}`;

console.log(tryThis);

axios
  .get(
    "https://lezzlesportfolio.prismic.io/api/v2/documents/search?ref=YYgjkBIAAC4AvcKK#format=json"
  )
  .then((result) => {
    console.log(result.data.results);
  });
