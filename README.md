# Fatture In Cloud Js

[![Build Status](https://travis-ci.org/LasaleFamine/fatture-in-cloud-js.svg?branch=master)](https://travis-ci.org/LasaleFamine/fatture-in-cloud-js)

> Fatture in Cloud API wrapper for Javascript.

Using the `fetch` API to make the requests.

## Usage 

```javascript

const fattureInCloud = new FattureInCloud({api_key: 'yourApiKey', api_uid: 'yourApiUid')})

fattureInCloud
  .create(USER)
  .then(res => console.log(res))
  .catch(err => console.error(err))

```

## Methods

#### WIP