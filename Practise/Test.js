let arr = [[1, 2], 3, [4, 5], [6, 7, [8, 9]]]

// let resultArr = [...arr]

// let resultArr = arr.flat(2)

function flattenArr (arr, depth = 1) {

  let result = []

  arr.forEach(arr => {

    if(Array.isArray(arr) && depth > 0) {

        result.push(...flattenArr(arr, depth - 1))

    } else {
        result.push(arr)
    }
  })

  return result
  
}

console.log(flattenArr(arr, 2))
