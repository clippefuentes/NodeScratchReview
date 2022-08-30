const fs = require("fs").promises;

export const getStats = async path => {
  try {
    const stats = await fs.stat(path);
    console.log(stats);
    console.log(`isFile: ${stats.isFile()}`);
    console.log(`isDirectory: ${stats.isDirectory()}`);

  } catch (error) {
    console.error(error);
  }
};

export const readFile = async (path) => {
  try {
    const contents = await fs.readFile(path, "utf8");
    console.log(contents);
  } catch (error) {
    console.error(error);
  }
};

export const writeFile = async (file, content) => {
  try {
    await fs.writeFile(file, content)
  } catch (err) {
    console.error(err)
  }
}

export const appendFile = async (file, content) => {
  try {
    await fs.appendFile(file, content)
  } catch (err) {
    console.error(err)
  }
}

// getStats('./test.txt');

// readFile("./test.txt");
