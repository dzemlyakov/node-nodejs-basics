export const parseArgs = () => {
  let output = "";
  const flag = /--/.test(process.argv);

  if (flag) {
    const keyValueArray = process.argv.slice(2).reduce((acc, _, index, array) => {
      if (index % 2 === 0) {
        return [...acc, array.slice(index, index + 2)];
      }
      return acc;
    }, []);

    keyValueArray.forEach((item) => {
      return (output += `${item[0].slice(2)} is ${item[1]}, `);
    });
  } else {
    output = "no flags  ";
  }
  output = output.slice(0, -2);
  
  return console.log(output);
};
parseArgs();
