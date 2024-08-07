"use client";
import { IoFilterSharp } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import Model from "./Model";
import Storage from "./Storage";
import PriceRange from "./PriceRange";

const ModalComp = ({ filters, data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        color="primary"
        variant="shadow"
        size="lg"
        className="lg:hidden w-28 gap-4 mb-3"
        onPress={onOpen}
      >
        <p className="text-sm">فیلتر</p>
        <IoFilterSharp />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">فیلتر</ModalHeader>
              <ModalBody className="flex flex-col gap-2 px-4">
                <Model filters={filters} />
                <Storage data={data} />
                <PriceRange />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
