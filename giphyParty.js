const search = document.querySelector("#searchterm");
const removeButton = document.querySelector("#removebtn");
const gifsHolder = document.querySelector("#gifs")


async function uploadGifs(res){
    let numRes = res.data.length;
    if(numRes)  {
        let randomVal = Math.floor(Math.random() * numRes);
        let $newDiv = $("<div>");
        let $newGif = $("<img>", {src: res.data[randomVal].url});
        console.log($newGif.src)
        $newDiv.append($newGif);
        gifsHolder.append($newDiv);
    }  
    
}

const form = document.querySelector("#searchform");
form.addEventListener("submit", async function(e) {
e.preventDefault();
let searchterm = search.value
 search.value ='';
 const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchterm}&api_key=AFqK1DUWGJFbuSVAFTN6EDGvAdZyzLK6`);
 console.log(res.data)

 uploadGifs(res.data);

})

removeButton.addEventListener("click", function(){
    gifsHolder.remove()
})

