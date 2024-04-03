"use client";

import { isAuthenticated } from "@/utils/auth";
import React, { useEffect, type ComponentType } from "react";
import { redirect } from "next/navigation";


export default function isAuth( Component: ComponentType){
    return function IsAuth(props: any){
        const auth = isAuthenticated;

        useEffect(() => {
            if(!auth){
                redirect('/');
            }
        }, []);

        return <Component/>
    }

}