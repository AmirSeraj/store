"use client";
import CustomInput from "@/app/components/CustomInput";
import { Button } from "@nextui-org/button";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const ValidCode = () => {
  const router = useRouter();
  const schema = Yup.object().shape({
    code: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
    },

    validationSchema: schema,

    onSubmit: async (values) => {
      console.log("values", values);
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="flex min-h-[calc(100dvh-441px)] w-full items-center justify-center my-5">
      <div className="flex w-full max-w-md flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-2xl text-center font-bold">کد ارسال شده را وارد کنید.</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <CustomInput
            isRequired={true}
            label={"کد ارسال به شماره همراه را وارد کنید."}
            name="code"
            type={"number"}
            value={values.code}
            isInvalid={errors.code && touched.code}
            color={errors.code && touched.code ? "danger" : "success"}
            errorMessage=" کد الزامی است."
            onChange={handleChange}
          />
          <Button color="primary" type="submit">
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ValidCode;
