const generateform = document.querySelector(".genarate-form");
const imagegallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "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";

const genarateaiimages = async (userprompt, userimagequantity) => {
    try{
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: userprompt,
                n: parseInt(userimagequantity),
                size: '512x512',
                response_format: "b64_json"
            })
        })
        const { data } = await response.json();
        console.log(Date)
    }catch (error){
        console.log(error);
    }
}

const handleFormSubmission = (e) => {
    e.preventDefault();

    const userprompt = e.srcElement[0].value;
    const userimagequantity = e.srcElement[1].value;

    const imgcardmarkup = Array.from({length: userimagequantity}, ()=>
        `<div class="image-card loading">
        <img src="images/loader.svg" alt="image">
        <a href="#" class="download_btn">
            <img src="images/download.svg" alt="download icon">
        </a>
    </div>`
    ).join("");

    imagegallery.innerHTML = imgcardmarkup;
}

generateform.addEventListener("submit", handleFormSubmission);