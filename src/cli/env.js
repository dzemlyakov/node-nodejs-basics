export const parseEnv = () => {
  let output = "";
  const customEnv = /RSS_/.test(Object.keys(process.env));
  
  if (customEnv) {
    Object.entries(process.env).forEach(([key, value]) => {
      if (key.startsWith("RSS_")) {
        output += `${key}=${value}; `
      }
    });
  } else {
    output = "no env  ";
  }
  output = output.slice(0, -2);

  return console.log(output);
};
parseEnv();
