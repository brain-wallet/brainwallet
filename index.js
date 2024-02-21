#!/usr/bin/env node

import sha256 from '@brain-wallet/sha256'
import { getPubkey, compressPublicKey } from 'getpublickey'
import hash160 from 'hash160'

function asciiToHex(str) {
  let hexStr = ''
  for (let i = 0; i < str.length; i++) {
    hexStr += str.charCodeAt(i).toString(16)
  }
  return hexStr
}

export default async function brain(text) {
  let hex = asciiToHex(text)
  // console.log(secret)

  const sha = await sha256(hex)

  // console.log(sha)

  const pubkey = getPubkey(sha)

  // console.log(pubkey)

  const hash = await hash160(pubkey)

  // console.log(hash)

  return hash
}
