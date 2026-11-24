
// =================================
// JOB SEARCH, CATEGORY FILTERS AND SAVED JOBS
// =================================

const sortBtns = document.querySelectorAll(".job-id li");
const sortItems = document.querySelectorAll(".jobs-container .jList");
const searchInput = document.getElementById("jobSearchInput");
const searchBtn = document.getElementById("heroSearchBtn");
const noJobsMessage = document.getElementById("noJobsMessage");

let selectedCategory = "all";
let searchKeyword = "";

// Load saved jobs safely
let savedJobs = [];

try {
    savedJobs = JSON.parse(localStorage.getItem("jstackSavedJobs")) || [];
} catch (error) {
    savedJobs = [];
}

// Update bookmark buttons when the page loads
function updateBookmarkButtons() {
    sortItems.forEach(item => {
        const jobId = item.getAttribute("data-job-id");
        const button = item.querySelector(".save-job");
        const icon = button?.querySelector("i");

        if (!button || !icon) return;

        const isSaved = savedJobs.includes(jobId);

        button.classList.toggle("saved", isSaved);
        icon.className = isSaved
            ? "bx bxs-bookmark"
            : "bx bx-bookmark";

        button.setAttribute(
            "aria-label",
            isSaved ? "Remove saved job" : "Save job"
        );
    });
}

// Display jobs according to selected category and search
function displayJobs() {
    let visibleJobs = 0;

    sortItems.forEach(item => {
        const jobType = item.getAttribute("data-item");
        const jobId = item.getAttribute("data-job-id");
        const jobText = item.innerText.toLowerCase();

        const categoryMatch =
            selectedCategory === "all" ||
            (selectedCategory === "saved"
                ? savedJobs.includes(jobId)
                : jobType === selectedCategory);

        const searchMatch = jobText.includes(searchKeyword);

        if (categoryMatch && searchMatch) {
            item.classList.remove("delete");
            visibleJobs++;
        } else {
            item.classList.add("delete");
        }
    });

    if (noJobsMessage) {
        noJobsMessage.classList.toggle("show", visibleJobs === 0);
    }
}

// Category filter buttons
sortBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        sortBtns.forEach(item => item.classList.remove("active"));
        btn.classList.add("active");

        selectedCategory = btn.getAttribute("data-target");
        displayJobs();
    });
});

// Search function
function searchJobs() {
    if (!searchInput) return;

    searchKeyword = searchInput.value.trim().toLowerCase();
    selectedCategory = "all";

    sortBtns.forEach(btn => {
        btn.classList.toggle(
            "active",
            btn.getAttribute("data-target") === "all"
        );
    });

    displayJobs();

    document.getElementById("jobs")?.scrollIntoView({
        behavior: "smooth"
    });
}

if (searchBtn) {
    searchBtn.addEventListener("click", searchJobs);
}

if (searchInput) {
    searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            searchJobs();
        }
    });
}

// Popular search tags
document.querySelectorAll(".search-tag").forEach(tag => {
    tag.addEventListener("click", () => {
        if (!searchInput) return;

        searchInput.value = tag.getAttribute("data-search");
        searchJobs();
    });
});

// Save and unsave jobs
document.addEventListener("click", event => {
    const button = event.target.closest(".save-job");
    if (!button) return;

    const jobCard = button.closest(".jList");
    const jobId = jobCard?.getAttribute("data-job-id");

    if (!jobId) return;

    if (savedJobs.includes(jobId)) {
        savedJobs = savedJobs.filter(id => id !== jobId);
    } else {
        savedJobs.push(jobId);
    }

    localStorage.setItem("jstackSavedJobs", JSON.stringify(savedJobs));

    updateBookmarkButtons();
    displayJobs();
});

// Initialize job listing
updateBookmarkButtons();
displayJobs();


// =================================
// JOB APPLICATION FORM
// =================================

const applyModal = document.getElementById("applyModal");
const closeApplyModal = document.getElementById("closeApplyModal");
const applyForm = document.getElementById("applyForm");
const applyJobTitle = document.getElementById("applyJobTitle");
const applicationMessage = document.getElementById("applicationMessage");

// Open application form
document.addEventListener("click", event => {
    const button = event.target.closest(".apply-btn");
    if (!button || !applyModal || !applyForm) return;

    const jobCard = button.closest(".jList");
    if (!jobCard) return;

    const jobTitle = jobCard.querySelector("h3");

    applyForm.reset();
    applyJobTitle.value = jobTitle
        ? jobTitle.innerText.trim()
        : "Selected Job";

    applicationMessage.innerText = "";
    applyModal.style.display = "flex";
});

// Close application form
if (closeApplyModal && applyModal) {
    closeApplyModal.addEventListener("click", () => {
        applyModal.style.display = "none";
    });

    applyModal.addEventListener("click", event => {
        if (event.target === applyModal) {
            applyModal.style.display = "none";
        }
    });
}

// Submit application
if (applyForm) {
    applyForm.addEventListener("submit", event => {
        event.preventDefault();

        applicationMessage.innerText =
            "Your application has been submitted successfully!";

        applyForm.reset();
    });
}


// =================================
// JOIN NOW REGISTRATION FORM
// =================================

const joinButton = document.getElementById("w-btn");
const joinModal = document.getElementById("joinModal");
const closeJoinModal = document.getElementById("closeJoinModal");
const joinForm = document.getElementById("joinForm");
const joinMessage = document.getElementById("joinMessage");

// Open registration form
if (joinButton && joinModal) {
    joinButton.addEventListener("click", () => {
        joinForm.reset();
        joinMessage.innerText = "";
        joinModal.style.display = "flex";
    });
}

// Close registration form
if (closeJoinModal && joinModal) {
    closeJoinModal.addEventListener("click", () => {
        joinModal.style.display = "none";
    });

    joinModal.addEventListener("click", event => {
        if (event.target === joinModal) {
            joinModal.style.display = "none";
        }
    });
}

// Submit registration form
if (joinForm) {
    joinForm.addEventListener("submit", event => {
        event.preventDefault();

        const password =
            document.getElementById("joinPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            joinMessage.innerText = "Passwords do not match!";
            joinMessage.style.color = "red";
            return;
        }

        joinMessage.innerText = "Account created successfully!";
        joinMessage.style.color = "#1f4a40";

        joinForm.reset();
    });
}


// =================================
// SCROLL REVEAL ANIMATION
// =================================

const revealElements = document.querySelectorAll(
    ".section-heading, .feature-card, .jList, .brand-card, .fl-box"
);

if ("IntersectionObserver" in window) {
    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("active");
    });
}
