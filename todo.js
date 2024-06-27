const list = [{
  name: 'make dinner',
  date: '2022-12-22'
}, {
  name: 'wash dishes',
  date: '2022-12-22'
}];

rendorTodo();

function rendorTodo(){
  let todolisthtml='';

  for(let i=0;i<list.length;++i){
    const todo = list[i];
    const{name,date}=todo;
    const html = `
    <div>${name}</div>
    <div>${date}</div>
    <div>
      <button onclick="
      list.splice(${i},1);
      rendorTodo();
      " class="red">Delete</button>
    </div>
    `; 

    todolisthtml += html;
  }

  document.querySelector('.js-div').innerHTML = todolisthtml;
}

function dp(){
  const x = document.querySelector('.Add');
  const y = document.querySelector('.Addate');
  const name=x.value;
  const date=y.value;
  list.push({
    name,
    date
  });
  rendorTodo();
}


 
