function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function configTitle(string) {
    let temp = string.split('-');
    const arr = temp.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return arr.join(' ');
}

export { capitalizeFirstLetter, configTitle };