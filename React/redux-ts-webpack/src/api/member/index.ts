import { MemberEntity } from '../../model'
import { members } from './mockData'

const fecthMembers = ():Promise<MemberEntity[]> => {
  return Promise.resolve(members)
}

export const memberAPI = {
  fecthMembers
}