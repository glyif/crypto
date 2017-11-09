const path = require('path');

module.exports = {
    "extends": [
        "airbnb"
    ],
    "rules": {
        "react/jsx-filename-extension": "off",
        "import/no-named-as-default": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "no-underscore-dangle": "off",
        "import/no-named-as-default-member": "off",
        "react/forbid-prop-types": "off"
    },
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
};