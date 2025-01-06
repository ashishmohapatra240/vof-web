import Image from 'next/image'
import Button from '../ui/Button'

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/Illustration.png"
              alt="Contact Us"
              width={500}
              height={400}
              className="object-contain"
            />
            {/* <h2 className="text-2xl font-bold mt-6">
              We would love to hear from you!
            </h2> */}
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                E-MAIL ID
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                PHONE
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <Button variant="primary" className="w-full">
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 