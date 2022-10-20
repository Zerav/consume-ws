const Formatter = require("./formatter");
const ApiClient = require('axios');
const Parser = require("./parser");

const url = "http://www.dneonline.com/calculator.asmx";

module.exports = class Remote {
    static async AddTwoNumbers(numberOne, numberTwo){
        try{
            let payload = {
                "tem:Add": {
                    "tem:intA": numberOne,
                    "tem:intB": numberTwo
                }
            };

            const headers = {
                headers: {
                    "Content-Type": "text/xml; charset=utf-8",
                    SOAPAction: "http://tempuri.org/Add"
                }
            };
            
            let args = Formatter.convertJsonToSoapRequest(payload);
            console.log(args);
            let remoteReponse = await ApiClient.post(url,args,headers);
            remoteReponse =  await Parser.convertXMLToJSON(remoteReponse.data);

            console.log(remoteReponse);
        }
        catch(err){
            throw new Error(
                `Ha ocurrido un error. Intente más tarde ::: ` + err
            );
        }
    };

   
}

