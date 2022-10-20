//const Remote = require('./remote');
//Remote.AddTwoNumbers(5,3);

const Parser = require("./parser");

const soapRequest = require('easy-soap-request');
const url = "http://www.dneonline.com/calculator.asmx";
const sampleHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8'
};

const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
            <soapenv:Header/>
            <soapenv:Body>
            <tem:Add>
                 <tem:intA>5</tem:intA>
                    <tem:intB>3</tem:intB>
             </tem:Add>
            </soapenv:Body>
            </soapenv:Envelope>`;

(async () => {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml });
    let remoteReponse =  await Parser.convertXMLToJSON(response.body);
    console.log(remoteReponse);

})();