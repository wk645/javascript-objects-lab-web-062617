let recipes = {}

function updateObjectWithKeyAndValue(object, key, value) { 
	var newObject = Object.assign({}, object)
	// new obj with original key/value
	newObject[key] = value
	// updateing key with value
	return newObject
	// returns a new obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
	object[key] = value
	return object
}

function deleteFromObjectByKey(object, key) {
	var newObject = Object.assign({}, object)
	delete newObject[key]
	return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
	delete object[key]
	return object
}