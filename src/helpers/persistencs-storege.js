export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.error("Error setting item in localStorage:")
    }
}




export const getItem = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log("Error getting item from localStorage:")
    
    }
}

export const removeItem = (key) => {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log("Error removing item from localStorage:")
    }}