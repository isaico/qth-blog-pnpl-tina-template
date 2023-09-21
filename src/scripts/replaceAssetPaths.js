import { exec } from "child_process";
const postsDirectory = "/src/content/blog/"

const find = "/src/assets/";
let replace = "../../assets/";


replace = replace.replaceAll(".", "\\.");

exec(
    `find ${process.cwd()}${postsDirectory} -type f -name '*.md' -print0 | xargs -0 sed -i -e 's:${find}:${replace}:g'`,
    // GNU sed that runs on Linux but not on mac
    (error, stdout, stderr) => {
      // error handling
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      // success
      console.log(stdout);
      console.log("🖼️ Successfully replaced asset paths");
    }
  );