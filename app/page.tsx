import BlogCard from "./components/BlogCard";
import CategoryCard from "./components/CategoryCardProduct";
import Container from "./components/Container";
import FaqAccordion from "./components/FaqAccordion";
import FeaturedCardProduct from "./components/FeaturedCardProduct";
import Input from "./components/Input";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Container bgImage={"/images/hero.png"}>
        <Section>
          <div className="flex flex-col items-start justify-center max-w-3xl mx-auto min-h-[80vh] gap-6 text-left px-4 sm:px-6 lg:px-0">
            <h1 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-[#E1E1E1] drop-shadow-sm leading-tight">
              Criando Conforto, Redefinindo Espaços. <br />
              <span className="text-[#E2E2E2] text-center text-3xl md:text-4xl">
                Seu Lar, Seu Estilo com Assinatura!
              </span>
            </h1>
            <p className="text-base text-center sm:text-lg text-[#E1E1E1] max-w-3xl leading-relaxed">
              Nossas peças combinam estilo contemporâneo com caimento perfeito,
              feitas para quem valoriza qualidade sem abrir mão da elegância.
              Aqui, cada look conta uma história — a sua.
            </p>
            <div className="w-full flex justify-center">
              <Input type="search" placeholder="Pesquisar produto" />
            </div>
          </div>
        </Section>
      </Container>

      <Container>
        <Section>
          <div className="flex flex-col flex-nowrap justify-between items-center gap-4 lg:flex-row ">
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-[#1E1E1E]">
              Produtos em Destaque
            </h2>
            <p className="text-base sm:text-xl text-center  sm:text-center md:text-xl md:text-center lg:text-start text-[#7B6F63] lg:max-w-4/12 ">
              Descubra os destaques da coleção com estilo e elegância
              incomparáveis.
            </p>
          </div>
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
            <FeaturedCardProduct
              image="/vestido.jpg"
              title="Vestido Floral"
              price="R$ 199,90"
              priceOld="R$ 249,90"
            />
            <FeaturedCardProduct
              image="/vestido2.jpg"
              title="Vestido Midi"
              price="R$ 129,90"
              priceOld="R$ 159,90"
            />
            <FeaturedCardProduct
              image="/vestido3.jpg"
              title="Vestido Longo"
              price="R$ 249,90"
              priceOld="R$ 299,90"
            />
            <FeaturedCardProduct
              image="/vestido4.jpg"
              title="Vestido Curto"
              price="R$ 89,90"
              priceOld="R$ 119,90"
            />
          </div>
        </Section>
      </Container>
      <Container>
        <Section>
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-8 text-center ">
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-[#1E1E1E]">
              Veja nossa gama de categorias
            </h2>
            <p className="text-base sm:text-lg text-[#7B6F63] max-w-2xl">
              Explore as diversas categorias que preparamos para te inspirar,
              organizar sua rotina e transformar seus objetivos em conquistas
              reais.
            </p>
          </div>
          <div className="w-full mx-auto px-4 py-12">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 auto-rows-[200px] sm:auto-rows-[300px]">
              <CategoryCard
                title="Moda Praia"
                imageUrl="/images/moda-praia.jpg"
                className="xl:row-span-3 lg:row-span-3 row-span-1 h-full"
              />
              <CategoryCard
                title="Moda Fitness"
                imageUrl="/images/moda-fitness.jpg"
                className="xl:row-span-2 lg:row-span-1 row-span-1 h-full"
              />
              <CategoryCard
                title="Casual Feminino"
                imageUrl="/images/casual-feminino.jpg"
                className="xl:row-span-3 lg:row-span-3 row-span-1 h-full"
              />
              <CategoryCard
                title="Executivo"
                imageUrl="/images/moda-executiva.jpg"
                className="xl:row-span-1 lg:row-span-1 row-span-1 h-full"
              />
            </div>
          </div>
        </Section>
      </Container>
      <Container>
        <Section>
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row ">
            <div className="flex flex-col max-w-4xl gap-8 ">
              <h2 className="text-2xl text-center sm:text-2xl md:text-4xl  font-semibold text-[#1E1E1E] lg:text-start">
                Produtos Mais Populares
              </h2>
              <p className="text-base text-center sm:text-lg text-[#7B6F63] max-w-2xl lg:text-start">
                Explore as diversas categorias que preparamos para te inspirar,
                organizar sua rotina e transformar seus objetivos em conquistas
                reais.
              </p>
            </div>
            <button className="bg-[#7B6F63] text-white px-4 py-2 rounded-md hover:bg-[#6a5b4d] transition duration-200 ease-in-out">
              Ver Todos
            </button>
          </div>
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
            <FeaturedCardProduct
              image="/roupa.jpg"
              title="Kit Executivo"
              price="R$ 199,90"
              priceOld="R$ 249,90"
            />
            <FeaturedCardProduct
              image="/roupa1.jpg"
              title="Kit de Academia"
              price="R$ 129,90"
              priceOld="R$ 159,90"
            />

            <FeaturedCardProduct
              image="/roupa3.jpg"
              title="Kit Casual"
              price="R$ 89,90"
              priceOld="R$ 119,90"
            />
            <FeaturedCardProduct
              image="/roupa2.jpg"
              title="Kit All Black Academia"
              price="R$ 249,90"
              priceOld="R$ 299,90"
            />
            <FeaturedCardProduct
              image="/roupa3.jpg"
              title="Kit Casual"
              price="R$ 199,90"
              priceOld="R$ 249,90"
            />
            <FeaturedCardProduct
              image="/roupa2.jpg"
              title="Kit All Black"
              price="R$ 129,90"
              priceOld="R$ 159,90"
            />
            <FeaturedCardProduct
              image="/roupa.jpg"
              title="Kit Executivo"
              price="R$ 89,90"
              priceOld="R$ 119,90"
            />
            <FeaturedCardProduct
              image="/roupa1.jpg"
              title="Kit Academia"
              price="R$ 249,90"
              priceOld="R$ 299,90"
            />
          </div>
        </Section>
      </Container>
      <Container bgColor="bg-[#3E3A36]">
        <div className="w-full h-full  text-white">
          <Section>
            <div className="flex flex-col gap-8 items-center justify-center  py-12 lg:flex-row lg:justify-between h-screen">
              <div className="w-12/12 flex flex-col gap-12 items-center lg:w-5/12 lg:items-start">
                <h2 className="text-4xl text-center sm:text-3xl md:text-5xl font-semibold text-white lg:text-start">
                  Qualidade que você sente. Confiança que você veste.
                </h2>
                <button className="bg-[#7B6F63] max-w-[300px] w-full text-white px-4 py-3 rounded-md hover:bg-[#6a5b4d] transition duration-200 ease-in-out">
                  Saiba mais
                </button>
              </div>
              <div className="w-12/12 flex flex-col gap-12 py-12 text-center lg:w-5/12 lg:text-start lg:block">
                <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl lg:mb-12">
                  Na Vesty, cada peça é pensada para entregar conforto, estilo e
                  durabilidade. Nossa comunidade confia e recomenda — e os
                  números falam por si!
                </p>
                <div className="flex flex-row gap-8 mt-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-4xl">99%</h3>
                    <p>Clientes satisfeitas com o caimento das peças.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-4xl">100%</h3>
                    <p>Produtos com acabamento premium e toque suave.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </Container>
      <Container>
        <Section>
          <div className="flex flex-col items-center justify-center mx-auto  gap-8 text-center lg:flex-row lg:justify-between">
            <div className="flex flex-col max-w-4xl gap-8 ">
              <h2 className="text-2xl text-center sm:text-2xl md:text-4xl  font-semibold text-[#1E1E1E] lg:text-start">
                Inspire-se com a Gente
              </h2>
              <p className="text-base text-center sm:text-lg text-[#7B6F63] max-w-2xl lg:text-start">
                Descubra tendências, dicas de estilo e novidades exclusivas do
                nosso universo.
              </p>
            </div>
            <div className="h-full flex flex-col gap-4 lg:w-5/12 lg:items-end">
              <button className="bg-[#7B6F63] max-w-[300px] w-full text-white px-4 py-4 rounded-2xl hover:bg-[#6a5b4d] transition duration-200 ease-in-out">
                Leia todos os artigos
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
            <BlogCard
              image="/images/blog-look-inverno1.png"
              title="5 Dicas para Criar Looks de Inverno Sofisticados"
              author="Equipe Vesty"
              date="20 Abr 2025"
            />
            <BlogCard
              image="/images/blog-look-outono.png"
              title="Tedências da estação: O que usar nesse Outono?"
              author="Equipe Vesty"
              date="20 Abr 2025"
            />
            <BlogCard
              image="/images/5-peças.jpg"
              title="5 Peças-Chave para um Guarda-Roupa Versátil"
              author="Equipe Vesty"
              date="20 Abr 2025"
            />
            <BlogCard
              image="/images/vestidos.jpg"
              title="Por que nossas clientes amam a Vesty?"
              author="Equipe Vesty"
              date="20 Abr 2025"
            />
          </div>
        </Section>
      </Container>
      <Container>
        <Section>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-12 h-[80vh] max-w-7xl mx-auto px-4">
            {/* LADO ESQUERDO */}
            <div className="flex flex-col gap-8 max-w-xl w-full">
              <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-[#1E1E1E] text-center lg:text-start">
                Perguntas Frequentes
              </h2>
              <p className="text-base sm:text-lg text-[#7B6F63] text-center lg:text-start">
                Tire suas dúvidas com facilidade e segurança.
              </p>
              <button className="bg-[#7B6F63] max-w-[300px] w-full text-white px-4 py-4 rounded-2xl hover:bg-[#6a5b4d] transition duration-200 ease-in-out self-center lg:self-start">
                Faça sua pergunta
              </button>
            </div>

            {/* LADO DIREITO */}
            <div className="w-full lg:w-5/12 max-h-full pr-2">
              <FaqAccordion />
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}
