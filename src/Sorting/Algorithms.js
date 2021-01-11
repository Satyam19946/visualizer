export default function bubbleSort(data) {
  for (var i = 0; i < data.length-1; i++){
    for (var j = 0; j < data.length-i-1; j++){
      if (data[j] > data[j + 1]) {
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  console.log(data);
}