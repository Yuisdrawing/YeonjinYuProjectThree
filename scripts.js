// Kitty Kustomizer

// button under the heading1 that scrolls down to the customizing section (or to the other page)
// button click event

// a cat's head image as a base, class of .catHead

// store each cat components:
    // - fur
    // - eyes
    // - nose
    // - mouth

// make array of cat components?
// or just objects?
    // const eyes {
    //     blue: "link",
    //     "gold",
    //     "green"
    // }

// $('.catEyes').on('change', function() {
// })

// have default images set up in html

// look up drop down click event

// The array (or objects) of options in a drop-down menu
// images change on click, depending on what kind of option you choose

// STRETCH GOALS:
    // Reset button
    // Export the image as PNG file and trigger save

    /////////////////////////////////////////////////

    // setting up objects for all of the assets:
    const cat = {
        fur: {
            white: "assets/catHead.png",
            tabby: "assets/tabby.png",
            calico: "assets/calico.png",
            tuxedo: "assets/tuxedo.png"
        },
        eyes: {
            blue: "assets/eyesBlue.png",
            gold: "assets/eyesGold.png",
            green: "assets/eyesGreen.png",
            oddEyes: "assets/eyesGreen.png"
        }
    }

    $('#coats').on('change', (e) => {
        $("#catFace").attr("src", cat.fur[e.target.value]);
    });

    $("#eyes").on("change", (e) => {
        $("#catEyes").attr("src", cat.eyes[e.target.value]);
    });

