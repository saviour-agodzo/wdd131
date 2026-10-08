

// Ghana Cocoa Guide - Project JavaScript

// ------------------------------
// DATA: COCOA FACTS
// ------------------------------

const cocoaFacts = [
    {
        title: "Ghana and Cocoa",
        text: "Cocoa is one of Ghana's most important agricultural commodities and a major source of income for many farming communities.",
        featured: true
    },
    {
        title: "Cocoa Growing",
        text: "Cocoa grows best in warm, humid environments with well-distributed rainfall and suitable soils.",
        featured: true
    },
    {
        title: "Cocoa Pods",
        text: "Cocoa pods grow directly from the trunk and branches of the cocoa tree.",
        featured: false
    },
    {
        title: "Harvesting",
        text: "Farmers harvest ripe cocoa pods and remove the cocoa beans before fermentation and drying.",
        featured: true
    },
    {
        title: "From Beans to Chocolate",
        text: "After drying, cocoa beans can be processed into products such as cocoa powder, cocoa butter, and chocolate.",
        featured: false
    }
];


// ------------------------------
// DATA: COCOA-GROWING REGIONS
// ------------------------------

const cocoaRegions = [
    {
        name: "Ashanti Region",
        description: "Ashanti is one of Ghana's major cocoa-growing regions, with many farming communities involved in cocoa cultivation."
    },
    {
        name: "Brong Ahafo Region",
        description: "Brong Ahafo has long been an important cocoa-growing area, with cocoa farming supporting many rural communities."
    },
    {
        name: "Eastern Region",
        description: "The Eastern Region has a long history of cocoa cultivation. Tetteh Quarshie's historic cocoa farm was established at Akwapim Mampong in this region."
    },
    {
        name: "Volta Region",
        description: "The Volta Region is one of Ghana's recognized cocoa-growing regions, where farmers cultivate cocoa in suitable areas."
    },
    {
        name: "Central Region",
        description: "The Central Region contains cocoa-growing communities where cocoa farming forms part of the agricultural economy."
    },
    {
        name: "Western North Region",
        description: "Western North is an important cocoa-producing region and has recorded some of the largest cocoa purchases among Ghana's cocoa-growing regions."
    },
    {
        name: "Western South Region",
        description: "Western South is one of Ghana's seven recognized cocoa-growing regions and contains many cocoa-producing communities."
    }
];

// ------------------------------
// DATA: COCOA PRODUCTION PROCESS
// ------------------------------

const productionStages = [
    {
        number: 1,
        title: "Planting",
        description: "Farmers plant healthy cocoa seedlings in suitable areas where the trees can receive adequate moisture, shade, and nutrients."
    },
    {
        number: 2,
        title: "Growing and Farm Care",
        description: "Farmers maintain the cocoa farm by controlling weeds, managing shade, protecting trees, and monitoring pests and diseases."
    },
    {
        number: 3,
        title: "Harvesting",
        description: "When cocoa pods become ripe, farmers carefully cut them from the cocoa trees without damaging the trunk or branches."
    },
    {
        number: 4,
        title: "Pod Breaking",
        description: "The harvested pods are opened and the cocoa beans are removed from the pods."
    },
    {
        number: 5,
        title: "Fermentation",
        description: "The fresh cocoa beans are fermented for several days. This develops important flavors and changes the beans for later processing."
    },
    {
        number: 6,
        title: "Drying",
        description: "After fermentation, the beans are dried to reduce their moisture content and prepare them for storage and transportation."
    },
    {
        number: 7,
        title: "Processing",
        description: "Dried cocoa beans can be processed into cocoa products such as cocoa liquor, cocoa butter, cocoa powder, and chocolate."
    }
];


// ------------------------------
// DISPLAY A RANDOM COCOA FACT
// ------------------------------

function displayFact() {
    const factContainer = document.querySelector("#fact-container");

    if (!factContainer) {
        return;
    }

    const featuredFacts = cocoaFacts.filter((fact) => fact.featured);
    const randomIndex = Math.floor(Math.random() * featuredFacts.length);
    const selectedFact = featuredFacts[randomIndex];

    factContainer.innerHTML = `
        <article class="fact-card">
            <h3>${selectedFact.title}</h3>
            <p>${selectedFact.text}</p>
        </article>
    `;
}


