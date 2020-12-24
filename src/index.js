import Hasher from './lib/hasher.js';
import PrivateKey from './lib/private-key.js';
import PublicKey from './lib/public-key.js';
import Prng from './lib/prng.js';
import Signature from './lib/signature.js';

const prng = new Prng();
const hasher = new Hasher();
const key = new PrivateKey(prng.random,hasher);
// 多个公钥
const foreign_keys = [new PrivateKey(prng.random,hasher).public_key,
                      new PrivateKey(prng.random,hasher).public_key,
                      new PrivateKey(prng.random,hasher).public_key,
                      new PrivateKey(prng.random,hasher).public_key];
//加密的消息
const msg = 'one ring to rule them all';
//签名
const signature = key.sign(msg,foreign_keys);
//所有的公钥
const public_keys = signature.public_keys;

console.log(signature.verify("zhangsan",public_keys));
