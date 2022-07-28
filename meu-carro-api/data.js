import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Bryan',
      email: 'bryan@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Tesla Model S",
      slug: "tesla-model-s",
      category: "Carro",
      image: '/images/tesla.jpeg',
      price: 89900,
      countInStock: 1,
      brand: "Tesla",
      rating: 4.8,
      numReviews: 10,
      description:
        "O Model S é um sedan esportivo elétrico produzido pela Tesla sendo lançado nos Estados Unidos em junho de 2012. Segundo a agência EPA, o carro elétrico pode andar 426 km (265 milhas) num único carregamento de seu pacote de bateria de 85 kWh, atingindo assim a maior autonomia de qualquer carro elétrico disponível no mundo."
    },
    {
      // _id: '2',
      name: "Toyota SW4",
      slug: "toyota-sw4",
      category: "Carro",
      image: '/images/toyota.jpeg',
      price: 38000,
      countInStock: 20,
      brand: "Toyota",
      rating: 4.0,
      numReviews: 10,
      description:
        "O Toyota 4-Runner é um veículo utilitário esportivo fabricado pela Toyota e vendido no mundo inteiro desde 1984, que já passou por cinco gerações. Entretanto, está equipado com uma caixa de transferência com tração nas 2 rodas longas (propulsão), tração nas 4 rodas longas e tração nas 4 rodas curtas."
    },
    {
      // _id: '3',
      name: "Fiat Toro",
      slug: "fiat-toro",
      category: "Carro",
      image: '/images/fiat.jpeg',
      price: 18000,
      countInStock: 15,
      brand: "Fiat",
      rating: 4.5,
      numReviews: 14,
      description:
        "O FIAT Toro é um Sport Utility Pick-Up (SUP), uma nova categoria de picapes, produzido pela FIAT, bandeira da FCA, lançado em 2016. É fabricado em Goiana (Pernambuco, Brasil). O nome do modelo, é Toro, no masculino. A montadora FIAT sempre se referiu ao mesmo assim, inclusive em um comunicado, se refere como novo Fiat Toro. Será vendido futuramente nos Estados Unidos, com a marca RAM Trucks, ainda sem definição de nome."
    },
    {
      // _id: '4',
      name: "Renault Kwid",
      slug: "renault-kwid",
      category: "Carro",
      image: '/images/renault.jpeg',
      price: 9000,
      countInStock: 5,
      brand: "Renault",
      rating: 4.5,
      numReviews: 10,
      description:
        "O Kwid é um automóvel hatch subcompacto da Renault, lançado inicialmente na Índia, em 2015. No Brasil, seu lançamento ocorreu em agosto de 2017 sendo fabricado em São José dos Pinhais (PR). O veículo tem como principais concorrentes o Volkswagen Up e o Fiat Mobi, dos quais se diferencia pelo design, como um crossover"
    },
    {
      // _id: '5',
      name: "Honda CB 1000R",
      slug: "honda-cb-1000r",
      category: "Motos",
      image: '/images/honda-cb.jpeg',
      price: 13000,
      countInStock: 5,
      brand: "Honda",
      rating: 4.5,
      numReviews: 10,
      description:
        "A CB 1000R é uma moto Honda Naked que possui Acelerador eletrônico TBW, Iluminação Full Led e mais. Confira e encontre a moto ideal para você!"
    },
    {
      // _id: '6',
      name: "Honda CG 160",
      slug: "honda-cg160",
      category: "Motos",
      image: '/images/honda-cg.jpeg',
      price: 2800,
      countInStock: 5,
      brand: "Honda",
      rating: 4.5,
      numReviews: 10,
      description:
        "A CG 160 Titan é uma moto Honda da categoria City que possui Carenagem Agressiva, Motor 162,7cc e muito mais. Confira e encontre a moto ideal para você!"
    },
    {
      // _id: '7',
      name: "Yamaha Fazer FZ25",
      slug: "yamaha-fazer-fz25",
      category: "Motos",
      image: '/images/yamaha-fazer.jpeg',
      price: 4000,
      countInStock: 5,
      brand: "Yamaha",
      rating: 4.5,
      numReviews: 10,
      description:
        "A Fazer FZ25 ABS oferece uma ótima posição de pilotagem, combinando conforto e esportividade para o seu dia a dia. Um equilíbrio perfeito entre prazer e diversão. Agora com nova posição do lampejador do farol que facilita o uso. Com pistão forjado em alumínio e cilindro revestido em cerâmica, o motor da moto entrega durabilidade e economia. Possui sistema ABS nas duas rodas, que evita o travamento das rodas em frenagens bruscas ou em baixa aderência, como dias de chuva, garantindo excelente controle na pilotagem. "
    },
    {
      // _id: '8',
      name: "Yamaha NEO 125 UBS",
      slug: "yamaha-neo-125-ubs",
      category: "Motos",
      image: '/images/yamaha-neo.jpeg',
      price: 2050,
      countInStock: 5,
      brand: "Yamaha",
      rating: 4.5,
      numReviews: 10,
      description:
        "É uma scooter de entrada de 125cc equipado com câmbio CVT e rodas de 14″ com freios unificados (UBS) O motor é um monocilíndrico de 125 cm³ refrigerado a ar, capaz de gerar até 9,8 CV de potência máxima a 8.000 rpm e 1,0 kgfm de torque a 5.500 rpm. O câmbio é automático do tipo CVT (não há embreagem ou pedal de câmbio) e o tanque de combustível tem capacidade para 4,2 litros."
    }
  ]
  // motos: [
  //   {
  //     _id: '5',
  //     name: "Honda CB 1000R",
  //     slug: "Honda-CB1000R",
  //     category: "Motos",
  //     image: '/images/honda-cb.jpg',
  //     price: 13000,
  //     countInStock: 5,
  //     brand: "Honda",
  //     rating: 4.5,
  //     numReviews: 10,
  //     description:
  //       "A CB 1000R é uma moto Honda Naked que possui Acelerador eletrônico TBW, Iluminação Full Led e mais. Confira e encontre a moto ideal para você!"
  //   },
  //   {
  //     _id: '6',
  //     name: "Honda CG 160",
  //     slug: "Honda-CG160",
  //     category: "Motos",
  //     image: '/images/honda-cg.jpg',
  //     price: 2800,
  //     countInStock: 5,
  //     brand: "Honda",
  //     rating: 4.5,
  //     numReviews: 10,
  //     description:
  //       "A CG 160 Titan é uma moto Honda da categoria City que possui Carenagem Agressiva, Motor 162,7cc e muito mais. Confira e encontre a moto ideal para você!"
  //   },
  //   {
  //     _id: '7',
  //     name: "Yamaha Fazer FZ25: Thor Edition",
  //     slug: "Yamaha-Fazer-FZ25-Thor",
  //     category: "Motos",
  //     image: '/images/yamaha-fazer.jpg',
  //     price: 4000,
  //     countInStock: 5,
  //     brand: "Yamaha",
  //     rating: 4.5,
  //     numReviews: 10,
  //     description:
  //       "A Fazer FZ25 ABS oferece uma ótima posição de pilotagem, combinando conforto e esportividade para o seu dia a dia. Um equilíbrio perfeito entre prazer e diversão. Agora com nova posição do lampejador do farol que facilita o uso. Com pistão forjado em alumínio e cilindro revestido em cerâmica, o motor da moto entrega durabilidade e economia. Possui sistema ABS nas duas rodas, que evita o travamento das rodas em frenagens bruscas ou em baixa aderência, como dias de chuva, garantindo excelente controle na pilotagem. "
  //   },
  //   {
  //     _id: '8',
  //     name: "Yamaha NEO 125 UBS",
  //     slug: "Yamaha-NEO125-UBS",
  //     category: "Motos",
  //     image: '/images/yamaha-neo.jpg',
  //     price: 2050,
  //     countInStock: 5,
  //     brand: "Yamaha",
  //     rating: 4.5,
  //     numReviews: 10,
  //     description:
  //       "É uma scooter de entrada de 125cc equipado com câmbio CVT e rodas de 14″ com freios unificados (UBS) O motor é um monocilíndrico de 125 cm³ refrigerado a ar, capaz de gerar até 9,8 CV de potência máxima a 8.000 rpm e 1,0 kgfm de torque a 5.500 rpm. O câmbio é automático do tipo CVT (não há embreagem ou pedal de câmbio) e o tanque de combustível tem capacidade para 4,2 litros."
  //   }
  // ]
};
export default data;