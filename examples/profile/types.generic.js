module.exports = {
    offset: {
        name: 'fm-input',
        type: 'text',
        pattern: /^([\+\-]?(100%|\d{1,2}%|\d{1,4}px)?|center)$/.toString(),
        hint: '(+/-) 0-100% or 0-9999px or center'
    },
    size: {
        name: 'fm-input',
        type: 'text',
        pattern: /^\d+(\.\d+)?(%|px)?$/.toString(),
        hint: '[Number] or [Number]px or [Number]%'
    },
    numberOrAuto: {
        name: 'fm-input',
        type: 'text',
        pattern: /^\d+|auto$/.toString(),
        hint: '[Number] or "auto"'
    }
}