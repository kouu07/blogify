// Toggle Dark Mode
const toggleThemeButton = document.querySelector(".toggle-theme");
const body = document.body;

toggleThemeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleThemeButton.textContent = body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
});

// Blog Editor Toolbar Actions
const editorArea = document.getElementById("editor-area");
const toolbarButtons = document.querySelectorAll(".editor-toolbar button");

toolbarButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const command = button.getAttribute("data-command");
        if (command === "createLink") {
            const url = prompt("Enter the URL");
            if (url) document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null);
        }
    });
});

// Save Blog and Display in Home Section
const saveBlogButton = document.querySelector(".save-blog");
const blogContainer = document.getElementById("blog-container");

let count = 1; // Declaring count outside to keep track across multiple saves
saveBlogButton.addEventListener("click", () => {
    const blogContent = editorArea.innerHTML.trim();
    if (blogContent && blogContent !== "Start writing your blog here...") {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        blogCard.innerHTML = `
            <h3>Blog ${count}</h3>
            <div>${blogContent}</div>
        `;
        blogContainer.appendChild(blogCard);
        count++; // Increment the count for the next blog card
        editorArea.innerHTML = "Start writing your blog here..."; // Reset editor area
    } else {
        alert("Please write something before saving the blog.");
    }
});

// Preview Blog
const previewBlogButton = document.querySelector(".preview-blog");

previewBlogButton.addEventListener("click", () => {
    const blogContent = editorArea.innerHTML.trim();
    if (blogContent && blogContent !== "Start writing your blog here...") {
        alert("Preview:\n\n" + blogContent);
    } else {
        alert("Please write something to preview.");
    }
});

// Add Notes
const addNoteButton = document.querySelector(".add-note");
const notesList = document.getElementById("notes-list");
const noteTextarea = document.querySelector(".note-creator textarea");

addNoteButton.addEventListener("click", () => {
    const noteText = noteTextarea.value.trim();
    if (noteText) {
        const noteItem = document.createElement("li");
        noteItem.textContent = noteText;
        notesList.appendChild(noteItem);
        noteTextarea.value = ""; // Clear the note textarea after adding the note
        alert("Note added successfully!");
    } else {
        alert("Please write something to add a note.");
    }
});
