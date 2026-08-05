import type { Education } from "@/lib/types";

// Education, rendered as its own section between About and Experience.
// Facts are drawn from the brief: Luther College, computer science,
// graduating 2027, and playing basketball there.
export const education: Education[] = [
  {
    school: "Luther College",
    degree: "B.A. in Computer Science",
    period: "Expected May 2027",
    location: "Decorah, Iowa",
    details:
      "Played basketball for Luther College. Completed four software-engineering internships while studying.",
    // TODO(dimi): add /public/schools/luther-college.jpg (16:9 campus photo,
    // ~1600x900) and /public/logos/luther-college.png (square mark, ~256px).
    // Until then the card renders a gradient panel with the school initials.
  },
];
