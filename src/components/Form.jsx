import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import axios from 'axios'


const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data);

  }
 
  return (
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Заполните заявку на обратную связь</h1>
      <div className='input-group mb-3'>
        <input {...register('lastName',{
          required: true,
          maxLength: 50,
          pattern: /^[а-яА-Я]+$/i,
        })}
        type="text"
        className='form-control'
        placeholder='Фамилия'/>
      </div>
      {errors?.lastName?.type === 'required' && (<p>Поле обязательно для заполнению</p>)}
      {errors?.lastName?.type === 'maxLength' && (<p>Поле не пожет содержать более 50 символов</p>)}
      {errors?.lastName?.type === 'pattern' && (<p>Поле заполненно некорректно</p>)}

      <div className='input-group mb-3'>
        <input {...register('Name',{
          required: true,
          maxLength: 50,
          pattern: /^[а-яА-Я]+$/i,
        })}
        type="text"
        className='form-control'
        placeholder='Имя'/>
      </div>
      {errors?.lastName?.type === 'required' && (<p>Поле обязательно для заполнению</p>)}
      {errors?.lastName?.type === 'maxLength' && (<p>Поле не пожет содержать более 50 символов</p>)}
      {errors?.lastName?.type === 'pattern' && (<p>Поле заполненно некорректно</p>)}

      <div className='input-group mb-3'>
        <input {...register('patranomic',{
          required: true,
          maxLength: 50,
          pattern: /^[а-яА-Я]+$/i,
        })}
        type="text"
        className='form-control'
        placeholder='Отчество'/>
      </div>
      {errors?.lastName?.type === 'required' && (<p>Поле обязательно для заполнению</p>)}
      {errors?.lastName?.type === 'maxLength' && (<p>Поле не пожет содержать более 50 символов</p>)}
      {errors?.lastName?.type === 'pattern' && (<p>Поле заполненно некорректно</p>)}

      <div className='input-group mb-3'>
        <input {...register('Email',{
          required: true,
          maxLength: 50,
          pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
        })}
        type="text"
        className='form-control'
        placeholder='Email'/>
      </div>
      {errors?.lastName?.type === 'required' && (<p>Поле обязательно для заполнению</p>)}
      {errors?.lastName?.type === 'maxLength' && (<p>Поле не пожет содержать более 50 символов</p>)}
      {errors?.lastName?.type === 'pattern' && (<p>Поле заполненно некорректно</p>)}


        <input className='btn btn-outline-primary' type="submit" />
      </form>

    </div>
  );
}

export default Form