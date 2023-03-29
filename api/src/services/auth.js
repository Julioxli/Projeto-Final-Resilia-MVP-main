import bcrypt from 'bcryptjs'

export const createPasswordHash = async (password) =>
 bcrypt.hash(password,8)


export const checkPassword = async (user,password) =>
    bcrypt.compare(password, user.password, (err, data) => {
        //if error than throw error
        if (err) throw err

        //if both match than you can do anything
        if (data) {
            console.log({ msg: "Login success" })
        } else {
            console.log({ msg: "Invalid credencial" })
        }
        return data
    })