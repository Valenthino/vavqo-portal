export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-[#ffffff] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">VAVQO</h2>
            <p className="mt-2">Innovative solutions with a human touch</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: sawadogovalentin53@gmail.com</p>
            <p>WhatsApp: +1 501 697 2162</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 VAVQO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

