/*
syntax example

syntax -1 
arrayName.forEach(function(item) {
    // Code to execute for each item
});

syntax - 2

documents.forEach(function (document, index) {
    console.log(index);
    console.log(document.documentId);
});

program - 1

let documents = [
    { documentId: 7154932, documentType: "Referral" },
    { documentId: 7154942, documentType: "Referral Authorization" },
    { documentId: 7155259, documentType: "Medical Records" }
];

documents.forEach(function (document) {
    console.log(document.documentId);
    console.log(document.documentType);
});



program - 2


let documents = [
    { documentId: 7154932, documentType: "Referral" },
    { documentId: 7154942, documentType: "Referral Authorization" },
    { documentId: 7155259, documentType: "Medical Records" },
    { documentId: 7155361, documentType: "Referral" }
];

documents.forEach(function (document) {
    console.log("Document ID:", document.documentId);
    console.log("Document Type:", document.documentType);
});

program - 3

*/

let documents = [
    { documentId: 7154932, documentType: "Referral" },
    { documentId: 7154942, documentType: "Referral Authorization" },
    { documentId: 7155259, documentType: "Medical Records" },
    { documentId: 7155361, documentType: "Referral" }
];

documents.forEach((function (document) {
    console.log()
});