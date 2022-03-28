import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import background from "../public/image/img.jpg"
import Register from ".//Register";
import Menu from ".//Menu";
import UserRegister from ".//UserRegister";
import Link from "next/link";


export default function Files() {

    const [formData, setFormData] = useState(
        {
            name: '',
        }
    );
    



    useEffect(async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/filmes/`
        );
        const data = await response.json();
        setFilmes(data);
        console.log(data);
    }, []);

    const [filmes, setFilmes] = useState([]);

    



    
    





    return (

        <>
            <div className="html">
                <div className="header">
                    <div className="titulo">
                        <Link href="/Menu">
                            <a>MANFLIX</a>
                        </Link>
                    </div>

                    <Link href="/UserRegister">
                        <a>Novo Usuário</a>
                    </Link>
                    <Link href="/Register">
                        <a>Novo Filme</a>
                    </Link>
                    <Link href="/Filmes">
                        <a>Filmes</a>
                    </Link>
                    
                </div>
                <div style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", backgroundImage: "url('https://images8.alphacoders.com/107/thumb-1920-1073623.jpg')", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
                }}>


                    <div className="body">
                        <div className="filme_nm">
                            <a>Filmes Disponíveis:</a>
                            {filmes.map(filmes => <div>{filmes.nome}</div>)}
                            
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
    
        .header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: black;
            height: 70px;
            color: #e50914; 
            font-size: 20px;
        
        }               

        .titulo {
            color: #e50914; 
            font-size: 50px;
            letter-spacing: 9px;
        }

     
      
        .body {
            display: flex;
            height: 899px;
            align-items: center;
            justify-content: center;
            background-image: url("../public/image/img.jpg");
            backgroundSize: cover;
            backgroundRepeat: no-repeat;
        }   

        .body a{
            font-size: 50px;
        }
       
        
        
        .filme_nm{
            color: white;
            font-size: 25px;
            text-align: center;
        }



    `}</style>
        </>
    )
}
