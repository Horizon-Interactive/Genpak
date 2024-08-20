export function directory(name: string) {
  const fs = Atomic.getFileSystem();
  if (!fs.dirExists(name)) {
    fs.createDir(name);
  }
  return name;
}
