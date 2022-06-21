import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
        list-style: none;
        
    }

    :root{
        --white: rgba(255,255,255,1);
        --gray0 : rgba(248, 249, 250, 1);
        --gray1:rgba(134, 142, 150, 1);
        --gray2: rgba(52, 59, 65, 1);
        --gray3:rgba(33, 37, 41, 1);
        --gray4: rgba(18, 18, 20, 1);        
        --pink: rgba(255, 87, 127, 1);
        --pinkFocus: rgba(255, 66, 127, 1);
        --purple:rgba(89, 50, 63, 1);
        
    }

    body{
        background-color: var(--gray4);
    }

    input, button, select{
        
        font-family: 'Inter';
        font-size: 16px;
        line-height: 1.5rem;
        border-radius: 4px;
      padding: 0.5rem;
    }

   

    button{
        cursor: pointer;
        color: var(--gray0);        
    }

    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: var(--gray0);
        
    }

    h1,h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 1.5rem;
        color: var(--pink);
    }



`;
export default globalStyle;
