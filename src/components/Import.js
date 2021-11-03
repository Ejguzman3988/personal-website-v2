import NAVBAR from "./NavBar";
import INFO from "./Choices/Info/Info";
import JOURNEY from "./Choices/Journey/Journey";
import RESUME from "./Choices/Info/Resume/Resume";
import PROJECTS from "./Choices/Info/Projects/Projects";
import ENTRYPAGE from "./EntryPage/EntryPage";
import CHOICES from "./Choices/Choices";

export const NavBar = NAVBAR;
export const Info = INFO;
export const Journey = JOURNEY;
export const Resume = RESUME;
export const Projects = PROJECTS;
export const EntryPage = ENTRYPAGE;
export const Choices = CHOICES;

// TODO: CHECK IF THIS IS MESSING WITH WEBPACK OR BABEL. WOULD IT MAKE PACKAGES BIGGER BECAUSE WE ARE IMPORTING AND EXPORTING AGAIN.
