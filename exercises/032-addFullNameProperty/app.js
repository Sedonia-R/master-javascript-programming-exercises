let object = {
  firstName:'River', lastName:'Sedonia'
};

function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj;
}


console.log(addFullNameProperty(object));