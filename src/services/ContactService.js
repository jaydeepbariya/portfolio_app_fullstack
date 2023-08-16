import axios from "axios";
import {contact} from './apis';
import { toast } from "react-hot-toast";

export const contactUs = async (contactData) => {

    try{
        const response = await axios.post(contact.CONTACT_US, contactData);
        
        if(!response.data.success){
            throw new Error(response.data.message);
        }

        toast.success(response.data.message);

    }catch(error){
        console.log("CONTACT ERROR...", error);
        toast.error(error.message);
    }

}
