const Parser = require("./parser");

module.exports = class Formatter {
    static convertJsonToSoapRequest(jsonArguments){
        let soapBody = Parser.parseJSONBodyToXML(jsonArguments);

        return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
                <soapenv:Header/>
                <soapenv:Body>
                   ${soapBody}
                </soapenv:Body>
                </soapenv:Envelope>`;
    }
};

