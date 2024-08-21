// Metodo post: Guarda los datos.
async function postUsers(userData) {
    try {
        const response = await fetch("http://localhost:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postUsers}









