import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    usuarioStatus: null,
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SIGNIN_USER':
            AsyncStorage.setItem('userLogged', JSON.stringify({ foto: action.payload.img, name: action.payload.name }))
            AsyncStorage.setItem('token', action.payload.token)
            return {
                ...state,
                usuarioStatus: action.payload
            }

        case 'LOGOUT':
            AsyncStorage.clear()
            return {
                ...state,
                usuarioStatus: null
            }
      
        default:
            return state

    }
}



export default userReducer