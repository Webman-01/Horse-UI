import { spawn } from "child_process";
import { projectRoot } from "./path";
export const createTaskName = <T>(name: string, fun: any) =>
  Object.assign(fun, { displayName: name });

export const run = async (command: string) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(" ");
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: "inherit", //子进程输出共享给父进程
      shell: true,
    });
    app.on("close", resolve);
  });
};
export const pathRewriter = (format: string) => {
  return (id: any) => {
    // console.log(id,'id');
    
    id = id.replaceAll("../../", `h-ui/${format}`);
    return id
  };
};
