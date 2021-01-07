import React, { useState } from 'react';
import Student from './Student';

const studentList = () => {
    const [studentState , setStudent] = useState({
        student : [
            {
                id: 1, name: 'Chon', editingStudent: false
                
            },
            {
                id: 2, name: 'Boss', editingStudent: false
            }
        ]
    })


    const deleteItemHandler = (key) => {
        const data = [...studentState.student]
    }
}