// Master multi-tone template system database
const templates = {
    intern_firealarm: {
        formal: (name, rec, ctx, link) => `Subject: Application for Fire Alarm Systems Internship - ${name}\n\nHi ${rec},\n\nI am writing to express my strong interest in an internship with ${ctx}. I am highly drawn to your work in smart building safety and circuit schematic validation.\n\nI have been studying design compliance rules to ensure optimized system layouts. ${link ? `You can view some of my technical studies here: ${link}` : ''}\n\nWould you have a few minutes this week for a brief call regarding how an assistant could support your current project timelines?\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Supercharging Fire Safety Safety! 🔥 - Systems Internship App\n\nHi ${rec},\n\nI've been following ${ctx} and absolutely love how you're using cutting-edge engineering to protect buildings and save lives! I’m looking for an internship where I can dive headfirst into circuit schematics and system design.\n\nI've been teaching myself system design layout guidelines to build efficient workflows. ${link ? `Check out my design work link here: ${link}` : ''}\n\nCan we jump on a quick 2-minute call this week to talk about how I can bring high energy to your tech team?\n\nCheers,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Quick question re: Fire Alarm Internship - ${name}\n\nHi ${rec},\n\nI'm looking around for an internship dealing with fire alarm systems and safety design, and ${ctx} stood out to me as an amazing place to learn.\n\nI've already spent time breaking down electrical circuit regulations and layout practices. ${link ? `Here is a link to what I've been working on: ${link}` : ''}\n\nLet me know if your team is open to taking on a dedicated student assistant this season!\n\nThanks,\n${name}`
    },
    intern_dev: {
        formal: (name, rec, ctx, link) => `Subject: Frontend Developer Internship Application - ${name}\n\nHi ${rec},\n\nI am contacting you regarding a remote frontend developer internship at ${ctx}. I closely follow your software standards and aim to contribute clean code to your web apps.\n\nI am proficient in modern interface architecture and web technologies. ${link ? `My source code portfolio can be found here: ${link}` : ''}\n\nCould we schedule a brief introductory sync this week?\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Building slick, fast UIs for ${ctx}! 🚀\n\nHi ${rec},\n\nI absolutely adore ${ctx}'s web apps and clean layout structure! I'm a developer looking to break things and rebuild them better during a frontend remote internship.\n\nI love bringing static screens to life with highly responsive designs. ${link ? `Take a look at my live web code projects here: ${link}` : ''}\n\nDo you have 2 minutes to check out a quick visual layout audit I did for your homepage?\n\nBest,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Frontend dev looking to add value at ${ctx}\n\nHi ${rec},\n\nI'm a frontend developer looking for an internship opportunity, and I really like what you guys are building at ${ctx}.\n\nI focus on building clean, fully functional code templates. ${link ? `You can check out my project work here: ${link}` : ''}\n\nLet me know if you have any spots open for a fast-learning developer on your team!\n\nThanks,\n${name}`
    },
    intern_uiux: {
        formal: (name, rec, ctx, link) => `Subject: UI/UX Design Internship Application - ${name}\n\nHi ${rec},\n\nI am writing to inquire about UI/UX design internship opportunities at ${ctx}. I highly respect your emphasis on seamless user experiences.\n\nI specialize in user research, wireframing, and component-driven designs. ${link ? `My interactive design portfolio is attached here: ${link}` : ''}\n\nI would welcome the opportunity to discuss how I can assist your product team.\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Designing beautiful user journeys for ${ctx} ✨\n\nHi ${rec},\n\nBad user experience makes me want to redesign the web! I am a passionate UI/UX designer eager to pitch in during a creative internship with ${ctx}.\n\nI turn complex system requirements into stunning, effortless high-fidelity flows. ${link ? `See my interactive prototyping files here: ${link}` : ''}\n\nLet's connect this week to talk pixels and design trends!\n\nWarmly,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: UI/UX design intern opening at ${ctx}?\n\nHi ${rec},\n\nI'm an aspiring UI/UX designer looking for an internship, and I think the design framework you use for ${ctx} is incredible.\n\nI focus heavily on interactive, clean, and modern grid structures. ${link ? `Here's a link to my design profile: ${link}` : ''}\n\nLet me know if your design team needs an extra set of eyes!\n\nBest,\n${name}`
    },
    intern_writer: {
        formal: (name, rec, ctx, link) => `Subject: Content Writing Internship - ${name}\n\nHi ${rec},\n\nI am submitting my application for a content writing internship with ${ctx}. I am confident my writing profile aligns directly with your brand messaging goals.\n\nI specialize in targeted storytelling and educational copy structures. ${link ? `You can read my writing samples here: ${link}` : ''}\n\nThank you for considering my request. I look forward to hearing from you.\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Copy that clicks! ✍️ Writer Intern App for ${ctx}\n\nHi ${rec},\n\nI noticed ${ctx} has been producing stellar content, and I want to write pieces that your audience can't stop sharing! I'm applying for a writing internship.\n\nI love turning complex data into fun, actionable reading material. ${link ? `Here are three custom topic pitches I outlined for you: ${link}` : ''}\n\nDo you have 2 minutes to review them this week?\n\nCheers,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Content writing intern looking to help out at ${ctx}\n\nHi ${rec},\n\nI'm a writer looking for an internship, and I really dig the overall tone and content vibe of ${ctx}.\n\nI put together a few drafts tailored exactly to your style. ${link ? `Check out my drafts link here: ${link}` : ''}\n\nWould love to jump on a quick call if you need writing help!\n\nThanks,\n${name}`
    },
    intern_video: {
        formal: (name, rec, ctx, link) => `Subject: Video Editing & Content Creation Internship - ${name}\n\nHi ${rec},\n\nI am applying for a video editing internship with ${ctx}. I specialize in post-production, pacing adjustments, and retaining viewer engagement metrics.\n\nI am proficient with advanced timeline workflows and motion asset integration. ${link ? `My professional video showreel is available here: ${link}` : ''}\n\nI look forward to discussing how I can scale your digital assets.\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Let's make viral videos for ${ctx}! 🎬🍿\n\nHi ${rec},\n\nHigh-retention editing is a game of frames, and I know exactly how to hook an audience in the first 3 seconds! I'm a video editor pitching for an internship with ${ctx}.\n\nI specialize in dynamic pacing, sound design adjustments, and attention-grabbing social edits. ${link ? `Check out my video editing showreel here: ${link}` : ''}\n\nCan I edit one sample short video for your team completely free this week?\n\nExcitedly,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Video editor looking to cut clips for ${ctx}\n\nHi ${rec},\n\nI'm a content creator/video editor looking for an internship opportunity. I love the video concepts you guys push out at ${ctx}.\n\nI focus on crisp timing and high-impact cuts. ${link ? `Here is a link to my recent work dashboard: ${link}` : ''}\n\nLet me know if you guys have any room for a fresh editor!\n\nBest,\n${name}`
    },
    work_delivery: {
        formal: (name, rec, ctx, link) => `Subject: Project Delivery: ${ctx} Submission\n\nHi ${rec},\n\nI am pleased to deliver the completed project assets for ${ctx}. Everything has been structured in compliance with our agreed criteria.\n\n${link ? `The final secure deliverable files can be downloaded here: ${link}\n\n` : ''}Please let me know if you require any modifications or formal sign-offs.\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Fresh out of the oven! 🧑‍🍳 Project assets for ${ctx}\n\nHi ${rec},\n\nIt's done! I've finalized the creative assets for ${ctx} and focused completely on making the visuals pop and the message stick.\n\n${link ? `Dive directly into the live project files here: ${link}\n\n` : ''}Take a look through and hit me with your thoughts so we can launch this thing!\n\nBest,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Finished up the files for ${ctx}!\n\nHi ${rec},\n\nJust wrapping up the work for ${ctx}. I've cleaned everything up so it's super easy to navigate.\n\n${link ? `Here is the direct link to the folder: ${link}\n\n` : ''}Check it over when you get a free slot and let me know if it all looks good!\n\nThanks,\n${name}`
    },
    work_feedback: {
        formal: (name, rec, ctx, link) => `Subject: Request for Project Review and Feedback - ${ctx}\n\nHi ${rec},\n\nI have assembled the initial drafting phase for ${ctx}. I would appreciate your formal assessment regarding layout alignment and structural flow.\n\n${link ? `The current asset draft can be accessed here: ${link}\n\n` : ''}Kindly advise on any necessary adjustments required to proceed.\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Critique Time! 🎨 Thoughts on the new ${ctx} build?\n\nHi ${rec},\n\nI've thrown together the fresh design layout patterns for ${ctx}! I want to make sure the aesthetic matches our vision completely.\n\n${link ? `Take a look at the design prototype here: ${link}\n\n` : ''}What stands out to you? Does the color palette strike the right mood?\n\nCheers,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Quick review check on ${ctx}\n\nHi ${rec},\n\nI've got a working draft of the ${ctx} files ready to share.\n\n${link ? `Here is the link to review: ${link}\n\n` : ''}Let me know if you spot anything that feels off or needs changing before I keep going!\n\nThanks,\n${name}`
    },
    school_extension: {
        formal: (name, rec, ctx, link) => `Subject: Extension Request: ${ctx} Submission Date\n\nHi ${rec},\n\nI am writing to respectfully request a short extension on the upcoming deadline for ${ctx}. Due to an unforeseen schedule conflict, I want to ensure my work meets your rigorous academic standard.\n\n${link ? `I have uploaded my current working outline here: ${link}\n\n` : ''}Would it be possible to submit the finalized assignment a couple of days later? Thank you for your time and understanding.\n\nRespectfully,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Requesting an extra day or two on ${ctx}! 🙏\n\nHi ${rec},\n\nI'm fully deep into crafting something great for our ${ctx} assignment, but I need just a little more time to polish the final execution and code layout!\n\n${link ? `Here is a preview check of where my draft stands right now: ${link}\n\n` : ''}Could I grab a short extension so I can submit this at its absolute best? Thanks a million!\n\nBest regards,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Quick question about the ${ctx} deadline\n\nHi ${rec},\n\nI'm working through the assignment for ${ctx} right now, but running slightly behind on fine-tuning the last bits.\n\n${link ? `Here's a link to my progress so far: ${link}\n\n` : ''}Is it cool if I hand this in a bit later so I can clean up the errors properly? Thanks!\n\nBest,\n${name}`
    },
    school_leave: {
        formal: (name, rec, ctx, link) => `Subject: Notice of Absence due to Medical Reasons - ${name}\n\nHi ${rec},\n\nI am writing to formally notify you that I will be unable to attend sessions regarding ${ctx} due to a sudden illness. I intend to review all assigned curriculum material remotely to keep pace.\n\n${link ? `I have uploaded my doctor's note / verification file here: ${link}\n\n` : ''}Thank you for updating my attendance records. I will reach out upon my recovery.\n\nSincerely,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Out of commission today! 🤒 Absence notice for ${ctx}\n\nHi ${rec},\n\nMy immune system went on a sudden strike, so I won't be able to make it to the sessions for ${ctx} today. I'm taking the day to rest up and reset.\n\n${link ? `Medical verification / documentation can be viewed here: ${link}\n\n` : ''}I'll follow up with classmates to copy the notes and stay on track. See you soon!\n\nBest regards,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Out sick today - ${name}\n\nHi ${rec},\n\nI've caught a bug and won't be able to make it in for ${ctx} today. I'm going to resting up to get over it quickly.\n\n${link ? `Here is a link to my note/details: ${link}\n\n` : ''}Let me know if there's any critical assignment I should check out from home!\n\nThanks,\n${name}`
    },
    everyday_followup: {
        formal: (name, rec, ctx, link) => `Subject: Follow-up regarding ${ctx} Status\n\nHi ${rec},\n\nI am writing to follow up on our last discussion regarding ${ctx}. I want to ensure you have all documentation required from my side to advance this file.\n\n${link ? `For quick reference, our asset tracker dashboard is located here: ${link}\n\n` : ''}I await your guidance on any subsequent milestones.\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Bumping this up! ⚡ Quick pulse check on ${ctx}\n\nHi ${rec},\n\nI hope your week is rolling along smoothly! Just popping into your inbox to see how the timelines are looking for ${ctx}.\n\n${link ? `You can check the updated files repository right here: ${link}\n\n` : ''}Let me know if your team needs any extra brainstorm sessions to push this forward!\n\nBest,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Quick follow-up on ${ctx}\n\nHi ${rec},\n\nJust bumping this up to see if you had any updates or thoughts about ${ctx}.\n\n${link ? `Here is the link to our thread file: ${link}\n\n` : ''}Let me know if you need anything else from my end to move forward!\n\nThanks,\n${name}`
    },
    everyday_thankyou: {
        formal: (name, rec, ctx, link) => `Subject: Thank You for Your Time - ${ctx}\n\nHi ${rec},\n\nThank you very much for taking the time to meet with me regarding ${ctx}. Our discussion reinforced my respect for your organization's operational framework.\n\n${link ? `As discussed, I have linked the extra materials we discussed here: ${link}\n\n` : ''}I look forward to our future professional correspondences.\n\nBest regards,\n${name}`,
        creative: (name, rec, ctx, link) => `Subject: Loved our conversation about ${ctx}! 🙌\n\nHi ${rec},\n\nThank you so much for the fantastic chat about ${ctx}! Your perspective on workflows completely sparked a bunch of cool design ideas for me.\n\n${link ? `I've uploaded those extra references we talked about here: ${link}\n\n` : ''}Can't wait to see where this project goes next. Let's talk soon!\n\nCheers,\n${name}`,
        casual: (name, rec, ctx, link) => `Subject: Great meeting you! Thank you\n\nHi ${rec},\n\nJust wanted to send a quick thank you note for taking the time to chat about ${ctx} today. It was super helpful to get your insights.\n\n${link ? `Here is that link I mentioned during our conversation: ${link}\n\n` : ''}Let's stay in touch as things develop!\n\nBest,\n${name}`
    }
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
    const context = document.getElementById('contextName').value.trim() || "[Subject Detail]";
    const link = document.getElementById('projectLink').value.trim();
    const role = document.getElementById('roleType').value;
    const tone = document.getElementById('emailTone').value;

    // Safety Multi-tier Check
    if (!templates[role] || !templates[role][tone]) {
        alert(`Error: Dataset mismatch for ${role} in ${tone} mode.`);
        return;
    }

    // Process variables into template output
    const generatedEmail = templates[role][tone](yourName, fullRecipient, context, link);
    
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
    });
});
