"use client";
import CustomInput from "@/app/components/CustomInput";
import { FormError } from "@/app/components/form-error";
import { Button } from "@nextui-org/button";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

const SignUp = () => {
  // states
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [opt, setOpt] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [code, setCode] = useState(null);
  const router = useRouter();
  const phoneValidation = new RegExp(
    /^(?:(?:\+|00)98)?(?:0)?(9\d{9}|(?:[1-8]\d{2,3})\d{7,8})$/
  );

  // schemas
  const schema = Yup.object().shape({
    firstname: Yup.string().required("نام الزامی است."),
    lastname: Yup.string().required("نام خانوادگی الزامی است."),
    phone: Yup.string()
      .required("شماره همراه معتبر نیست")
      .matches(phoneValidation, "شماره همراه معتبر نیست"),
    code_meli: Yup.number().min(10).required("کد ملی الزامی است."),
    password: Yup.string().required("رمز عبور الزامی است."),
    confirmPassword: Yup.string().required("تکرار رمز عبور الزامی است."),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      code_meli: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: schema,

    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        setError("رمز عبور و تکرار رمز عبور یکسان نیستند");
      } else {
        setError(null);

        console.log("values", values);
      }
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="flex min-h-[calc(100dvh-441px)] w-full items-center justify-center my-5">
      <div className="flex w-full max-w-md flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-2xl text-center font-bold">ثبتنام</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <CustomInput
            isRequired={true}
            label={"نام"}
            name="firstname"
            value={values.firstname}
            type={"string"}
            className={"text-xs"}
            isInvalid={errors.firstname && touched.firstname}
            color={errors.firstname && touched.firstname ? "danger" : "success"}
            errorMessage={errors.firstname}
            onChange={handleChange}
          />
          <CustomInput
            isRequired={true}
            label={"نام خانوادگی"}
            name="lastname"
            type={"string"}
            value={values.lastname}
            isInvalid={errors.lastname && touched.lastname}
            color={errors.lastname && touched.lastname ? "danger" : "success"}
            errorMessage={errors.lastname}
            onChange={handleChange}
          />
          <CustomInput
            isRequired={true}
            label={"شماره همراه"}
            name="phone"
            type={"number"}
            value={values.phone}
            isInvalid={errors.phone && touched.phone}
            color={errors.phone && touched.phone ? "danger" : "success"}
            errorMessage={errors.phone}
            onChange={handleChange}
          />
          <CustomInput
            isRequired={true}
            label={"کد ملی"}
            name={"code_meli"}
            type={"number"}
            value={values.code_meli}
            isInvalid={errors.code_meli && touched.code_meli}
            color={errors.code_meli && touched.code_meli ? "danger" : "success"}
            errorMessage={errors.code_meli}
            onChange={handleChange}
          />
          <CustomInput
            isRequired={true}
            label={"رمز عبور"}
            name={"password"}
            password={true}
            value={values.password}
            isInvalid={errors.password && touched.password}
            color={errors.password && touched.password ? "danger" : "success"}
            errorMessage={errors.password}
            onChange={handleChange}
          />
          <CustomInput
            isRequired={true}
            label={"تکرار رمز عبور"}
            name={"confirmPassword"}
            password={true}
            value={values.confirmPassword}
            isInvalid={errors.confirmPassword && touched.confirmPassword}
            color={
              errors.confirmPassword && touched.confirmPassword
                ? "danger"
                : "success"
            }
            errorMessage={errors.confirmPassword}
            onChange={handleChange}
          />
          {error && <FormError message={error} />}
          <Button color="primary" type="submit">
            ثبت نام
          </Button>
          <p className="text-right text-xs">
            حساب کاربری دارید؟&nbsp;
            <Link href="/signin" size="sm">
              <span className="text-center text-xs">ورود</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
