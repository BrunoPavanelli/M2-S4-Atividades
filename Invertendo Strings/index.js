const transformInArray = (string = '') => {
    console.log(string)
    const arrayOfStrings = string.split(',')
    return arrayOfStrings
}

const names = "Carla, Patrick, Junior, Samuel"

console.log(transformInArray(names))