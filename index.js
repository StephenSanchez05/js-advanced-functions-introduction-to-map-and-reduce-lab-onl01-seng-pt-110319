// Your code here
function mapToNegativize(sourceArray) {
    const map1 = sourceArray.map(x => x * -1);
    return map1

}

function mapToNoChange(sourceArray) {
    const map2 = sourceArray.map(x => x);
    return map2
}

function mapToDouble(sourceArray) {
    const map3 = sourceArray.map(x => x * 2);
    return map3
}

function mapToSquare(sourceArray) {
    const map4 = sourceArray.map(x => Math.pow(x, 2));
    return map4
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }