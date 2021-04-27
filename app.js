'use stric';

function priceRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(typeof priceRandom);
  let number=parseInt(priceRandom());

//   i tried to make a function typeof as a number unsing .toString but the another function stop i mean it didnt work

  console.log(number);
  let condition='';
  if (number > 200){
      condition='new';
  }else{
    condition='used';
  }
  
  let mobileArr=[];
  function Mobile(user, type){
      this.user=user;
      this.type=type;
      this.price=priceRandom(100,500);
      this.condition=condition;
      mobileArr.push(this);
  }


  function storeMobile(){
   let stringMobile=JSON.stringify(mobileArr);
   localStorage.setItem('mobileArr',stringMobile);

  }


  let myTable= document.getElementById('mobileTable');
  let table= document.createElement('table');
  myTable.appendChild(table);

  function headerRow(){
      let trHeader= document.createElement('tr');
      table.appendChild(trHeader);
      let headerArr=['User','Type','Price','Condition'];
      for(let i=0; i<headerArr.length; i++){
          let thHeader=document.createElement('th');
          trHeader.appendChild(thHeader);
          thHeader.textContent=headerArr[i];
      }
  }

  headerRow();


  Mobile.prototype.renderTable= function(){

    let trTable=document.createElement('tr');
    table.appendChild(trTable);

    let tdUser= document.createElement('td');
    trTable.appendChild(tdUser);
    tdUser.textContent=this.user;
    
    let tdType= document.createElement('td');
    trTable.appendChild(tdType);
    tdType.textContent=this.type;
    
    let tdPrice= document.createElement('td');
    trTable.appendChild(tdPrice);
    tdPrice.textContent=this.price;
    
    let tdCondition= document.createElement('td');
    trTable.appendChild(tdCondition);
    tdCondition.textContent=this.condition;
  }

  let form=document.getElementById('form');
  form.addEventListener('submit',submitter);

  function submitter(event){
    event.preventDefault();

    let user= event.target.user.value;
    let type= event.target.type.value;

    let newUserObject = new Mobile(user,type);
    newUserObject.renderTable();
    storeMobile();
  }

  function getMobile(){
      let data= localStorage.getItem('mobileArr');
      let dataParse= JSON.parse(data);

      if (dataParse){

        for(i=0; i<dataParse.length; i++){

            new Mobile(dataParse[i].user, dataParse[i].type);

        }
      }
  }
  getMobile();
  for(let i=0; i<mobileArr.length; i++){
      mobileArr[i].renderTable();
  }