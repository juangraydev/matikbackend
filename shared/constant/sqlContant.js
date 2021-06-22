// const getUserByEmail = (email) => {
//     return(`
//         SELECT * FROM users
//         WHERE users.email = '${email}'
//         limit 1
//     `)
// }

// const insertUsers = (data) => {
//     const {name, email, hashedPassword} = data;

//     return (`
//         INSERT INTO users
//         (id, display, email, type, password)
//         VALUES
//         ( NULL, '${name}', '${email}', 0, '${hashedPassword}')
//     `);

// }

// const getHouseByUser = (id) => {kad
//     return (`
//         SELECT * 
//         FROM user_house 
//         JOIN houses ON houses.id = user_house.houseid 
//         WHERE user_house.userid = '${id}'
//     `);
// }


/**
 * User
 */

const getAllUsers = () => {

}

const getUserById = (id) => {

}

const getUserByEmail = (email) => {
    return(`
            SELECT * FROM users
            WHERE users.email = '${email}'
            limit 1
        `)
}

const addUser = (data) => {
    const {name, email, hashedPassword} = data;

        return (`
            INSERT INTO users
            (id, display, email, type, password)
            VALUES
            ( NULL, '${name}', '${email}', 0, '${hashedPassword}')
        `);
}

const deleteUserById = (id) => {

}

const updateUser = (data) => {

}

/**
 * House
 */
const getAllHouses = () => {

}

const getHouseById = (id) => {

}

const getHouseByUser = (id) => {
    return (`
        SELECT * 
        FROM user_house 
        JOIN houses ON houses.id = user_house.houseid 
        WHERE user_house.userid = '${id}'
    `);
}

const addHouse = (data) => {

}

const deleteHouseById = (id) => {

}

const updateHouse = (data) => {

}

/**
 * Rooms
 */
const getAllRooms = () => {

}

const getRoomByHouseId = (houseId) => {

}

const addRoom = (data) => {

}

const deleteRoomById = (id) => {

}

const updateRoom = (data) => {

}

/**
 * Devices
 */
const getAllDevices = () => {

}

const getDeviceById = (id) => {

}

const getDeviceByHouseId = (houseId) => {

}

const addDevice = (data) => {

}

const deleteDeviceById = (id) => {

}

const updateDevice = (data) => {

}

/**
 * Channels
 */

const getAllChannels = () => {

}

const getChannelById = (id) => {

}

const getChannelByDeviceId = (deviceId) => {

}

const addChannel = (data) => {

}

const deleteChannelByDeviceId = (deviceId) => {
    
}

const deleteChannelById = (id) => {

}

const updateChannel = (data) => {

}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    addUser,
    deleteUserById,
    updateUser,
    getAllHouses,
    getHouseById,
    getHouseByUser,
    addHouse,
    deleteHouseById,
    updateHouse,
    getAllRooms,
    getRoomByHouseId,
    addRoom,
    deleteRoomById,
    updateRoom,
    getAllDevices,
    getDeviceById,
    getDeviceByHouseId,
    addDevice,
    deleteDeviceById,
    updateDevice,
    getAllChannels,
    getChannelById,
    getChannelByDeviceId,
    addChannel,
    deleteChannelByDeviceId,
    deleteChannelById,
    updateChannel
}