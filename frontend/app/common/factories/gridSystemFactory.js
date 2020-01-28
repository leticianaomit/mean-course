angular.module('primeiraApp').factory('gridSystem', [function() {

    function toCssClasses(numbers) {
        const grid = ['xs', 'sm', 'md', 'lg']
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        cols.forEach((element, index)=> {
            classes += `col-${grid[index]}-${element} `
        })

        return classes
    }

    return { toCssClasses }
}])