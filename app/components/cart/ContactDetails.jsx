import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/input";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react'
import { Button } from "@nextui-org/button";

const ContactDetails = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const schema = Yup.object().shape({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        email: Yup.string().required().email(),
        phone: Yup.string().required().min(10),
        username: Yup.string().required(),
        password: Yup.string().required().min(6),
    });

    // Formik hook to handle the form state
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            username: '',
            password: '',
        },

        // Pass the Yup schema to validate the form
        validationSchema: schema,

        // Handle form submission
        onSubmit: async (values) => {
            console.log('valll', values);
            // Make a request to your backend to store the data
        },
    });

    // Destructure the formik object
    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-3">
            <Input
                value={values.email}
                type="email"
                label="ایمیل"
                name="email"
                labelPlacement="outside"
                variant="underlined"
                isRequired
                isInvalid={errors.email && touched.email}
                color={errors.email && touched.email ? "danger" : "success"}
                errorMessage="ایمیل الزامی است."
                onChange={handleChange}
                className="max-w-xs text-black"
                radius="sm"
            />

            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <Input
                    value={values.firstname}
                    type="text"
                    label="نام"
                    name="firstname"
                    labelPlacement="outside"
                    variant="underlined"
                    isRequired
                    isInvalid={errors.firstname && touched.firstname}
                    color={errors.firstname && touched.firstname ? "danger" : "success"}
                    errorMessage="نام الزامی است."
                    onChange={handleChange}
                    className="max-w-xs text-black"
                    radius="sm"
                />
                <Input
                    value={values.lastname}
                    type="text"
                    label="نام خانوادگی"
                    name="lastname"
                    labelPlacement="outside"
                    variant="underlined"
                    isRequired
                    isInvalid={errors.lastname && touched.lastname}
                    color={errors.lastname && touched.lastname ? "danger" : "success"}
                    errorMessage="نام خانوادگی الزامی است."
                    onChange={handleChange}
                    className="max-w-xs text-black"
                    radius="sm"
                />
            </div>

            <Input
                value={values.phone}
                type="phone"
                label="شماره تماس"
                name="phone"
                labelPlacement="outside"
                variant="underlined"
                isRequired
                isInvalid={errors.phone && touched.phone}
                color={errors.phone && touched.phone ? "danger" : "success"}
                errorMessage="شماره تماس الزامی است."
                onChange={handleChange}
                className="max-w-xs text-black"
                radius="sm"
            />

            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <Input
                    value={values.username}
                    type="text"
                    label="یوزرنیم"
                    name="username"
                    labelPlacement="outside"
                    variant="underlined"
                    isRequired
                    isInvalid={errors.username && touched.username}
                    color={errors.username && touched.username ? "danger" : "success"}
                    errorMessage="یوزرنیم الزامی است."
                    onChange={handleChange}
                    className="max-w-xs text-black"
                    radius="sm"
                />
                <Input
                    value={values.password}
                    label="پسورد"
                    name="password"
                    labelPlacement="outside"
                    variant="underlined"
                    isRequired
                    isInvalid={errors.password && touched.password}
                    color={errors.password && touched.password ? "danger" : "success"}
                    errorMessage="پسورد الزامی است."
                    onChange={handleChange}
                    className="max-w-xs text-black"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                            {isVisible ? (
                                <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    radius="sm"
                />
            </div>
            
            <Button variant="shadow" type="submit" color="primary" className="my-5" radius="sm">تایید</Button>
        
        </form>
    )
}

export default ContactDetails
