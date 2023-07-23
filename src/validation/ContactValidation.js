import {object, string} from 'yup'


export const ContactValidation = object({
    sub: string().required('نام الزامی است').max(35, "نام نباید بیشتر از 35 کاراکتر باشد"),
    email:string().required('ایمیل الزامی است').email('ایمیل صحیح نیست'),
    phoneNumber:string().required('شماره موبایل الزامی است').length(10, 'شماره نباید بیشتر از ده رقم باشد'),
    address:string().required('آدرس الزامی است'),
    job:string().required('شغل الزامی است'),
    image:string().url('آدرس عکس اشتباه است'),
    category:string().required('دسته بندی الزامی است')
})