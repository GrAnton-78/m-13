export async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return (users)

    // console.log (users)
}

fetchUsers()
