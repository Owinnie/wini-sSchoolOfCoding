// Open the language selection modal
function openLanguageSelection() {
    document.getElementById("language-modal").style.display = "block";
}

// Close the language selection modal
function closeLanguageSelection() {
    document.getElementById("language-modal").style.display = "none";
}

// Redirect based on selected language
function redirectToLanguage() {
    const selectedLanguage = document.getElementById("language-select").value;
    
    if (selectedLanguage === "english") {
        window.location.href = "../PythonCourse/Glossary/English/EngGlossary.html";
    } else if (selectedLanguage === "swahili") {
        window.location.href = "../PythonCourse/Glossary/Swahili/SwaGlossary.html";
    } else if (selectedLanguage === "latin") {
        window.location.href = "../PythonCourse/Glossary/Latin/LatGlossary.html";
    } else if (selectedLanguage === "asl") {
        window.location.href = "../PythonCourse/Glossary/Sign/ASL/ASLGlossary.html";
    }
}
