import { NextApiRequest, NextApiResponse } from 'next'
import data from 'mock/classmenu.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data)
}