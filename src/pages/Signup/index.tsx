import React from 'react';
import  { FiArrowLeft,FiMail,FiUser,FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';


const SignUp: React.FC = () => (
<Container>
    <Content>
    <img src={logoImg} alt="GoBarber"/>
    <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="nome"/>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="passworld" icon={FiLock} type="password"  placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>

       
    </form>
    <a href="login">
        <FiArrowLeft/>
        Voltar para logon</a>
    </Content>
    <Background/>
</Container>
);

export default SignUp;