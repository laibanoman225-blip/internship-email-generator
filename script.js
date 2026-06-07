// Pre-defined templates based on the internship role selected
const templates = {
    writer: (manager, company) => 
        `Hi ${manager},\n\nI’ve been following ${company}’s content and absolutely love your brand's voice. I’m currently looking for a remote Content Writing Internship and would love to contribute to your team.\n\nTo show you what I can do, I’ve already drafted 3 specific article outlines that match your upcoming content style. Do you have 2 minutes this week to take a look at them?\n\nBest regards,\n[Your Name]`,
    
    developer: (manager, company) => 
        `Hi ${manager},\n\nI’ve been following ${company}’s platform growth and really admire your clean engineering. I’m a student frontend developer looking for a remote technical internship where I can add value.\n\nI actually reviewed your landing page on mobile and put together a quick, 60-second video showing how a small CSS fix could make the mobile layout even smoother. Would it be alright if I sent that over for your team to see?\n\nBest regards,\n[Your Name]`,
        
    designer: (manager, company) => 
        `Hi ${manager},\n\nI'm a massive fan of ${company}’s design aesthetic. I am a UI/UX design student looking to gain hands-on experience through a remote internship.\n\nJust for fun, I took the liberty of redesigning an alternative dark-mode variant for your main dashboard analytics card to showcase my skills. I’d love to drop the Figma link in your inbox if you’re open to checking it out!\n\nBest regards,\n[Your Name]`
};

// Grabbing the HTML elements
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const emailOutput = document.getElementById('emailOutput');

// What happens when you click "Generate Email"
generateBtn.addEventListener('click', () => {
    const manager = document.getElementById('managerName').value.trim() || "Hiring Team";
    const company = document.getElementById('companyName').value.trim() || "your company";
    const role = document.getElementById('roleType').value;

    // Get the right internship template and swap the placeholders
    const generatedEmail = templates[role](manager, company);
    
    // Display the finished email on the screen
    emailOutput.innerText = generatedEmail;
});

// What happens when you click "Copy to Clipboard"
copyBtn.addEventListener('click', () => {
    const textToCopy = emailOutput.innerText;
    
    // Fallback check to prevent copying the default instruction text
    if (textToCopy.includes("Fill out the form")) {
        alert("Please generate an email first! 😊");
        return;
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Email copied to clipboard! 🚀");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
});