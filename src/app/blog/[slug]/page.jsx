import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <section className="grid grid-cols-4">
      <div className="col-span-3">
        <h3>Fashion</h3>
        <h2>Fashion Project Launch: African Heritage Exhibition Day</h2>

        <div className="flex">
          <Image
            src={"/img.png"}
            alt=""
            width={60}
            height={60}
            className="object-cover"
          />
        </div>
        <article>
          Are you considering a trip to Nigeria this December to immerse
          yourself in the festive season or explore the rich culture of Africa&apos;s
          largest nation? If you&apos;re a UK citizen or other National living and
          working in the UK, obtaining a Nigerian tourist visa is essential for
          your leisure travel. This guide will simplify the application process
          while highlighting key tourism activities, accommodation options,
          flights, necessary vaccinations, and transportation in Nigeria.
          <h2>Why You Need a Nigerian Tourist Visa</h2>
          <p>
            UK citizens must apply for a tourist visa before travelling to
            Nigeria. This visa is specifically intended for non-Nigerians
            wishing to explore the country and does not permit work or study.
            The application process can take up to two months, so it’s advisable
            to apply early.
          </p>
          <h2>Required Documents for Visa Application</h2>
          <p>
            To successfully apply for your Nigerian tourist visa, you’ll need
            the following documents: Valid Passport: Ensure your passport is
            valid for at least six months beyond your intended stay and has two
            blank pages. Visa Application Form: This can be obtained from the
            Nigerian High Commission in London. Two Passport-Sized Photos:
            Recent photos against a white background that meet the specified
            dimensions. Proof of Accommodation: Evidence of where you&apos;ll stay in
            Nigeria, such as hotel booking confirmations or an invitation
            letter. Financial Proof: Bank statements or credit card statements
            showing sufficient funds for your stay. Return or Onward Ticket:
            Proof of your return or onward flight tickets. Yellow Fever
            Vaccination Certificate: Mandatory for entry into Nigeria.
          </p>
        </article>
      </div>
    </section>
  );
}
