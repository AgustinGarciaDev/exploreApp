import axios from "axios";
const userActions = {

    createAcount: (infoUser) => {
        return async (dispatch, getState) => {
            try {
<<<<<<< HEAD
                const response = await axios.post("https://explore-2021.herokuapp.com/api/user/signup", infoUser

                )
                console.log("action", response.data)
                if (!response.data.success) {
                    return response.data.errores
                }
                dispatch({ type: 'SIGNIN_USER', payload: response.data.response })
=======
                const response = await axios.post("https://explore-2021.herokuapp.com/api/user/signup", infoUser,{
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data;'    
                    }
                })
                    console.log("action", response.data )
                    if (!response.data.success) {
                        return response.data.errores
                    }
                dispatch({ type: 'SIGNIN_USER', payload:response.data.response })
>>>>>>> eadc0d418c3131ca75a35cc648d46479081b6d8c
                return true
            } catch (error) {
                console.log(error)
            }
        }
    },
    signInUser: (infoUser) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post("https://explore-2021.herokuapp.com/api/user/signin", infoUser)
                if (!response.data.success) {
                    return response.data.error
                }
                dispatch({ type: 'SIGNIN_USER', payload: response.data.response })
                return true
            } catch (error) {
                console.log(error)
            }
        }

    },

    SignOut: () => {
        return (dispatch, getState) => {

            dispatch({ type: 'LOGOUT' })
            /*  toast.success("👋Bye", {
                 autoClose: 1000,
                 position: "top-center",
             }) */
        }
    },

    relogin: (userToken) => {

        return async (dispatch, getState) => {
            const response = await axios.get("https://explore-2021.herokuapp.com/api/user/relogin", { headers: { 'Authorization': 'Bearer ' + userToken.token } })

            dispatch({
                type: 'SIGNIN_USER', payload: {
                    ...response.data.response,
                    token: userToken.token
                }
            })
        }
    },

    uploadPhoto: (formData) => {
        return async (dispatch, getState) => {
            await axios.post("https://explore-2021.herokuapp.com/api/user/uploadPhoto", formData)
        }
    },

}

export default userActions