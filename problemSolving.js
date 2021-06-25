function rotateLeft(a, d) {
    let arrayRotation = [];

    for (let i = d; i < a.length; i++) {
      arrayRotation.push(a[i]);
    }

    for (let i = 0; i < d; i++) {
      arrayRotation.push(a[i]);
    }

    return arrayRotation;
  }
