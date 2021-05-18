const insertUsers = (data) => {
    const {name, email, hashedPassword} = data;

    return (`
        INSERT INTO users
        (id, display, email, type, password)
        VALUES
        ( NULL, '${name}', '${email}', 0, '${hashedPassword}')
    `);

}

module.exports = {
    "getAllUsers": "all user",
    "insertUsers": insertUsers
}