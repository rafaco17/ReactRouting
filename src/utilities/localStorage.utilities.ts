export const persisLocalStorage = <T>(key: string, value: T) => {
    // en este apartado seria importante saber o manejar que es lo que queremos guardar en el local storage
    localStorage.setItem(key, JSON.stringify({... value}));
}

export const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}