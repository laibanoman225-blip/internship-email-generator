// Master database of pre-defined templates across all categories
const templates = {
    // 💼 Internship Templates
    intern_firealarm: (yourName, recipient, context) => 
        `Subject: Application for Fire Alarm Systems / Protection Internship - ${yourName}\n\nHi ${recipient},\n\nI have been deeply interested in ${context}’s innovative approach to smart building safety, circuitry, and fire protection engineering. I am looking for an internship opportunity where I can assist with layout drafting, reviewing safety system schematics, or technical documentation tracking.\n\nI have been practicing basic layout workflows and electrical design rules to ensure system compliance with standard layout codes. Would you happen to have 2 minutes this week to connect regarding how a student assistant could help your team optimize project turnarounds?\n\nBest regards,\n${yourName}`,

    intern_dev: (yourName, recipient, context) => 
        `Subject: Remote Frontend Developer Internship Application - ${yourName}\n\nHi ${recipient},\n\nI’ve been following ${context}’s growth and really admire your clean engineering. I’m a frontend developer looking for a remote technical internship where I can add value.\n\nI actually reviewed your landing page on mobile and put together a quick 60-second video showing how a small layout fix could make it even smoother. Would it be alright if I sent that over for your team to see?\n\nBest regards,\n${yourName}`,
    
    intern_writer: (yourName, recipient, context) => 
        `Subject: Remote Content Writing Internship - ${yourName}\n\nHi ${recipient},\n\nI noticed ${context} has been publishing incredible content lately, especially around modern trends. As a writer, I love your brand's voice.\n\nTo show you what I can do, I’ve already drafted 3 specific article outlines that match your upcoming content style. Do you have 2 minutes this week to take a look at them?\n\nBest regards,\n${yourName}`,

    // 🎨 Creative Workflow Templates
    work_delivery: (yourName, recipient, context) => 
        `Subject: Project Delivery: Latest updates for ${context}\n\nHi ${recipient},\n\nI’ve finished the latest draft of the deliverables for ${context}. I focused on making the layout cleaner and more engaging based on our last discussion.\n\nPlease check over the files when you have a moment and let me know your thoughts so we can finalize the next steps!\n\nBest regards,\n${yourName}`,
    
    work_feedback: (yourName, recipient, context) => 
        `Subject: Feedback Needed: ${context} Concepts\n\nHi ${recipient},\n\nI have put together the latest design and content concepts for ${context}.\n\nTo help guide your review, could you give me your specific thoughts on these points:\n• Does the contrast on the main title text pop enough?\n• Is the overall layout spacing correct?\n• Which color palette option fits the brand better?\n\nBest regards,\n${yourName}`,

    // 🏫 Everyday Templates
    everyday_followup: (yourName, recipient, context) => 
        `Subject: Quick Follow-up: Status on ${context}\n\nHi ${recipient},\n\nI hope you're having a great week! \n\nI'm just reaching out to see if there are any updates regarding ${context}. Let me know if you need any additional details or files from my end to help move things along.\n\nThanks,\n${yourName}`,
        
    everyday_inquiry: (yourName, recipient, context) => 
        `Subject: Inquiry regarding ${context}\n\nHi ${recipient},\n\nI hope this email finds you well. \n\nI am reaching out to ask for some guidance regarding ${context}. I want to make sure I am approaching this correctly—do you have a few minutes to spare this week to clarify a few questions I had?\n\nThank you for your time and assistance!\n\nBest regards,\n${yourName}`
};

// Grabbing the HTML elements
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const emailOutput = document.getElementById('emailOutput');

// What happens when you click "Generate Email"
generateBtn.addEventListener('click', () => {
    const yourName = document.getElementById('yourName').value.trim() || "[Your Name]";
    const prefix = document.getElementById('titlePrefix').value;
    let recipientInput = document.getElementById('recipientName').value.trim();
    
    if (!recipientInput) {
        recipientInput = "Team";
    }

    const fullRecipient = prefix + recipientInput;
    const context = document.getElementById('contextName').value.trim() || "[Project/Company/Subject]";
    const role = document.getElementById('roleType').value;

    // Safety Mismatch Check
    if (!templates[role]) {
        alert(`Error: The selection value "${role}" doesn't match your script dataset.`);
        return;
    }

    // Process variables into template output
    const generatedEmail = templates[role](yourName, fullRecipient, context);
    
    // Render text to screen inside the container
    emailOutput.innerText = generatedEmail;
});

// What happens when you click "Copy to Clipboard"
copyBtn.addEventListener('click', () => {
    const textToCopy = emailOutput.innerText;
    
    if (textToCopy.includes("Fill out the boxes above")) {
        alert("Please generate an email first! 😊");
        return;
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Email template copied to clipboard! 🚀");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
});
