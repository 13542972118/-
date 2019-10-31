function stat(){
    let str = document.getElementById("str").value
    str1 = str.toLocaleLowerCase();
    let obj={}
    str1.split('').reduce((hzw, zlq) => {
        hzw[zlq] ? hzw[zlq]++ : hzw[zlq] = 1
        return obj
    }, {})
  document.getElementById('result').innerText = JSON.stringify(obj)
}