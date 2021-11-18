import { IncomingMessage, ServerResponse } from 'http'
import url from 'url'
import PrismaClientPkg from '@prisma/client'
const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()

export default async(req: IncomingMessage, res: ServerResponse) => {
  const queryObject = url.parse(req.url, true).query

  const products = await prisma.product.findMany()
  // const products = await prisma.product.findMany({
  //   take: top,
  // })
  return {
    products,
  }
}
