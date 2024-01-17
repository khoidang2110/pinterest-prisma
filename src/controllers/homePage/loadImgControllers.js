import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// dang ky
// cap nhat

const getImg = async (req, res) => {
  let { img_name } = req.query;
  try {
    if (!img_name) {
      img_name = "";
    }
    let data = await prisma.image.findMany({
      where: {
        img_name: {
          contains: img_name,
        },
      },
    });

      res.send(data);
    
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};

export { getImg };
