// functions.js
/*
function reviewDocument(documentId) {
    console.log("Reviewing Document", documentId);
}

reviewDocument(80054);
reviewDocument(80055);


example 2



function validateProvider(documentId, renderingProvider) {

    if (renderingProvider === "") {
        console.log("Document", documentId, "- Rendering Provider Missing");
    } else {
        console.log("Document", documentId, "- Rendering Provider Extracted");
    }
}

validateProvider(7154932, "Dr. Scott");
validateProvider(7154942, "");
validateProvider(7155259, "Dr. Ain");

task 1

function validateDocument(documentId,referringProvider,renderingProvider){
    if (referringProvider===""&&renderingProvider===""){
        console.log("Document", documentId, "- Both Providers Missing");
    } 
    else if(referringProvider===""){
        console.log("Document", documentId, "- Referring Provider Missing")
    }
    else if (renderingProvider === ""){
        console.log("Document" ,documentId, "- Rendering Provider Missing")
    }
    else{
        console.log("Validation Passed")
    }
}

validateDocument(7154932, "Dr. Scott", "Dr. Ain");

validateDocument(7154942, "", "Dr. Ain");

validateDocument(7155259, "Dr. Davis", "");

validateDocument(7155361, "", "");



*/



// function docid(){
//     console.log("doc id is 712345")
// }
// console.log(docid);
// docid();

let documents ={
    "documentId": "1234" ,
    "documentName": "referral"
};
let ID = documents.documentId;
let name = documents.documentName;
let docid = ()=>{
    console.log("Document ID is", ID )
    console.log("Document name is ", name)
};

docid();