// ------------------------------
// DISPLAY COCOA-GROWING REGIONS
// ------------------------------

function renderRegions() {
    const regionContainer = document.querySelector("#region-container");

    if (!regionContainer) {
        return;
    }

    regionContainer.innerHTML = cocoaRegions
        .map(
            (region, index) => `
                <article class="content-card region-card">
                    <div class="region-number">${index + 1}</div>
                    <div>
                        <h3>${region.name}</h3>
                        <p>${region.description}</p>
                    </div>
                </article>
            `
        )
        .join("");
}


// ------------------------------
// DISPLAY PRODUCTION PROCESS
// ------------------------------

function renderProcess() {
    const processContainer = document.querySelector("#process-container");

    if (!processContainer) {
        return;
    }

    processContainer.innerHTML = productionStages
        .map(
            (stage) => `
                <article class="process-card">
                    <div class="process-number">${stage.number}</div>
                    <div class="process-content">
                        <h3>${stage.title}</h3>
                        <p>${stage.description}</p>
                    </div>
                </article>
            `
        )
        .join("");
}


// ------------------------------
// MOBILE NAVIGATION MENU
// ------------------------------

function toggleMenu() {
    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".navigation");

    if (!menuButton || !navigation) {
        return;
    }

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}


// ------------------------------
// CLOSE MOBILE MENU AFTER CLICK
// ------------------------------

function closeMenuAfterClick() {
    const navigation = document.querySelector(".navigation");
    const menuButton = document.querySelector(".menu-button");

    if (!navigation || !menuButton) {
        return;
    }

    navigation.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}


// ------------------------------
// HANDLE FEEDBACK FORM
// ------------------------------

function handleFeedbackSubmit(event) {
    event.preventDefault();

    const nameInput = document.querySelector("#visitor-name");
    const interestInput = document.querySelector("#visitor-interest");
    const messageInput = document.querySelector("#visitor-message");
    const formMessage = document.querySelector("#form-message");

    if (!nameInput || !interestInput || !messageInput || !formMessage) {
        return;
    }

    const visitorName = nameInput.value.trim();
    const visitorInterest = interestInput.value;
    const visitorMessage = messageInput.value.trim();

    if (visitorName.length < 2 || visitorMessage.length < 5) {
        formMessage.textContent = `
            Please provide your name and a comment before submitting.
        `;
        return;
    }

    const visitorResponse = {
        name: visitorName,
        interest: visitorInterest,
        message: visitorMessage
    };

    localStorage.setItem(
        "ghanaCocoaVisitor",
        JSON.stringify(visitorResponse)
    );

    formMessage.textContent = `
        Thank you, ${visitorName}! Your response has been saved. You are interested in ${visitorInterest}.
    `;

    event.target.reset();
}


// ------------------------------
// DISPLAY SAVED RESPONSE
// ------------------------------

function displaySavedResponse() {
    const formMessage = document.querySelector("#form-message");
    const savedResponse = localStorage.getItem("ghanaCocoaVisitor");

    if (!formMessage || !savedResponse) {
        return;
    }

    const visitorResponse = JSON.parse(savedResponse);

    formMessage.textContent = `
        Welcome back, ${visitorResponse.name}! Your previous response was saved successfully.
    `;
}


// ------------------------------
// INITIALIZE THE WEBSITE
// ------------------------------

function initializeSite() {
    const menuButton = document.querySelector(".menu-button");
    const factButton = document.querySelector("#fact-button");
    const feedbackForm = document.querySelector("#feedback-form");
    const navigationLinks = document.querySelectorAll(".navigation a");

    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }

    if (factButton) {
        factButton.addEventListener("click", displayFact);
    }

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", handleFeedbackSubmit);
        displaySavedResponse();
    }

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMenuAfterClick);
    });

    displayFact();
    renderRegions();
    renderProcess();
}


// Start the website JavaScript.
initializeSite();