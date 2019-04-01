const fs = require("fs");
const config = require('./config');

function writeTemplates(componentName, extension, content) {
    fs.writeFile(componentName + ".component." + extension, content, function (err, data) {
        (err) ? console.log(`Error writing ${componentName + ".component." + extension} file.`) : console.log(`File ${componentName + ".component." + extension} created.`);
    });
};

function generateTemplates(componentName) {
    if(componentName && componentName.match(/[A-Za-z]+/i)) {
        config.templates.forEach(element => {
            const currentTemplate = require(config.templatesFolderPath+"/"+element.templateName.split('.js')[0]);
            writeTemplates(componentName.toLowerCase(), element.extension, currentTemplate(componentName.toLowerCase()));
        });
    }
};

module.exports = (componentName) => generateTemplates(componentName);
