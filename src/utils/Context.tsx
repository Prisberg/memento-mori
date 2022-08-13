import { createContext, useContext, useEffect, useState } from "react";

interface ContextInterface {
    username: string;
    setUsername: Function;
    getName: Function;
}

export const MementoContext = createContext<ContextInterface>({
    username: '',
    setUsername: () => false,
    getName: () => false,
})

export default function MementoProvider(props: any) {
    const [username, setUsername] = useState('');

    function getName() {
        const data = localStorage.getItem('name');

        if (typeof data === 'string')
            setUsername(data.replaceAll('"', ''))
    }

    useEffect(() => {
        getName()
    }, [])

    return (
        <MementoContext.Provider
            value={{
                username,
                setUsername,
                getName,
            }}
            {...props}
        />
    )
}

export const useMementoContext = () => useContext(MementoContext)