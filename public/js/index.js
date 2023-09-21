$(document).ready(()=>{
    
    // Dynamic current mood image

    let currentMood = $(".mood-value").html();
    
    switch(currentMood){
        case "Sigh":
            $(".current-mood-col").css("background-image","linear-gradient(to right, #183D3D,transparent), url(\"/images/sigh-banner.jpg\")");
            break;
        
        case "Sith Lord":
            $(".current-mood-col").css("background-image","linear-gradient(to right, #183D3D,transparent), url(\"/images/sith-banner.jpg\")");
            $(".current-mood-col").css("background-position","0 40%");
            break;

        case "I want to believe":
            $(".current-mood-col").css("background-image","linear-gradient(to right, #183D3D,transparent), url(\"/images/believe-banner.jpg\")");
            break;

        case "Verily sayeth":
            $(".current-mood-col").css("background-image","linear-gradient(to right, #183D3D,transparent), url(\"/images/verily-banner.jpg\")");
            break;

        case "Bullets, Jazz Bullets":
            $(".current-mood-col").css("background-image","linear-gradient(to right, #183D3D,transparent), url(\"/images/bullets-banner.jpg\")");
            break;


        default:
            console.log(currentMood);
    }
    
    // Placeholders when mood is clicked

   $(".moods-row button").on("click",()=>{
    $(".cards-row img").attr("src","/images/placeholderCover.jpg");
    $(".cards-row h5").addClass("placeholder-glow");
    $(".cards-row h5 span").addClass("placeholder col-4");
    $(".cards-row h6").addClass("placeholder-glow");
    $(".cards-row h6 span").addClass("placeholder col-8");
    // Toggle slider
    $(".moods-row").attr("data-slider","true");
   });

//    Placeholders when refresh button is clicked

$(".refresh-btn").on("click",()=>{
    $(".cards-row img").attr("src","/images/placeholderCover.jpg");
    $(".cards-row h5").addClass("placeholder-glow");
    $(".cards-row h5 span").addClass("placeholder col-4");
    $(".cards-row h6").addClass("placeholder-glow");
    $(".cards-row h6 span").addClass("placeholder col-8");
   });

// Slider toggle on mobile view

$(".hamburger-toggle").on("click",()=>{
    let toggleValue = $(".moods-row").hasClass("toggle-slider");
    if (toggleValue === false){
        $(".moods-row").addClass("toggle-slider");
        $(".hamburger-toggle").css("background-image","url(\"/images/Cross_icon.png\")");
    } else {
        $(".moods-row").removeClass("toggle-slider");
        $(".hamburger-toggle").css("background-image","url(\"/images/hamburger_icon.png\")");
    }
});

});