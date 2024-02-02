import { PrismaClient } from "@prisma/client";
import { checkToken } from "../../config/jwt.js";
const prisma = new PrismaClient();
const getUser = async (req, res) => {
  let { id } = req.params;
  let { token } = req.headers;
  let isValidToken = checkToken(token);
  console.log(isValidToken)
  try {
    let data = await prisma.users.findMany({
      where: {
        id: Number(id),
      },
    });

    if (data.length === 0) {
      res.send("user id does not exits");
    } else {
      if (data.id == isValidToken.data.data.id) {
        // neu id tìm giống id token thì show info token (info token ko có avatar)
        res.send(isValidToken.data);
      } else {
        // show info data
        res.send(data);
      }
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
const getSavedImagedByUserId = async (req, res) => {
  let { id } = req.params;

  try {
    let data = await prisma.saved_imaged.findMany({
      where: {
        user_id: Number(id),
      },
    });

    if (data.length === 0) {
      res.send("user id does not exits");
    } else {
      res.send(data);
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
const getImgCreateByUserId = async (req, res) => {
  let { id } = req.params;

  try {
    let data = await prisma.image.findMany({
      where: {
        user_id: Number(id),
      },
    });

    if (data.length === 0) {
      res.send("user id does not exits");
    } else {
      res.send(data);
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};

const deleteImgById = async (req, res) => {
  try {
    let { id } = req.params;

    const findImg = await prisma.image.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (findImg) {
      await prisma.image.delete({
        where: {
          id: Number(id),
        },
      });
      res.send("You just deleted the image");
    } else {
      res.send("Image not found");
    }
  } catch (error) {
    console.error(`Backend error: ${error}`);
    res.status(500).send("Internal Server Error");
  }
};
export { getUser, getSavedImagedByUserId, getImgCreateByUserId, deleteImgById };
