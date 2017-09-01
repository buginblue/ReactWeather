function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found', 78);
}

getTempCallback ('London', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('London').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
})

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & B need to be numbers');
    }
  });
}

addPromise(3, 4).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
})
