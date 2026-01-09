// Break Statement and Continue statement

// 1) In switch case to break the flow once case is matched

// 2 ) Loops to break the loop/iterations

// print numbers from 1 to 100

// break the loop after index = 50

for (let index = 1; index <= 100; index++) {
  if (index == 50) {

    break;
  }

  // skip certain condition index = 22

  if (index == 22) {
    continue;
  }



  console.log(index);
}
