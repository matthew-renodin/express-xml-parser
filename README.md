# express-xml-parser

- use `is-type` to check whethor a xml request
- use `raw-body` to get decoded text body from request
- and `xml2js` to parse to json

### Usage
===
```javascript
var options = {
  // options will apply to is-type
  type: ['xml'],    //default [ 'xml' ]

  // options will apply to raw-body
  limit: '1mb',     //default 100kb,
  encoding: 'utf8'  //default utf8,

  // options will apply to xml2js
  trim: false
};
app.use(xmlBodyParser(options));
```
