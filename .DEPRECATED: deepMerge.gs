///*
//
//
//Update: this has been replaced by assignDeep(target, varArgs)
//It is here in case something is still using it that I'm not aware of.
//Do not count on it's existence...
//
//
//
//This is called by the remote document to allow remote document config 
//to be passed to this library and incorporated into the local config.
//This method allows both the inclusion of config settings not in the library
//and the override of local settings.  Remote settings always replace local settings.
//These files are kept separate to ensure they aren't modified or removed inadvertently.
//
//source: https://davidwalsh.name/javascript-deep-merge
//
//*/
//
//deepmerge.all = function deepmergeAll(array, optionsArgument) {
//  if (!Array.isArray(array) || array.length < 2) {
//    throw new Error('first argument should be an array with at least two elements')
//  }
//  
//  // we are sure there are at least 2 values, so it is safe to have no initial value
//  return array.reduce(function(prev, next) {
//    return deepmerge(prev, next, optionsArgument)
//  })
//}
//
//function deepmerge(target, source, optionsArgument) {
//  var array = Array.isArray(source);
//  var options = optionsArgument || { arrayMerge: defaultArrayMerge }
//  var arrayMerge = options.arrayMerge || defaultArrayMerge
//  
//  if (array) {
//    return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
//  } else {
//    return mergeObject(target, source, optionsArgument)
//  }
//}
//
//function isMergeableObject(val) {
//  var nonNullObject = val && typeof val === 'object'
//  
//  return nonNullObject
//  && Object.prototype.toString.call(val) !== '[object RegExp]'
//  && Object.prototype.toString.call(val) !== '[object Date]'
//}
//
//function emptyTarget(val) {
//  return Array.isArray(val) ? [] : {}
//}
//
//function cloneIfNecessary(value, optionsArgument) {
//  var clone = optionsArgument && optionsArgument.clone === true
//  return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
//}
//
//function defaultArrayMerge(target, source, optionsArgument) {
//  var destination = target.slice()
//  source.forEach(function(e, i) {
//    if (typeof destination[i] === 'undefined') {
//      destination[i] = cloneIfNecessary(e, optionsArgument)
//    } else if (isMergeableObject(e)) {
//      destination[i] = deepmerge(target[i], e, optionsArgument)
//    } else if (target.indexOf(e) === -1) {
//      destination.push(cloneIfNecessary(e, optionsArgument))
//    }
//  })
//  return destination
//}
//
//function mergeObject(target, source, optionsArgument) {
//  var destination = {}
//  if (isMergeableObject(target)) {
//    Object.keys(target).forEach(function (key) {
//      destination[key] = cloneIfNecessary(target[key], optionsArgument)
//    })
//  }
//  Object.keys(source).forEach(function (key) {
//    if (!isMergeableObject(source[key]) || !target[key]) {
//      destination[key] = cloneIfNecessary(source[key], optionsArgument)
//    } else {
//      destination[key] = deepmerge(target[key], source[key], optionsArgument)
//    }
//  })
//  return destination
//}
