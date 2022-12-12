const transformInArray = (string = '') => {
    const arrayOfStrings = string.split(',')

    return arrayOfStrings
}

const names = "Carla, Patrick, Junior, Samuel"

console.log(transformInArray(names))

const transformInArrayWithInvertedStrings = (string = '') => {
    const arrayOfStrings = transformInArray(names)

    const callbackReverse = (string) => {
        const auxArray = string.split('')
        const reversedArray = auxArray.reverse()
        const reversedString = reversedArray.join('')
        return reversedString
    }

    const arrayOfReversedStrings = arrayOfStrings.map(string => callbackReverse(string))

    return arrayOfReversedStrings
}

console.log(transformInArrayWithInvertedStrings(names))