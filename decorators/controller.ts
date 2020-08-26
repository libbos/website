export async function loadControllers (controllerPath: string) {
  try {
    for await (const dirEntry of Deno.readDirSync(controllerPath)) {
      import(`../${controllerPath}/${dirEntry.name}`);
    }
  } catch (error) {
    console.error(error)
    console.log("no such file or dir :---- " + controllerPath)
  }
}