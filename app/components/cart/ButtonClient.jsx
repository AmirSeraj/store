"use client"
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'

const ButtonClient = () => {
    const router = useRouter();
    return (
        <Button onClick={() => router.push('/cart/step2-completeAddress')} size='lg' variant='shadow' color='primary'>تایید و تکمیل سفارش</Button>
    )
}

export default ButtonClient
