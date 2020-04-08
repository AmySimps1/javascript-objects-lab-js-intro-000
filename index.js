//

function updateObjectWithKeyAndValue(object, key, value) {
 return key, object[key] 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

//

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object; 
}