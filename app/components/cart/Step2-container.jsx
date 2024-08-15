"use client"
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import ContactDetails from './ContactDetails';
import AddressDetails from './AddressDetails';

const Step2container = () => {
    return (
        <div className='lg:col-span-8 col-span-12 rounded-2xl border sm:p-5 p-2 shadow-xl flex flex-col gap-6 h-auto'>
            <Accordion selectionMode='multiple'>
                <AccordionItem key="1" aria-label="1.جزئیات تماس" title="1. جزئیات تماس">
                    <ContactDetails />
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="2. جزئیات آدرس">
                    <AddressDetails />
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                    {/* {defaultContent} */}
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Step2container
