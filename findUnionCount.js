function findUnion(a, b) {
    
    // Convert Set to Array and sort it
    const unionSet = new Set();
    a.forEach((element) => unionSet.add(element));
    b.forEach((element) => unionSet.add(element));
    
    return unionSet.size;
  }
  console.log(findUnion([1,2,3],[2]));