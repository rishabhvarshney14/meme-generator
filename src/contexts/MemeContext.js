import React, {createContext, useContext, useState, useEffect} from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, getDoc, doc } from 'firebase/firestore'

const MemeContext = createContext()

export const useMeme = () => {
    return useContext(MemeContext);
}

export const MemeProvider = ({children}) => {
    const memesCollection = collection(db, 'memes')

    const getMemes = async (email) => {
        const data = await getDocs(memesCollection)
        let newData = data.docs.map(doc => ({...doc.data()}))
        return newData.filter(item => (item.email === email))
    }

    const saveMeme = async (email, imgUrl, upperText, lowerText) => {
        const data = {
            email: email,
            imgUrl: imgUrl,
            upperText: upperText,
            lowerText: lowerText,
        }
        const res = await addDoc(memesCollection, data)
        return res.id
    }

    const getMemeById = async (id) => {
        const data = await getDoc(doc(db, 'memes', id))
        if (data.exists())
            return data.data()
        else
            Error("No data exists")
    }

    const value = {
        getMemes,
        saveMeme,
        getMemeById,
    }

    return (
        <MemeContext.Provider value={value}>
            {children}
        </MemeContext.Provider>
    )
}