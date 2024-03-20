import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export function StyledLoginForm(
    theme: Theme
){
    return css`
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 0px 12px;


        .forgot-password-span{
            justify-content: flex-end;
            user-select: none;
            cursor: pointer;
            display: flex;
            text-decoration: underline;
            color: ${theme.palette.primary.main};
            margin-top: -26px;
            position: relative;
            z-index: 1;
        }

        .form-buttons-div{
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 12px;
        }
    `;
}