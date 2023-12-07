import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  Container: {
    backgroundColor: "#CCF381",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23CCF381' cx='50' cy='0' r='50'/%3E%3Cg fill='%23c5e77e' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23bedb7b' cx='50' cy='100' r='50'/%3E%3Cg fill='%23b8cf78' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b1c275' cx='50' cy='200' r='50'/%3E%3Cg fill='%23aab672' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a3aa6f' cx='50' cy='300' r='50'/%3E%3Cg fill='%239c9e6c' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23969269' cx='50' cy='400' r='50'/%3E%3Cg fill='%238f8666' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23887a63' cx='50' cy='500' r='50'/%3E%3Cg fill='%23816d5f' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%237a615c' cx='50' cy='600' r='50'/%3E%3Cg fill='%23745559' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%236d4956' cx='50' cy='700' r='50'/%3E%3Cg fill='%23663d53' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%235f3150' cx='50' cy='800' r='50'/%3E%3Cg fill='%2358244d' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%2352184a' cx='50' cy='900' r='50'/%3E%3Cg fill='%234b0c47' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23440044' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundSize: "contain",
  },
}));

function WorkSection() {
  const classes = useStyles();
  return (
    <Box
      className={classes.Container}
      sx={{ height: "100vh", backgroundColor: "cyan" }}
    ></Box>
  );
}

export default WorkSection;
