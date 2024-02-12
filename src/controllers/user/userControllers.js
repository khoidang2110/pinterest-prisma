import { PrismaClient } from "@prisma/client";
import { checkToken, createToken } from "../../config/jwt.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// dang ky
// cap nhat

const login = async (req, res) => {
  try {
    let { id, password } = req.body;
    // check email
    let data = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    if (data) {
      // check pass đúng -> tạo token
      // so sánh pass nhập và pass ở db
      let checkPassword = bcrypt.compareSync(password, data.password);
      if (checkPassword) {
        // có => tạo token
        // tạo token -> jsonwebtoken jwt
        // mã hoá password->bcrypt
        let payload = {
          id: data.id,
          email: data.email,
          password: data.password,
          name: data.name,
          age: data.age,
        };
        let token = createToken(payload);
        res.status(200).send(token);
      } else {
        res.status(400).send("password incorrect!");
      }
    } else {
      res.status(404).send("login fail");
    }

    // => báo lỗi
  } catch (error) {
    res.send(`Backend error: ${error}`);
  }

  // res.send({email,password})
};

const signUp = async (req, res) => {
  try {
    let { id, email, password, name, age } = req.body;

    const data = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    if (data) {
      res.status(400).send("User exists!!!");
    } else {
      // mã hoá pass
      let encodePassword = bcrypt.hashSync(password, 10);
      let newUser = {
        id,
        email,
        password: encodePassword,
        name,
        age,
      };
      await prisma.users.create({
        data: newUser,
      });
      res.status(201).send("user is created!");
    }
  } catch (error) {
    res.status(500).send(`Backend error: ${error}`);
  }
};
const updateUser = async (req, res) => {
  let { id, email, password, name, age } = req.body;
  let { token } = req.headers;
  let isValidToken = checkToken(token);
  let encodePassword = bcrypt.hashSync(password, 10);

  if (id == Number(isValidToken.data.data.id)) {
    await prisma.users.update({
      where: {
        id,
      },
      data: {
        email: email ? email : isValidToken.data.data.email,
        password: password ? encodePassword : isValidToken.data.data.password,
        name: name ? name : isValidToken.data.data.name,
        age: age ? age : isValidToken.data.data.age,
      },
    });

    let payload = {
      id: isValidToken.data.data.id,
      email: email ? email : isValidToken.data.data.email,
      password: password ? encodePassword : isValidToken.data.data.password,
      name: name ? name : isValidToken.data.data.name,
      age: age ? age : isValidToken.data.data.age,
    };

    let newToken = createToken(payload);
    res.status(200).send({
      message: "User updated, please use the new token to access",
      token: newToken,
    });
  } else {
    res.send("you are not the owner");
  }
};
export { signUp, login, updateUser };
