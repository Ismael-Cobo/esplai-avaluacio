export const sort = (a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  
}