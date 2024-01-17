import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// thêm ảnh

const createImg = async (req, res) => {

  try {
    let { user_id } = req.params;
    let id = req.body.id;
    let img_name = req.body.img_name;
    let img_decs = req.body.img_decs;
    let newData = {
      id: Number(id),
      img_name,
      img_url: req.file.path,
      img_decs,
      user_id: Number(user_id),
    };
    await prisma.image.create({
      data: newData,
    });
    return res.send("picture uploaded");
  } catch (error) {
    res.send(`Backend error: ${error}`);
  }
};
const uploadMultiplePicture = (req, res) => {
  res.send(req.files);
};
export { createImg, uploadMultiplePicture };
