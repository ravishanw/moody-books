module.exports = getBookInfo;

function getBookInfo(response,buyLink){
    let linksArray1 = response.data.data.works[0]._links;
        let linksArray2 = response.data.data.works[1]._links;
        let linksArray3 = response.data.data.works[2]._links;

        // Isolate link with icon value

        function getImageHref(selectArray){
            for(x=0;x<selectArray.length;x++){
                if(selectArray[x].rel === "icon"){
                    
                    return(selectArray[x].href);
                }
            }
        }

        let bookCoverHref1 = getImageHref(linksArray1);
        let bookCoverHref2 = getImageHref(linksArray2);
        let bookCoverHref3 = getImageHref(linksArray3);
        
        // Buy link urls

        let buyHref1 = (buyLink + response.data.data.works[0].seoFriendlyUrl);
        let buyHref2 = (buyLink + response.data.data.works[1].seoFriendlyUrl);
        let buyHref3 = (buyLink + response.data.data.works[2].seoFriendlyUrl);

        let exportArray = [bookCoverHref1,bookCoverHref2,bookCoverHref3,buyHref1,buyHref2,buyHref3];

        return(exportArray);
}