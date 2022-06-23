type Style = Record<string, string | number>

function Unmarshal(style:Style) {
    let _style = '';

    Object.entries(style).forEach(item => {
        const [key, value] = item;

        _style += `${key}: ${value};`
    })

    return _style;
}

export default {
    Unmarshal
}