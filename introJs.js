
function hof(cb){
    console.log(cb) //function definition
    cb()
}
  
function sample(){
    console.log('sample executed')
}

hof(() => {sample()})


function hof2(cb){
    console.log(cb) //function definition
    cb()
}
  
function sample2(){
    console.log('sample executed')
}

hof(sample2)