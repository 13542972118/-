function stat(){
  let str = document.getElementById("str").value
  let obj = {}

  let array= str.split("")
  array.sort()
  for (var i=0;i<str.length;i++) {
      obj[array[i]] = (obj[array[i]]+1) || 1;
  }
  document.getElementById('result').innerText = JSON.stringify(obj)
}