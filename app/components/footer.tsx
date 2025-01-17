export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-[#ffffff] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">VAVQO</h2>
            <p className="mt-2">Innovative solutions with a human touch</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold">Contact</h3>
            <a href="tel:+1 501 697 2162">+1 501 697 2162</a>
            <a href="mailto:sawadogovalentin53@gmail.com">hello@vavqo.com</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 VAVQO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

