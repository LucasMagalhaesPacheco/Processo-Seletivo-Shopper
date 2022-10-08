import BaseDataBase from "../BaseDataBase";
import { ProductDataBase } from "../ProductDataBase";
import { products } from "./data";

class Migrations extends BaseDataBase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created sucessfully")

            console.log("Populate Tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            this.getConnetion()
            .destroy()
            console.log("Connection closed graciously.")
        }
    }

    
    createTables = async () => {
     await this.getConnetion()
     .raw(`
     DROP TABLE IF EXISTS ${ProductDataBase.PRODUCTS_TABLE};
     DROP TABLE IF EXISTS ${ProductDataBase.PRODUCTSCARTS_Table};
     
     CREATE TABLE IF NOT EXISTS ${ProductDataBase.PRODUCTS_TABLE}(
        id VARCHAR(255) PRIMARY KEY,
        name varchar(255) NOT NULL,
        price FLOAT NOT NULL,
        qty_stock INT NULL  
     );
     
     CREATE TABLE IF NOT EXISTS ${ProductDataBase.PRODUCTSCARTS_Table}(
        id varchar(255) Primary Key,
        product_id varchar(255) NOT null,
        product_name varchar(255) NOT NULL,
        product_price float NOT NULL,
        product_amount INT not NULL DEFAULT 0,
        product_totalPrice float default 0, 
        checkout BOOLEAN DEFAULT 0
     );`)
    }

    insertData = async (): Promise<any> => {
        await this.getConnetion()
        .into(ProductDataBase.PRODUCTS_TABLE)
        .insert(products)
    }
}

const migrations = new Migrations()
migrations.execute()