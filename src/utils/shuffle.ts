const shuffle = <T>(arr: T[]) => {
  let m = arr.length;

  while (m) {
    let i = Math.floor(Math.random() * m--);

    let tmp = arr[m];
    arr[m] = arr[i];
    arr[i] = tmp;
  }

  return arr;
};

export default shuffle;
