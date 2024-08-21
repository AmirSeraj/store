"use client";
import CustomInput from "@/app/components/CustomInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";

const SignIn = () => {
  const phoneValidation = new RegExp(
    /^(?:(?:\+|00)98)?(?:0)?(9\d{9}|(?:[1-8]\d{2,3})\d{7,8})$/
  );
  const router = useRouter();
  const schema = Yup.object().shape({
    phone: Yup.string().required("شماره همراه معتبر نیست").matches(phoneValidation, "شماره همراه معتبر نیست"),
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
    },

    validationSchema: schema,

    onSubmit: async (values) => {
      console.log("values", values);
      router.push("/validCode");
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="flex min-h-[calc(100dvh-441px)] w-full items-center justify-center my-5">
      <div className="flex w-full max-w-md flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-2xl text-center font-bold">ورود</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
          <Button color="primary" type="submit">
            ارسال کد
          </Button>
          <p className="text-right text-xs">
            حساب کاربری ندارید؟&nbsp;
            <Link href="/signup" size="sm">
              <span className="text-center text-xs">ثبتنام</span>
            </Link>
          </p>
        </form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">یا</p>
          <Divider className="flex-1" />
        </div>
        <Button startContent={<FcGoogle width={24} />} variant="flat">
          ورود با گوگل
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
