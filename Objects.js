//Objext is another datatype
//contain related properties of a single data element
//you can keep one or more obeject is an array
//let create an object  and assing it to varibale car
// propeties and value re seprtated by ':'
let car={
  make:'bmw',//the make make the car
  model:'76545',// the model of the car
  year:2010,// year produced
  getPrice: function(){ // creating function to getPrice to get the price
    //perform some cal
    return 5000;
  },
  printDescription: function(){ //function to print the description of the car ie make and model
    console.log(this.make +' '+ this.model)
  }

}
car.printDescription()
console.log(car.year)//print the year property of the object car//also u will see that to access a specific property of the object the '.' is used the dot(.) is called here as the PROPERTY ACCESS OPERATOR
console.log(car.make)//print the make properties of the object car
console.log(car.getPrice())//print the the return value of the function getprice of the object
//SO NOW start referiing function defined inside an object as a method or a method is afuncr=tion is defined inside an object
//you can alse the [] to access the properties of an object
console.log(car['year'])// not recommeded

//YOU CAN ADD property to an empmty object and it will be added
let anotherCar={}// empty object 
anotherCar.risk_date=2019 //added another property risk_date and value of 2019
// so if you print the object with the specific propertis it will be included..kinda append in array
console.log(anotherCar.risk_date)

// CREATING AN OBJECT THAT HAS PROPERTY WITH VALUE WHICH IS ALSO AN OBJECT
var a={
  myPropery:{b:'ayomide'}// so here i have an object a with a property whose value is an object and the property of the object is b whose value is 'ayomide'
}
// we can access the sub value of the object a ie like want to access the grandson(ayomide)where object a is the father
// so we do it ,like this
console.log(a.myPropery.b)// that is access the father 'a' then the son 'myproperty' and the grandson 'b'...more or less like a part


//creating an object with property that has an array of objects
var c={
  myPropery:[
    {a: 'this'},
    {b: 'might'},
    {c: 'be'},
    {d: 'crazy'}
  ]
};
// the above is an object that has a property that contain an array of objects with eacg having diffrernt properties
// let try and access the sub property d value
console.log(c.myPropery[3].d)// index is used here cux the property myproperty is an array  then the  property of the sought value is added 'd' so crazy is printed out

//JSON MEANS JAVASCRIPT OBJECT NOTATION
// the below is an object studentinfo containig properties of deffreent student and in this propertues are values which re objects and contain thier different values
var studentInfo={
  ayomide:{
    height:195,
    weight:68,
    skin:'dark',
    level:400,
    status:'single'
  },
  wale:{
    height:145,
    weight:56,
    skin:'dark',
    level:400,
    status:'single'
  },
  john:{
    height:178,
    weight:60,
    skin:'dark',
    level:400,
    status:'engaged'

  },
  printDescription_john:function(){
    console.log('John height is '+this.john.height +' and his weight is '+this.john.weight)
  }
}

studentInfo.printDescription_john()
console.log('Ayomide status is '+studentInfo.ayomide.status)