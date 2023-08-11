import { UserCredentials } from "../../../@types/UserCredential";
import { header } from "../../../configs/apiConfig";
import { Post } from "../apiCall";
import { UserDetails } from '../../../@types/UserDetails';

const signIn = async (userCredential: UserCredentials) => {
    await Post('login', userCredential, header).then((response) => {
        if (response?.status === 200) {
            return response.data;
        }
    })

}