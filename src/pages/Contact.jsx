import FullWithLayout from "../layout/FullWithLayout";
import Banner from "../components/utils/Banner";
import ContactDetails from "../components/Contact/ContactDetails";
import FormDetails from "../components/Contact/FormDetails";
import OurStores from "../components/Contact/OurStores";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <FullWithLayout>
      <Banner
        img={"contact/b1.jpg"}
        texto={"#ContactUs"}
        desc={"Leave a Message. We love to hear from you"}
      />
      <ContactDetails />
      <OurStores />
      <FormDetails />
    </FullWithLayout>
  );
};

export default Contact;
