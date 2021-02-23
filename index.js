const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addVariant, config, e, postcss }) {
    const groupPseudoClassVariant = function(pseudoClass) {
        return ({ modifySelectors, separator }) => {
            return modifySelectors(({ className }) => {
                return `.group:nth-child(`+pseudoClass+`) .${e(`group-`+pseudoClass+`${separator}${className}`)}`
            });
        };
    };
    addVariant('group-even', groupPseudoClassVariant('even'));
    addVariant('group-odd', groupPseudoClassVariant('odd'));
});