const MongooseService = require( '../Utils/functions' ); // Data Access Layer
const FileModel = require( "../Models/cart.model" ); // Database Model


class FileService {
  /**
   * @description Create an instance of PostService
   */
  constructor () {
    // Create instance of Data Access layer using our desired model
    this.MongooseServiceInstance = new MongooseService( FileModel.Cart );
  }

  
  /**
   * @description Attempt to create a post with the provided object
   * @param body {object} Object containing all required fields to
   * create post
   * @returns {Object}
   */
  async create ( body) {
    try {

      //Checking if Cart of the user already exists
      let cart = await this.MongooseServiceInstance.findOne({customer_email: body.customer_email});
      if(cart == null) {
        return await this.MongooseServiceInstance.create( body )
      }

      cart.products.push(body.products[0])
      await this.MongooseServiceInstance.updateOne({customer_email: body.customer_email},cart)  

      return await this.MongooseServiceInstance.findOne({customer_email: body.customer_email});

        // //Validating with joi schema by calling validateRegistration function at the end of the page
        // if(body != null){
        //     let { error } = await registerEmployeeValidation(body);
        //     if (error) return {Status: "400" , Error: error.details[0].message }
        // }

        // //Check if email already exists
        // let emailExist = await this.findEmailExist(body.email);
        // if(emailExist) return  {Status: "400" , Email : emailExist.email, Error: "Email Already Exists!" }
    } 
    catch ( err ) {
      console.log( err)
      return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - create(body)"};
    }
  }




  /**
   * @description Attempt to create update with the provided object
   * @param body {object} Object containing all required fields to
   * create post
   * @returns {Object}
   */
  async update ( body) {
    try {

      await this.MongooseServiceInstance.updateOne({customer_email: body.customer_email},body)

      return await this.MongooseServiceInstance.findOne({customer_email: body.customer_email});

        // //Validating with joi schema by calling validateRegistration function at the end of the page
        // if(body != null){
        //     let { error } = await registerEmployeeValidation(body);
        //     if (error) return {Status: "400" , Error: error.details[0].message }
        // }

        // //Check if email already exists
        // let emailExist = await this.findEmailExist(body.email);
        // if(emailExist) return  {Status: "400" , Email : emailExist.email, Error: "Email Already Exists!" }
    } 
    catch ( err ) {
      console.log( err)
      return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - create(body)"};
    }
  }

  

   /**
   * @description Attempt to create delete with the provided object
   * @param body {object} Object containing all required fields to
   * create post
   * @returns {Object}
   */
  async delete ( body) {
    try {

      return await this.MongooseServiceInstance.deleteOne({customer_email: body.customer_email})

        // //Validating with joi schema by calling validateRegistration function at the end of the page
        // if(body != null){
        //     let { error } = await registerEmployeeValidation(body);
        //     if (error) return {Status: "400" , Error: error.details[0].message }
        // }

        // //Check if email already exists
        // let emailExist = await this.findEmailExist(body.email);
        // if(emailExist) return  {Status: "400" , Email : emailExist.email, Error: "Email Already Exists!" }
    } 
    catch ( err ) {
      console.log( err)
      return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - create(body)"};
    }
  }




    /**
   * @description Attempt to delete Cart item with the provided object
   * @param body {object} Object containing all required fields to
   * create post
   * @returns {Object}
   */
    async deleteItem ( body) {
      try {
  
        //Checking if Cart of the user already exists
        let cart = await this.MongooseServiceInstance.findOne({customer_email: body.customer_email});
        if(cart == null) {
          return null;
        }

        const index = cart.products.indexOf({id: body.id});

        const x = cart.products.splice(index, 1);

        if(cart.products.length == 0 ){
          return await this.MongooseServiceInstance.deleteOne({customer_email: body.customer_email});
        }

        return await this.MongooseServiceInstance.updateOne({customer_email: body.customer_email},cart)
  
          // //Validating with joi schema by calling validateRegistration function at the end of the page
          // if(body != null){
          //     let { error } = await registerEmployeeValidation(body);
          //     if (error) return {Status: "400" , Error: error.details[0].message }
          // }
  
          // //Check if email already exists
          // let emailExist = await this.findEmailExist(body.email);
          // if(emailExist) return  {Status: "400" , Email : emailExist.email, Error: "Email Already Exists!" }
      } 
      catch ( err ) {
        console.log( err)
        return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - create(body)"};
      }
    }
  



    /**
   * @description Attempt to find if provided email exists in database
   * @param email {object} Object containing 'email' field to
   * find post
   * @returns {Object}
   */
    async findEmailExist( email ) {
        try {
            return await this.MongooseServiceInstance.findOne({email : email});
        } 
        catch ( err ) {
            console.log( err)
            return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - findEmailExist(email)"};
        }
      }
}

module.exports = FileService;