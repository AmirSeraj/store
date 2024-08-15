import ShoppingCard from '@/app/components/cart/ShoppingCard'
import ShoppingDetails from '@/app/components/cart/ShoppingDetails'

const Step1Checkout = () => {
    return (
        <div className='2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] grid grid-cols-12 gap-5 min-h-[calc(100vh-420px)] py-5'>
            <ShoppingCard />
            <ShoppingDetails />
        </div>
    )
}

export default Step1Checkout
