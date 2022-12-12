const transformInArray = (string = '') => {
    const arrayOfStrings = string.split(',')
    return arrayOfStrings
}

const names = "Carla, Patrick, Junior, Samuel"

console.log(transformInArray(names))

const transformInArrayWithInvertedStrings = (string = '') => {
    const arrayOfStrings = string.split(',')
    const callbackReverse = (string) => {
        const auxArray = string.split('')
        const newString = auxArray.reverse()
        const reversedString = newString.join('')
        return reversedString
    }
    const arrayOfReversedStrings = arrayOfStrings.map(string => callbackReverse(string))
    return arrayOfReversedStrings
}

console.log(transformInArrayWithInvertedStrings(names))