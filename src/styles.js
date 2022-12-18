import styled from 'styled-components';


export const Content = styled.header`
    margin-bottom: 1rem; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    button{
        border: 0;
        background-color: #fff;
        padding: 0;
        margin: 0;
    }
    
`

export const Styleddiv = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4.5rem;
    flex-wrap: wrap;
    width: 100%;

`



export const StyledSection = styled.section`

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: 'Mulish';
        margin-top: 1rem;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        width: 300px;

        button:hover{
            border: 1px solid black;
            border-radius: 15px;

        }
`


export const SearchImage = styled.img`

        width: 30px;
        cursor: pointer;
        border-left: 1px solid #f2f2f2;
        padding: 0.7rem;
`



export const Container = styled.main`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

    img{
        max-width: 500px;
        max-height: 200px;
        object-fit:cover;
        width: 100%;
        border-radius: 5px;
    }

    section img{
        width: 20px;
        transform: translateY(-10%);
        margin-right: 2px;
        
    }

    a:hover{
        background-color: #4F4F4F;
        color: #fff;
    }


    a{
        text-decoration: none;
        font-size: 10px;
        font-weight: 700;
        color: #4F4F4F;
        border: 1px solid #4F4F4F;
        border-radius: 0.75rem;
        padding: 0.5rem;
        margin-right: 0.3rem;
    }

    span{
        font-size: 0.75rem;
        color: #828282;
        margin-right: 0.3rem;
        margin-left: 0.2rem;
    }

    p{
        font-size: 0.75rem;
        margin-left:auto;
        color: #4F4F4F;
    }

    section{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 1.0rem;
        position: relative;
    }

    section div{
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
    }

    dt{
        font-weight: 600;
        font-size: 0.875rem;
        margin-bottom: 2rem;
    }

`

export const StyledInput = styled.input`

    border: 0;
    outline: 0;
    box-shadow: 0 0 0 0;
    width: 90%;
    font-family: "Mulish";
    font-weight: 400;
    font-size: 15px;
    
    ::placeholder{
        color: black;
    }
    

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

  
`  


    export const StyledInputGuests = styled.div`
        border-radius: 2px;
        padding: 1.1rem 1rem;
        width: ${props => props.width ? "100%" : ""};
        border-right: ${props => props.borda ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};
        border-top: ${props => props.borderTop ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};
        border-radius: 16px;
        cursor: pointer;

        label{
            font-size: 10px;
            font-weight : 800;
            margin-bottom : 0.8rem;
            margin-left: 0.2rem;
        }

        :hover{
            border: 1px solid black;
        }
`

    export const StyledInputLocation = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 1.1rem 1rem;
    width: ${props => props.location ? "68%" : ""};
    border-right: ${props => props.borda ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};

    margin-right: 1px;
        
    :hover{
        border: 1px solid black;
        cursor: pointer;
        border-radius: 16px;
      
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
      border: 0;
      outline: none;
      color: black;
      font-family: "Mulish";
      font-weight: 400;
      font-size: 15px;
    }

    select option{
        color: black;
    }

`

