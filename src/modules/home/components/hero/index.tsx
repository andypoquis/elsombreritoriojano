import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { ShoppingBag } from "@medusajs/icons" // Utilizo un icono de bolsa de compras como ejemplo

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center bg-ui-bg-subtle" style={{ backgroundImage: "url('https://tarapoto.com/wp-content/uploads/2020/06/artesania-del-peru.jpg')" }}>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-8">
        <span>
          <Heading
            level="h1"
            className="text-4xl leading-10 text-white font-semibold mb-4"
          >
            Sombrerito Riojano
          </Heading>
          <Heading
            level="h2"
            className="text-2xl leading-8 text-white font-normal mb-8"
          >
            Descubre la auténtica artesanía peruana en cada detalle
          </Heading>
        </span>
        <a
          href="https://google.com"
          target="_blank"
          className="text-white"
        >
          <Button variant="secondary" className="flex items-center">
            Comprar ya
            <ShoppingBag className="ml-2" />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
