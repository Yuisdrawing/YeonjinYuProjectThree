    // setting up objects for all of the assets:
    const cat = {
        fur: {
            white: "assets/catHead.png",
            tabby: "assets/tabby.png",
            calico: "assets/calico.png",
            tuxedo: "assets/tuxedo.png",
            ginger: "assets/ginger.png",
            black: "assets/black.png"
        },
        eyes: {
            default: "assets/eyesdefault.png",
            blue: "assets/eyesBlue.png",
            gold: "assets/eyesGold.png",
            green: "assets/eyesGreen.png",
            oddEyes: "assets/eyesOdd.png"
        },
        mouth: {
            default: "assets/mouthDefault.png",
            silly: "assets/mouthSilly.png",
            hungry: "assets/mouthHungry.png",
            happy: "assets/mouthHappy.png"
        },
        hats: {
            noHat: "assets/nohat.png",
            birthdayHat: "assets/birthdayHat.png",
            topHat: "assets/topHat.png",
            propellerHat: "assets/propellerHat.png"
        }
    }

    $('#coats').on('change', (e) => {
        $("#catFur").attr("src", cat.fur[e.target.value]);
    });
    $("#eyes").on("change", (e) => {
        $("#catEyes").attr("src", cat.eyes[e.target.value]);
    });
    $("#mouth").on("change", (e) => {
        $("#catMouth").attr("src", cat.mouth[e.target.value]);
    });
    $("#hats").on("change", (e) => {
        $("#catHat").attr("src", cat.hats[e.target.value]);
    });



    
// The reset button
    $('#reset').on('click', (e) => {
        const defaultCat = $(".choices").toArray();
        defaultCat.forEach(element => {
            element.selectedIndex = 0;
            $(element).change();
        });
    })