export const parseArgs = () => {
    let arr = process.argv.slice(2)
    let chunk = arr.reduce((acc, _, index, array)=> {
        if(index % 2 === 0) {
            return [...acc, array.slice(index, index + 2)]
        }
        return acc
    }, [])
    let res = ''
    chunk.forEach((elem)=>{
        return  res += `${elem[0].slice(2)} is ${elem[1]}, `
    })
    console.log(res.slice(0,-2));
};
parseArgs()