import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { CartList } from "../compponents/CartList";

export function ProfilePage(props){
    const { profileName } = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        if (props.profile==null || props.profile.userName !== profileName){
            navigate('*');
        }
    },[])

    return(
        <>
        <CartList profile={props.profile} setProfile={props.setProfile} change={props.change} setChange={props.setChange}/>
        </>
        )
}