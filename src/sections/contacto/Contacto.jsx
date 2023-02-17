import React, {useState, useRef} from 'react'
import { Divider } from 'primereact/divider';
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';


export const Contacto = () => {

    const form = useRef();

    const toast = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formValido, setFormValido] = useState(false);

    const person = {
        name: name,
        email: email,
        message: message,
    }

    const msg = {
        to: 'davidjcr200040@gmail.com',
        from: person.email,
        text: person.message,
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        toast.current.show({severity:'success', summary: 'Enviado', detail:'¡Mensaje enviado!', life: 3000});

        await emailjs.sendForm('service_vlewycr', 'template_uaiyywc', form.current, 'YDTHbXh2aFmULfoQp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        setName('');
        setEmail('');
        setMessage('');
        setFormValido(false);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
          case 'user_name':
            setName(value);
            break;
          case 'user_email':
            setEmail(value);
            break;
          case 'user_message':
            setMessage(value);
            break;
          default:
            break;
        }
        setFormValido(
          name !== '' && email !== '' && message !== ''
        );
    };

    return (
        <>
            <Divider className="text-center">
                <span className="p-tag">CONTACTO</span>
            </Divider>

            <div className="flex flex-row justify-content-center">
                <div className="card">
                    <form ref={form} className="formgrid grid" onSubmit={handleSubmit}>
                        <div className="col-12 md:col-6">
                            <label style={{fontSize: '1.8rem'}}>Nombre</label>
                            <input 
                                    type="text" 
                                    placeholder="Nombre"
                                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                                    name="user_name"
                                    value={name}
                                    onChange={handleChange}
                                    required
                                
                            />

                            <label style={{fontSize: '1.8rem'}}>Email</label>
                            <input 
                                className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                                type="email" 
                                placeholder="example@gmail.com"
                                name="user_email"
                                value={email}
                                onChange={handleChange}
                                required   
                            />
                        </div>
                        <div className="col-12">
                            <label style={{fontSize: '1.8rem'}}>Mensaje</label>
                            <textarea 
                                type="text" 
                                rows="4" 
                                placeholder="Déjame un mensaje para contartarte conmigo!"
                                className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                                name="user_message"
                                value={message}
                                onChange={handleChange}
                                required
                            >

                                </textarea>
                        </div>
                        <div className="col-12 mb-4">
                            <Toast ref={toast} />
                            <Button type="submit" disabled={!formValido} value="Send" className="bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Enviar</Button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
