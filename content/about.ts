// Short about text. Keep it a few plain sentences, no bio padding.
// Written from facts in the brief; extend the last line with your own detail.

export const about = {
  paragraphs: [
    "I grew up in Serbia and came to Iowa to study computer science at Luther College, graduating in 2027. Most of what I enjoy sits on the backend: data models, APIs, and the unglamorous parts that decide whether a product actually holds up.",
    "I'm drawn to healthtech and medical software: domains where getting the details right matters and the work is worth doing well. I care as much about why something should exist as how it's built.",
    "Away from the keyboard, I played basketball for Luther College, which is where a lot of how I work comes from: showing up, competing, and building something with a team.",
  ],
  // Short, honest "what I focus on" cards for the About grid — drawn from the
  // paragraphs above and my real work, not invented claims. `icon` maps to a
  // component in the About section.
  focus: [
    {
      icon: "server",
      title: "Backend systems",
      body: "Data models, REST APIs, auth, and multi-tenant isolation. The parts that decide whether a product holds up.",
    },
    {
      icon: "heart",
      title: "Healthtech",
      body: "Medical software where getting the details right matters: DICOM anonymization, imaging tools, HIPAA-aware design.",
    },
    {
      icon: "users",
      title: "Team-built",
      body: "Four internships and a college basketball career: I work by showing up, competing, and shipping with a team.",
    },
    {
      icon: "code",
      title: "Shipped to production",
      body: "DormSy, a campus marketplace I built solo, is live and in use at Luther College, not just a demo.",
    },
  ],
} as const;
