const fs = require("fs");
const inquirer = require('inquirer');
const config = require('./config');

const questions = [
    {
        type: 'input',
        name: 'componentName',
        message: "Insert Component Name",
        validate: function (value) {
            var pass = value.match(/[A-Za-z]+/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid name';
        }
    }
];

function writeTemplates(componentName, extension, content) {
    fs.writeFile(componentName + ".component." + extension, content, function (err, data) {
        (err) ? console.log(`Error writing ${componentName + ".component." + extension} file.`) : console.log(`File ${componentName + ".component." + extension} created.`);
    });
};

(function generateTemplates() {
    let componentName = '';
    inquirer.prompt(questions).then(answers => {
        componentName = answers['componentName'];

        config.templates.forEach(element => {
            const currentTemplate = require(config.templatesFolderPath+"/"+element.templateName.split('.js')[0]);
            writeTemplates(componentName, element.extension, currentTemplate(componentName));
        });
    });
})();