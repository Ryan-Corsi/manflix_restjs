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
import Filmes from ".//Filmes";
import Link from "next/link";


export default function UserRegister() {

    const [formData, setFormData] = useState(
        {
            name: '',
        }
    );
    const [assinaturas, setAssinaturas] = useState([]);
    const [selectedAssinatura, setSelectedAssinatura] = useState();




    useEffect(async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/assinatura/`
        );
        const data = await response.json();
        setAssinaturas(data);
        console.log(data);
    }, []);

    useEffect(() => {
        // console.log(selectedRepository);
        console.log(selectedAssinatura);
    }, [selectedAssinatura]);




    // const [lista,setLista] = useState([])
    // async function getLista(){
    //     return await fetch("http://127.0.0.1:8000/assinatura/").then(response=>response.json()).then(data=>setLista(data)).catch(error=>console.log(error))
    //  }

    //  getLista()

    // function handleForm(event){
    // const {name, value} = event.target;
    // setFormData((prevState) => 
    //     ({
    //     ...prevState,
    //     [name] :value,  
    //     })
    // );
    // }

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

                        <div className="form">
                            {/* Nome do Filme */}
                            <div className="field">
                                <label htmlFor="name" className="lbl_nm">Nome:</label>
                                <span className="p-float-label">
                                    <InputText id="name" name="name" autoFocus />
                                </span>
                            </div>

                            {/* assinaturas */}
                            <div className="field">
                                <label htmlFor="assinaturas" className="lbl_assinaturas">Assinatura:</label>
                                <span className="p-float-label">
                                    <Dropdown
                                        id="assinaturas"
                                        name="assinaturas"
                                        value={selectedAssinatura}
                                        onChange={(e) => setSelectedAssinatura(e.value)}
                                        className="btn"
                                        optionLabel="nome"
                                        options={assinaturas}
                                        placeholder="Selecione..."

                                    />
                                </span>

                            </div>
                            <Button
                                type="submit"
                                label="Cadastrar"
                                className="mt-2 btnSbmt"
                            />
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
            color: red;
            font-size: 20px;
        
        }               

        .titulo {
            color: red; 
            font-size: 50px;
            letter-spacing: 9px;
        }

     
        .lbl_nm{
            font-size: 20px;
            display:flex;
            color: #91908c
        }
        
       .lbl_assinaturas{
            font-size: 20px;
            display:flex;
            
            color: #91908c
       }

        .form{
            display: flex;
            background: white;
            width: 400px;
            height: 350px;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            border-radius: 20px;

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

        .btn{
            width:300px;
        }
        
        
      



    `}</style>
        </>
    )
}
