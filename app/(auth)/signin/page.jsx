"use client";
import CustomInput from "@/app/components/CustomInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/firebase/config";

const SignIn = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [opt, setOpt] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [code, setCode] = useState(null);
  const phoneValidation = new RegExp(
    /^(?:(?:\+|00)98)?(?:0)?(9\d{9}|(?:[1-8]\d{2,3})\d{7,8})$/
  );
  const router = useRouter();
  const schema = Yup.object().shape({
    phone: Yup.string()
      .required("شماره همراه معتبر نیست")
      .matches(phoneValidation, "شماره همراه معتبر نیست"),
  });

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
        "expired-callback": () => {},
      }
    );

    setRecaptchaVerifier(recaptchaVerifier);

    return () => {
      recaptchaVerifier.clear();
    };
  }, [auth]);

  const formik = useFormik({
    initialValues: {
      phone: "",
    },

    validationSchema: schema,

    onSubmit: async ({ phone }) => {
      const formattedPhoneNumber = phone.startsWith("0")
        ? phone.substring(1)
        : phone;

      const phoneNumber = "+98" + formattedPhoneNumber;

      // setResendCountdown(60);

      startTransition(async () => {
        setError("");
        setOpt(false);
        try {
          const confirmationResult = await signInWithPhoneNumber(
            auth,
            phoneNumber,
            recaptchaVerifier
          );
          setConfirmationResult(confirmationResult);
          console.log("ddddd", confirmationResult);
          setSuccess("کد با موفقیت ارسال شد.");
          if (confirmationResult) {
            setOpt(true);
          }
        } catch (error) {
          console.log(error);
          if (error.code === "auth/invalid-phone-number") {
            setError("شماره همراه اشتباه است.");
          } else if (error.code === "auth/too-many-requests") {
            setError("تعداد درخواست غیر مجاز");
          } else {
            setError("کد ارسال نگردید. دوباره تلاش کنید.");
          }
        }
      });
      console.log("values", phone);
      // router.push("/validCode");
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  //step 2 compare codes
  const handleCheckCode = () => {
    startTransition(async () => {
      setError(null);
      try {
        await confirmationResult.confirm(code);
        router.push("/");
      } catch (error) {
        setError("کد وارد شده صحیح نیست. دوباره تلاش کنید.");
      }
    });
  };

  return (
    <div className="flex min-h-[calc(100dvh-441px)] w-full items-center justify-center my-5">
      {/* step 1 */}
      <div
        className={`w-full max-w-md flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small ${
          opt ? "hidden" : "flex"
        }`}
      >
        <p className="pb-2 text-2xl text-center font-bold">ورود</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <CustomInput
            isRequired={true}
            label={"شماره همراه"}
            name="phone"
            type={"tel"}
            value={values.phone}
            isInvalid={errors.phone && touched.phone}
            color={errors.phone && touched.phone ? "danger" : "success"}
            errorMessage={errors.phone}
            onChange={handleChange}
          />
          <Button
            isDisabled={!values.phone || isPending}
            isLoading={isPending}
            color="primary"
            type="submit"
          >
            ارسال کد
          </Button>
          <div
            className={`p-1 text-center ${
              error || success ? "block" : "hidden"
            }`}
          >
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </div>
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

        <div id="recaptcha-container" />
      </div>

      {/* Insert otp code step 2 */}
      <div
        className={`w-full max-w-md flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small ${
          opt ? "flex" : "hidden"
        }`}
      >
        <p className="pb-2 text-2xl text-center font-bold">
          کد ارسال شده را وارد کنید
        </p>
        <CustomInput
          isRequired={true}
          label={"کد ارسال شده به شماره همراه را وارد کنید."}
          name="code"
          type={"number"}
          // value={values.code}
          // isInvalid={errors.code && touched.code}
          // color={errors.code && touched.code ? "danger" : "success"}
          errorMessage=" کد الزامی است."
          onChange={(e) => setCode(e.target.value)}
        />
        <Button
          isDisabled={isPending}
          isLoading={isPending}
          color="primary"
          onClick={handleCheckCode}
        >
          ورود
        </Button>
        <div className={`p-1 text-center ${error ? "block" : "hidden"}`}>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
