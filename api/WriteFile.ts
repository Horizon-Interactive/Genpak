import { directory } from "../utils";
import FileBuffer from "./FileBuffer";

/**
 * Format would look like for bckStr: `${date}:${chapter}:${name}`
 */
export default function (variant: number, bckStr: string) {
  const dir = directory("saves");
  const file = new Atomic.File(
    `saves/save${variant}.genpak`,
    Atomic.FileMode.FILE_WRITE,
  );
  const buff = new FileBuffer(bckStr);
  file.writeString(buff.generate());
  file.close();
}
