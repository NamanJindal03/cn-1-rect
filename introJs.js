const obj = {
    random(){
        return () =>{console.log(this)}
    }
}
const newFunc = obj.random(); //obj
newFunc()

// setTimeout(obj.random, 1000)