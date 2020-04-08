function updateObjectWithKeyAndValue(object, key, value) {
 return key, object[key] 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object[key]
}