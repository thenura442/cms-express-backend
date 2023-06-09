const file = require( "../Services/cart.service" );
const FileService = new file();

module.exports = { createCart, deleteItem, deleteCart, updateCart, getCart };

/**
 * @description Create a record with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns status success or failure
 */
async function createCart ( req, res ) {
  try {
    const result = await FileService.create( req.body);
    return res.send( result );
  } catch ( err ) {
    console.log( err ); 
    res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
  }
}



/**
 * @description Create a record with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns status success or failure
 */
async function getCart ( req, res ) {
  try {
    const result = await FileService.find( req.body);
    return res.send( result );
  } catch ( err ) {
    console.log( err ); 
    res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
  }
}



/**
 * @description Create update cart with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns status success or failure
 */
async function updateCart ( req, res ) {
  try {
    const result = await FileService.update( req.body);
    return res.send( result );
  } catch ( err ) {
    console.log( err ); 
    res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
  }
}




/**
 * @description Create a record with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns status success or failure
 */
async function deleteCart ( req, res ) {
  try {
    const result = await FileService.delete( req.body);
    return res.send( result );
  } catch ( err ) {
    console.log( err ); 
    res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
  }
}



/**
 * @description Create a record with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns status success or failure
 */
async function deleteItem ( req, res ) {
  try {
    const result = await FileService.deleteItem( req.body);
    return res.send( result );
  } catch ( err ) {
    console.log( err ); 
    res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
  }
}
  