export function createUser(id, title, description, user) {
  return {
    id: id,
    title: title,
    description: description,
    user: user,
    completed: false,
  };
}

// copies all object in array with full copy.
export function copyArrayOfObject(arr) {
  // Kita membuat duplikat dari state yang memiliki isi yang sama persis.
  const copyArray = [];
  arr.forEach((eachValue) => {
    // Ternyata: eachValue adalag sebuah object,
    // karna dia adalah sebuah object sudah pasti itu menggunakan
    // pass by reference.
    // Oleh karena itu kita juga harus membuat duplikat dari si eachValue.
    //
    // Ini sebagai landasan teman-teman memahami pass-by-refrence,
    // immutable data structure, shallow and deep copy.
    // Nantinya ketika sudah terbiasa kita akan mempertimbangkan menggunkan
    // library: https://immerjs.github.io/immer.

    const copyEachValue = Object.assign({}, eachValue);
    copyArray.push(copyEachValue);
  });

  return copyArray;
}
