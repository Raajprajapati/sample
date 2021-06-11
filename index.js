const imgData = [
    {
        imgid: "image1",
        imgsrc: "images/img1.jpg",
        overview: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure animi illum magnam voluptatum excepturi itaque molestiae veritatis, possimus aliquid.",
        client: "1 Lorem ipsum",
        info: "1 project and client info",
        url: "https://example.com"
    },
    {
        imgid: "image2",
        imgsrc: "images/img2.jpg",
        overview: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure animi illum magnam voluptatum excepturi itaque molestiae veritatis, possimus aliquid.",
        client: "2 Lorem ipsum",
        info: "2 project and client info",
        url: "https://example.com"
    },
    {
        imgid: "image3",
        imgsrc: "images/img3.jpg",
        overview: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure animi illum magnam voluptatum excepturi itaque molestiae veritatis, possimus aliquid.",
        client: "3 Lorem ipsum",
        info: "3 project and client info",
        url: "https://example.com"
    },
    {
        imgid: "image4",
        imgsrc: "images/img4.jpg",
        overview: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure animi illum magnam voluptatum excepturi itaque molestiae veritatis, possimus aliquid.",
        client: "4 Lorem ipsum",
        info: "4 project and client info",
        url: "https://example.com"
    },
    {
        imgid: "image5",
        imgsrc: "images/img5.jpg",
        overview: "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure animi illum magnam voluptatum excepturi itaque molestiae veritatis, possimus aliquid.",
        client: "5 Lorem ipsum",
        info: "5 project and client info",
        url: "https://example.com"
    },
    {
        imgid: "image6",
        imgsrc: "images/img6.jpg",
        overview: "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure animi illum magnam voluptatum excepturi itaque molestiae veritatis, possimus aliquid.",
        client: "6 Lorem ipsum",
        info: "6 project and client info",
        url: "https://example.com"
    }
]

// function to close the pop up
const close = ()=>{
    body = document.querySelector("body")
    imgpopup = document.querySelector(".img_popup")
    imgpopup.remove()
}

// func to create a image pop up window
const createpopup = (imgdata, ind) => {
    let popuptemp = `
    <div class="pop_wrapper">
        <p class="header">The summary tale</p>
        <div class="mid">
            <div class="navbuttons">
                <button class="previous">&larr; previous concept</button>
                <button class="next">next concept &rarr;</button>
            </div>
            <div class="pop_img">
                <img src=${imgdata[ind].imgsrc} alt=${imgdata[ind].info} >
            </div>
            <div class="img_info">
                <div class="info_left">
                    <h1>Overview</h1>
                    <p>${imgdata[ind].overview}</p>
                </div>
                <div class="info_right">
                    <div class="client">
                        <h1>Client</h1>
                        <p>${imgdata[ind].client}</p>
                    </div>
                    <div class="url">
                        <h1>URL</h1>
                        <p>${imgdata[ind].url}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <h1>RELATED CONCEPTS</h1>
            <button class="close">close</button>
        </div>
    </div>
    `
    let imgPopup = document.createElement("div");
    imgPopup.classList.add("img_popup");
    imgPopup.innerHTML = popuptemp;
    document.querySelector("body").appendChild(imgPopup)
    document.querySelector(".close").addEventListener("click",()=>{
        close()
    })
    document.querySelector(".previous").addEventListener("click",()=>{
        if( ind > 0){
            close()
            createpopup(imgdata,ind-1)
        }
    })
    document.querySelector(".next").addEventListener("click",()=>{
        if(ind < imgdata.length-1){
            close()
            createpopup(imgdata,ind+1)
        }
    })

}

// rendering all the images in body
const imgWrapper = document.querySelector(".img_wrapper")
imgData.forEach((element,index) => {
    let imgDiv = document.createElement("div")
    let tempHTML = `<img src=${imgData[index].imgsrc} alt=${imgData[index].info}></img>
                <div class = "img_text"><p>${imgData[index].info}</p></div>`
    imgDiv.classList.add("img_div");
    imgDiv.innerHTML = tempHTML;
    imgDiv.addEventListener("click", () => {
        createpopup(imgData,index)
    })
    imgWrapper.appendChild(imgDiv)

});


