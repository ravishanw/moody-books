const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const ejs = require("ejs");
const port = 3000;
const buyLink = "https://www.penguinrandomhouse.com";
const bookFx = require(__dirname + "/books.js");
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine','ejs');

// Route = root

app.get("/", (req,res)=>{
    res.render('index',{
        moodValue:"Select your mood from the panel on the left, or from the hamburger menu.",
        moodDescription:"Once you select your mood, three book suggestions will appear along with links to purchase them from Penguin-Random House.",
        refreshRoute:"/",
        bookImage1:"/images/placeholderCover.jpg",
        bookTitle1:"Title 1",
        authorName1:"Author 1",
        buyLink1:"#",
        bookImage2:"/images/placeholderCover.jpg",
        bookTitle2:"Title 2",
        authorName2:"Author 2",
        buyLink2:"#",
        bookImage3:"images/placeholderCover.jpg",
        bookTitle3:"Title 3",
        authorName3:"Author 3",
        buyLink3:"#"
    });
});

app.post("/", (req,res)=>{
    res.redirect("/");
});

// Route = sigh

app.post("/sigh",async(req,res)=>{
    const sighUrl = "https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories/2000101127/works?preferLanguage=e&rows=3&api_key=";
    let sighParam = Math.floor(Math.random()*1000);

    try {
        const response = await axios.get(sighUrl + process.env.API_KEY + "&start=" + sighParam);
        
        let sighBookArray = bookFx(response,buyLink);

        res.render('index',{
            moodValue:"Sigh",
            moodDescription:"You look outside your window and dream of an eternal evening where Meg Ryan and Tom Hanks read Jane Austen while sipping tea.",
            refreshRoute:"/sigh",
            bookImage1: sighBookArray[0],
            bookTitle1:response.data.data.works[0].title,
            authorName1:response.data.data.works[0].author,
            buyLink1:sighBookArray[3],
            bookImage2:sighBookArray[1],
            bookTitle2:response.data.data.works[1].title,
            authorName2:response.data.data.works[1].author,
            buyLink2:sighBookArray[4],
            bookImage3:sighBookArray[2],
            bookTitle3:response.data.data.works[2].title,
            authorName3:response.data.data.works[2].author,
            buyLink3:sighBookArray[5]
        });

    } catch (error) {
        console.error("failed to make request:",error.message);
    }
});

// Route = Sith Lord

app.post("/sith-lord",async (req,res)=>{
    const sithUrl = "https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories/2000101231/works?preferLanguage=e&rows=3&api_key=";
    let sithParam = Math.floor(Math.random() * 1000);

    try{
        const response = await axios.get(sithUrl + process.env.API_KEY + "&start=" + sithParam);

        let sithBookArray = bookFx(response,buyLink);

        res.render('index',{
            moodValue:"Sith Lord",
            moodDescription:"You are a corporate crocodile leisurely picking your day's motivational quote from Sun Tzu. Nothing personal, it's just business.",
            refreshRoute:"/sith-lord",
            bookImage1: sithBookArray[0],
            bookTitle1:response.data.data.works[0].title,
            authorName1:response.data.data.works[0].author,
            buyLink1:sithBookArray[3],
            bookImage2:sithBookArray[1],
            bookTitle2:response.data.data.works[1].title,
            authorName2:response.data.data.works[1].author,
            buyLink2:sithBookArray[4],
            bookImage3:sithBookArray[2],
            bookTitle3:response.data.data.works[2].title,
            authorName3:response.data.data.works[2].author,
            buyLink3:sithBookArray[5]
        });
    } catch (error){
        console.error("failed to make request:",error.message);
    }
});

// Route = i-want-to-believe

app.post("/i-want-to-believe",async (req,res)=>{
    const believeUrl = "https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories/2000101142/works?preferLanguage=e&rows=3&api_key=";
    let believeParam = Math.floor(Math.random() * 1000);

    try{
        const response = await axios.get(believeUrl + process.env.API_KEY + "&start=" + believeParam);

        let believeBookArray = bookFx(response,buyLink);

        res.render('index',{
            moodValue:"I want to believe",
            moodDescription:"The truth is out there. Science fission and fantastic fusion.",
            refreshRoute:"/i-want-to-believe",
            bookImage1: believeBookArray[0],
            bookTitle1:response.data.data.works[0].title,
            authorName1:response.data.data.works[0].author,
            buyLink1:believeBookArray[3],
            bookImage2:believeBookArray[1],
            bookTitle2:response.data.data.works[1].title,
            authorName2:response.data.data.works[1].author,
            buyLink2:believeBookArray[4],
            bookImage3:believeBookArray[2],
            bookTitle3:response.data.data.works[2].title,
            authorName3:response.data.data.works[2].author,
            buyLink3:believeBookArray[5]
    });
    } catch (error){
        console.error("failed to make request:",error.message);
    } 
});

app.post("/verily-sayeth",async (req,res)=>{
    const verilyUrl = "https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories/2000101151/works?preferLanguage=e&rows=3&api_key=";
    let verilyParam = Math.floor(Math.random() * 1000);

    try{
        const response = await axios.get(verilyUrl + process.env.API_KEY + "&start=" + verilyParam);

        let verilyBookArray = bookFx(response,buyLink);

        res.render('index',{
            moodValue:"Verily sayeth",
            moodDescription:"You own a typewriter, a kilo of the world's best coffee bean, an aborted manuscript. L'art pour l'art.",
            refreshRoute:"/verily-sayeth",
            bookImage1: verilyBookArray[0],
            bookTitle1:response.data.data.works[0].title,
            authorName1:response.data.data.works[0].author,
            buyLink1:verilyBookArray[3],
            bookImage2:verilyBookArray[1],
            bookTitle2:response.data.data.works[1].title,
            authorName2:response.data.data.works[1].author,
            buyLink2:verilyBookArray[4],
            bookImage3:verilyBookArray[2],
            bookTitle3:response.data.data.works[2].title,
            authorName3:response.data.data.works[2].author,
            buyLink3:verilyBookArray[5]
        });
    } catch (error){
        console.error("failed to make request:",error.message);
    }
});

// Route = jazz-bullets

app.post("/jazz-bullets", async (req,res)=>{
    const jazzUrl = "https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories/2000101135/works?preferLanguage=e&rows=3&api_key=";
    let jazzParam = Math.floor(Math.random()*1000);

    try{
        const response = await axios.get(jazzUrl + process.env.API_KEY + "&start=" + jazzParam);
        
        let jazzBookArray = bookFx(response,buyLink);

        res.render('index',{
            moodValue:"Bullets, Jazz Bullets",
            moodDescription:"You chain-smoke your way through neon-lit back-alleys. If there's a chalk-circle, there's a missing docket, possibly an eye-patched man. Always a smoking widow.",
            refreshRoute:"/jazz-bullets",
            bookImage1: jazzBookArray[0],
            bookTitle1:response.data.data.works[0].title,
            authorName1:response.data.data.works[0].author,
            buyLink1:jazzBookArray[3],
            bookImage2:jazzBookArray[1],
            bookTitle2:response.data.data.works[1].title,
            authorName2:response.data.data.works[1].author,
            buyLink2:jazzBookArray[4],
            bookImage3:jazzBookArray[2],
            bookTitle3:response.data.data.works[2].title,
            authorName3:response.data.data.works[2].author,
            buyLink3:jazzBookArray[5]
        });
    } catch (error) {
        console.error("failed to make request:",error.message);
    }
});

app.listen(port,()=>{
    console.log("Server started on port 3000");
})