import Step2container from '@/app/components/cart/Step2-container'
import Step2sidebar from '@/app/components/cart/Step2-sidebar'

const Step2CompleteAddress = () => {
  return (
    <div className='2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] grid grid-cols-12 gap-5 min-h-[calc(100vh-420px)] py-5'>
      <Step2sidebar />
      <Step2container />
    </div>
  )
}

export default Step2CompleteAddress
