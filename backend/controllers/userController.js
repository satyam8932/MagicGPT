const { createUserData } = require('../utils/createData');

const createUserController = async (req, res) => {
    try {

        const user_name = req.body.user_name;
        const user_email = req.body.user_email;
        const user_password = req.body.user_password;
        
        // Check if required user data is provided
        if (!user_name || !user_email || !user_password) {
            throw new Error("Please provide User Data");
        } 

        // Create new user data entry
        const newUser = await createUserData(user_name, user_email, user_password);

        // Return new user data entry
        return res.status(201).json(newUser);

    } catch (err) {
        console.error("Error creating user data:", err.message);
        return res.status(500); // Return null in case of errors
    }
}

// const loginUserController = async (req, res) => {};


module.exports = createUserController;