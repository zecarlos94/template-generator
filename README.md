# Agentifai V3 Templates

This npm package allows the creation of HTML and SCSS files from templates for Angular components. 

## How To Use

After running ```ng generate component {componentName}``` you should run 

```
const plugin = require('agentifai-v3-templates');
plugin('ComponentNameDummy');
```

The latter will create the HTML and SCSS barebones.

## How To Install

Run ```npm i agentifai-v3-templates --save-dev```(https://www.npmjs.com/package/agentifai-v3-templates) to install this npm package in your Angular application.
