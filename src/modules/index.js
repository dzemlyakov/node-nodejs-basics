import {unknownObject, createMyServer} from './cjsToEsm.mjs'

console.log(unknownObject);
createMyServer.listen(3000, 'localhost', ()=> {
    console.log('Go to localhost:3000 \n\npress ctrl-c to exit ');
})