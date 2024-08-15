import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";

const AddressDetails = () => {
    
    const schema = Yup.object().shape({
        houseNumber: Yup.number().required(),
        address: Yup.string().required(),
        codeposti: Yup.number().required(),
        city: Yup.string().required(),
        province: Yup.string().required(),
    });

    // Formik hook to handle the form state
    const formik = useFormik({
        initialValues: {
            houseNumber: '',
            address: '',
            codeposti: '',
            city: '',
            province: '',
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

            <div className="grid grid-cols-12 gap-3">
                <Input
                    value={values.houseNumber}
                    type="text"
                    label="پلاک"
                    name="houseNumber"
                    labelPlacement="outside"
                    variant="underlined"
                    isRequired
                    isInvalid={errors.houseNumber && touched.houseNumber}
                    color={errors.houseNumber && touched.houseNumber ? "danger" : "success"}
                    errorMessage="شماره پلاک الزامی است."
                    onChange={handleChange}
                    className="max-w-xs text-black lg:col-span-3 col-span-12"
                    radius="sm"
                />
                <Input
                    value={values.address}
                    type="text"
                    label="آدرس"
                    name="address"
                    labelPlacement="outside"
                    variant="underlined"
                    isRequired
                    isInvalid={errors.address && touched.address}
                    color={errors.address && touched.address ? "danger" : "success"}
                    errorMessage="آدرس الزامی است."
                    onChange={handleChange}
                    className="w-full text-black lg:col-span-9 col-span-12"
                    radius="sm"
                />
            </div>

            <Input
                value={values.codeposti}
                type="text"
                label="کد پستی"
                name="codeposti"
                labelPlacement="outside"
                variant="underlined"
                isRequired
                isInvalid={errors.codeposti && touched.codeposti}
                color={errors.codeposti && touched.codeposti ? "danger" : "success"}
                errorMessage="کد پستی الزامی است."
                onChange={handleChange}
                className="w-full text-black max-w-xs"
                radius="sm"
            />

            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                {/* <div className="ir-select">
                    <select className="ir-province"></select>
                    <select className="ir-city"></select>
                </div> */}
                {/* <Select
                    size={'sm'}
                    label={'استان'}
                    name="province"
                    isRequired
                    variant="underlined"
                    isInvalid={errors.province && touched.province}
                    color={errors.province && touched.province ? "danger" : "success"}
                    // onSelectionChange={setValue}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                        <SelectItem key={number} textValue={number}>
                            {number}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    size={'sm'}
                    label={'شهر'}
                    name="city"
                    isRequired
                    isInvalid={errors.city && touched.city}
                    color={errors.city && touched.city ? "danger" : "success"}
                    variant='underlined'
                    // onSelectionChange={}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                        <SelectItem key={number} textValue={number}>
                            {number}
                        </SelectItem>
                    ))}
                </Select> */}
            </div>

            <Button variant="shadow" type="submit" color="primary" className="my-5" radius="sm">تایید</Button>
        </form>
    )
}

export default AddressDetails
