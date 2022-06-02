import React from "react-dom";

export default function Search(props) {
  // function procurar (value, index, array){
  //   return value.search(/churrascaria/i)>=0
  // }
  return function() {
    console.log(this.props.array);
    var ret = this.props.array.filter(procurar);
    console.log(ret);
    return procurarIndex(ret, this.props.array);
  };

  function procurar(value, index, array) {
    return value.search(`/` + this.props.search + `/i`) >= 0;
  }
  function procurarIndex(value, array) {
    return array.indexOf(value[0]);
  }
}

// function achar2(array) {
//   var ret = array.filter(procurar2)
//   return procurarIndex(ret,array);
// }
// function procurar2 (value, index, array){
//   return value.search(/redario/i)>=0
// }
// function achar3(array) {
//   var ret = array.filter(procurar3)
//   return procurarIndex(ret,array);
// }
// function procurar3 (value, index, array){
//   return value.search(/playground/i)>=0
// }

// function achar4(array) {
//   var ret = array.filter(procurar4)
//   return procurarIndex(ret,array);
// }
// function procurar4 (value, index, array){
//   return value.search(/pet/i)>=0
// }

// function achar5(array) {
//   var ret = array.filter(procurar5)
//   return procurarIndex(ret,array);
// }
// function procurar5 (value, index, array){
//   return value.search(/bicicleta/i)>=0
// }

// function achar6(array) {
//   var ret = array.filter(procurar6)
//   return procurarIndex(ret,array);
// }
// function procurar6 (value, index, array){
//   return value.search(/praca/i)>=0
// }
