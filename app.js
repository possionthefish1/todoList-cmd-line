const list = {}
let count = 0


setTimeout(function() {
  while(true){
    let select = prompt("What do you want to do? choose 'new','list' or 'delete' or you can 'quit'").toLowerCase().trim()
    if(select === 'new' || select === 'mew'){
      let newInput = prompt("What do you want to add to the list?")
      list[count] = newInput
      count++
    }
    else if(select === 'list'){
      if(Object.keys(list).length === 0){
        console.log(`There is currently nothing in the Todo list.`)
      } else {
        console.log('The current items in the list are:');
        for (let key in list){
          console.log(`${key} : "${list[key]}"`)
        }
      }
    } else if(select === 'delete'){
      let key = prompt(`Please enter the correct key.`)
      if(key in Object.keys(list)){
        console.log(`You remove ${list[key]} from the Todo list`);
      } else {
        console.log('Invalid key return to choices menu');
      }
    }
    else if (select === 'quit'){
      console.log('Exiting Have a good day!')
      break
    } else{
      console.log('do you know how to read? wrong choice!');
    }
  }
}, 100)