import React from "react";
import "./LandingSection.css";
import { Box, display, fontFamily, height, sizeHeight } from "@mui/system";
import { Typography } from "@mui/material";
import StyleFirstLetter from "../../components/StyleFirstLetter";
import image from "../../assets/p5-secondary.png";
import { makeStyles } from "@mui/styles";
import TitleWithGradient from "../../components/TitleWithGradient";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import UnderlinedContent from "../../components/UnderlinedContent";
import { hover } from "@testing-library/user-event/dist/hover";
import logoStackoverflow from "../../assets/log-stack.png";
import theme from "../../theme";
import constellation from "../../assets/endless-constellation.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  },
  profilePic: {
    height: "300px",
    width: "300px",
  },
  title: {
    fontStyle: "italic",
  },
  logosContainer: {
    display: "flex",
    width: "25vw",
    justifyContent: "center",
    gap: "16px",
    // background: "cyan",
  },
  flashyIntro: {
    textAlign: "center",
    width: "50vw",

    // marginBottom: "16px",
  },
  links: {
    color: "black",
    width: "30px",
    height: "auto",
  },
}));

const GITHUB_LINK = "https://github.com/lord-cosmos";
const LINKEDIN_LINK = "https://www.linkedin.com/in/dinesh-pandikona/";
const MAIL_LINK = "mailto:neupersonalusage@gmail.com";
const primary = theme.palette.primary.main;
const secondary = theme.palette.secondary.main;

function LandingSection() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img
        className={classes.profilePic}
        src={image}
        alt="dinesh-pandikona-profile-pic"
      />

      <Typography className={classes.flashyIntro} variant="h8">
        <StyleFirstLetter
          content="H"
          color={theme.palette.secondary.main}
        ></StyleFirstLetter>
        ey there, coding connoisseurs and recruiter extraordinares!
        <TitleWithGradient
          otherStyles={classes.title}
          content="I'm DINESH PANDIKONA"
          fontSize="16px"
          // from={secondary}
          // to={secondary}
        />{" "}
        your friendly neighborhood tech wizard with a penchant for turning code
        into poetry. Formerly rocking the tech scene at{" "}
        <UnderlinedContent color="black" variant="p">
          Deloitte
        </UnderlinedContent>
        , I've mastered the art of Problem Solving, TypeScript, and Java –– my
        trusty sidekicks in the world of ones and zeros.
      </Typography>
      <Typography className={classes.flashyIntro}>
        Currently, on a mission to conquer the realms of programming design
        paradigms and computer science at{" "}
        <UnderlinedContent color="black" variant="p">
          Northeastern University
        </UnderlinedContent>
        , I'm like the superhero your codebase deserves. Crafting scalable
        distributed systems is my jam, and I've got a knack for making bugs
        vanish like magic tricks (abracadabra, anyone?😜).
      </Typography>
      <Box className={classes.logosContainer}>
        <a
          className={classes.links}
          href={GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ color: secondary }} />
        </a>
        <a
          className={classes.links}
          href={LINKEDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ color: secondary }} />
        </a>
        <a className={classes.links} href={MAIL_LINK}>
          <EmailIcon sx={{ color: secondary }} />
        </a>
        <a className={classes.links} href={MAIL_LINK}>
          <img src={logoStackoverflow} alt="seo" style={{ height: "24px" }} />
        </a>
      </Box>
    </Box>
  );
}

export default LandingSection;
