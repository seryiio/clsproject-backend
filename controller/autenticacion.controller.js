// import { compare } from "bcrypt";
// import { encrypt } from "../helpers/handleBCrypt.js";
// import { User } from "../models/userCLS.model.js";
// import { UserRole } from "../models/userRole.model.js";
// import { Role } from "../models/roleCLS.model.js";
// import { tokenSign } from "../helpers/generateToken.js";

// export const login = async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ where: { username, } });

//         if (!user) {
//             res.status(404).json({ error: 'Usuario no encontrado' });
//             return;
//         }

//         if (user) {
//             const checkPassword = await compare(password, user.password);

//             const tokenSession = await tokenSign(user);

//             if (checkPassword) {
//                 res.send({
//                     data: user,
//                     tokenSession
//                 })
//             } else {
//                 res.status(409).json({ error: 'Datos incorrectos' });
//             }
//         }
//     } catch (error) {
//         console.error('Error en la autenticación:', error);
//         res.status(500).json({ error: 'Error en la autenticación' });
//     }
// };


// export const register = async (req, res) => {
//     try {
//         const { email, image, username, password } = req.body;
//         const passwordHash = await encrypt(password);

//         // Crea el usuario
//         const newUser = await User.create({
//             email,
//             image,
//             username,
//             password: passwordHash
//         });

//         const userRole = await Role.findOne({ where: { name: 'CIF' } });
//         if (!userRole) {
//             console.error(`El rol ${name} no está definido en la base de datos.`);
//             return res.status(500).json({ error: 'Error al crear usuario' });
//         }

//         await UserRole.create({ userId: newUser.id, roleId: userRole.id });

//         res.status(200).json({ data: newUser, message: 'Usuario creado correctamente' });
//     } catch (error) {
//         console.error('Error al crear usuario:', error);
//         res.status(500).json({ error: 'Error al crear usuario' });
//     }
// };
